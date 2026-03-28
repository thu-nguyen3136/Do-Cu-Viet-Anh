const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const newsDir = path.join(pagesDir, 'tin-tuc');

console.log('Starting SEO update...');

// 1. DỊCH VỤ PAGES (Service Pages)
const servicePages = fs.readdirSync(pagesDir).filter(f => f.endsWith('.js') && f.startsWith('thu-mua-'));

for (const file of servicePages) {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // A. Đổi H2 thành H1 cho tiêu đề chính
    content = content.replace(/(<h2 className="text-2xl font-bold uppercase text-\[#000099\]">)(.*?)(<\/h2>)/g, '<h1 className="text-2xl font-bold uppercase text-[#000099]">$2</h1>');
    
    // B. Thêm OG Tags và Canonical nếu chưa có
    const titleMatch = content.match(/<title>(.*?)<\/title>/);
    const descMatch = content.match(/<meta name="description" content="(.*?)" \/>/);
    
    if (titleMatch && descMatch && !content.includes('og:title')) {
        const title = titleMatch[1];
        const desc = descMatch[1];
        const slug = file.replace('.js', '');
        
        // Đoán image base on slug (có thể sai nhưng tốt hơn không có)
        // Nếu không có ảnh đó SEO cũng không chết, nhưng có thì tốt.
        // Ta cũng thêm Canonical
        const ogTags = `
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/${slug}" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/${slug}" />`;
        
        content = content.replace(/(<meta name="description" content=".*?" \/>)/, `$1\n${ogTags}`);
    }

    // C. Thay thế text thành Internal Link (Cho một số từ khoá phổ biến trong các trang dịch vụ)
    const linksMap = [
        { text: 'Mua cửa sắt Cũ', url: '/thu-mua-cua-sat' },
        { text: 'Mua Cửa Cuốn Cũ', url: '/thu-mua-cua-cuon' },
        { text: 'Mua cửa gỗ cũ', url: '/thu-mua-cua-go' },
        { text: 'mua cửa nhôm cũ', url: '/thu-mua-cua-nhom' },
        { text: 'Thu mua tôn cũ', url: '/thu-mua-ton-cu' },
        { text: 'mua xác nhà cũ', url: '/thu-mua-xac-nha-xuong' },
        { text: 'mua bàn ghế cũ', url: '/thu-mua-ban-ghe-go' },
        { text: 'thu mua thiết bị vệ sinh', url: '/thu-mua-thiet-bi-ve-sinh' }
    ];

    // Chỉ thay thế text bên trong <em> (để an toàn không phá code và chỉ thay danh sách)
    // Ví dụ: <em>- Mua Cửa Cuốn Cũ</em>
    for (const link of linksMap) {
        // Regex bọc từ <em>- text</em> thành <em>- <Link>text</Link></em>
        const regex = new RegExp(`(<em>-\\s*)(${link.text})(\\s*<\\/em>)`, 'gi');
        if (content.match(regex)) {
            // Đảm bảo import Link từ next/link
            if (!content.includes("import Link from 'next/link';")) {
                content = "import Link from 'next/link';\n" + content;
            }
            content = content.replace(regex, `$1<Link href="${link.url}" className="text-blue-600 hover:underline">$2</Link>$3`);
        }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated service page: ${file}`);
}

// 2. TRANG TIN TỨC (News Pages)
const newsFiles = fs.readdirSync(newsDir).filter(f => f.endsWith('.js') && f !== 'index.js');
for (const file of newsFiles) {
    const filePath = path.join(newsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Đổi schema LocalBusiness thành Article
    if (content.includes('"@type": "LocalBusiness"')) {
        let titleMatch = content.match(/<title>(.*?)<\/title>/);
        let headline = titleMatch ? titleMatch[1].split('|')[0].trim() : "Tin Tức Việt Anh";
        let imageMatch = content.match(/"image":\s*"(.*?)"/);
        let image = imageMatch ? imageMatch[1] : "https://thanhlycuacutphcm.com/logo-viet-anh.png";
        let urlMatch = content.match(/"url":\s*"(.*?)"/);
        let url = urlMatch ? urlMatch[1] : "";

        let newSchema = `            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "${headline}",
              "image": "${image}",
              "url": "${url}",
              "author": {
                "@type": "Organization",
                "name": "Đồ Cũ Việt Anh"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Đồ Cũ Việt Anh",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://thanhlycuacutphcm.com/logo-viet-anh.png"
                }
              }
            }`;
        
        // Xoá cục LocalBusiness cũ và thay bằng Article
        content = content.replace(/\{[\s\S]*?"@type": "LocalBusiness"[\s\S]*?\}/, newSchema);
        
        // Thêm Canonical nếu chưa có (trong tin tức có vẻ đã có canonical rồi, ta sẽ skip nếu có)
        
        fs.writeFileSync(filePath, content);
        console.log(`Updated news article schema: ${file}`);
    }
}

// 3. TRANG CHỦ (Tối ưu Image)
// Để an toàn, trang chủ nên tập trung vào schema và meta tags chính. Do Next/Image có thể phá layout nếu bọc sai. User đã tự bọc Next/Image trong trang chủ chưa?
// Chúng ta sẽ bỏ qua chỉnh img -> Image trang chủ vì dễ dẫn đến vỡ CSS.

console.log('All SEO updates applied successfully!');
