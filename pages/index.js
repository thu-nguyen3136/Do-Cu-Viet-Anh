import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [currentReviewSlide, setCurrentReviewSlide] = useState(0);
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3);
  const [mounted, setMounted] = useState(false);

  const serviceCategories = [
    {
      id: 'cua-cu',
      title: 'Thu Mua Cửa Cũ',
      description: 'Chuyên thu mua các loại cửa cũ với giá cao, tháo dỡ tận nơi chuyên nghiệp.',
      services: [
        { id: 1, title: 'Thu Mua Cửa Cũ Giá Cao', image: '/thu-mua-cua-cu-gia-cao.jpg', link: '/thu-mua-cua-cu-gia-cao' },
        { id: 2, title: 'Thu Mua Cửa Nhôm Xingfa', image: '/thu-mua-cua-nhom-xingfa.jpg', link: '/thu-mua-cua-nhom-xingfa' },
        { id: 3, title: 'Thu Mua Cửa Gỗ Cũ', image: '/thu-mua-cua-go.jpg', link: '/thu-mua-cua-go' },
        { id: 4, title: 'Thu Mua Cổng Nhôm Đúc', image: '/thu-mua-cong-nhom-duc.jpg', link: '/thu-mua-cong-nhom-duc' },
        { id: 5, title: 'Thu Mua Cửa Cuốn Cũ', image: '/thu-mua-cua-cuon-cu.jpg', link: '/thu-mua-cua-cuon' },
        { id: 6, title: 'Thu Mua Cửa Sắt Cũ', image: '/thu-mua-cua-sat-cu.jpg', link: '/thu-mua-cua-sat' }
      ]
    },
    {
      id: 'do-cu',
      title: 'Thu Mua Đồ Cũ',
      description: 'Nhận thanh lý trọn gói nhà xưởng, thu mua thiết bị vệ sinh, đồ gỗ với giá cao.',
      services: [
        { id: 1, title: 'Thu Mua Thiết Bị Vệ Sinh Cũ', image: '/thu-mua-thiet-bị-ve-sinh-cu.jpg', link: '/thu-mua-thiet-bi-ve-sinh' },
        { id: 2, title: 'Thu Mua Tôn Cũ', image: '/thu-mua-ton-cu.jpg', link: '/thu-mua-ton-cu' },
        { id: 3, title: 'Thu Mua Xác Nhà Kho Xưởng', image: '/thu-mua-xac-nha-kho-xuong.jpg', link: '/thu-mua-xac-nha-xuong' },
        { id: 4, title: 'Thu Mua Đồ Gỗ Cũ', image: '/thu-mua-do-go-cu.jpg', link: '/thu-mua-do-go' },
        { id: 5, title: 'Thu Mua Tủ Bếp Cũ', image: '/thu-mua-tu-bep-cu.jpg', link: '/thu-mua-tu-bep' },
        { id: 6, title: 'Thu Mua Bàn Ghế Gỗ Cũ', image: '/thu-mua-ban-ghe-go-cu.jpg', link: '/thu-mua-ban-ghe-go' }
      ]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Anh Toàn (Quận 1)',
      role: 'Chủ chuỗi nhà hàng',
      rating: 5,
      avatar: '/nguyen-van-toan.jpg',
      comment: 'Việt Anh thu mua cực kỳ nhanh gọn. Gọi 30 phút sau có mặt khảo sát, chốt giá và dọn dẹp mặt bằng sạch sẽ ngay trong đêm. Rất chuyên nghiệp!'
    },
    {
      id: 2,
      name: 'Chị Oanh (Gò Vấp)',
      role: 'Kinh doanh Khách Sạn',
      rating: 5,
      avatar: '/tran-thi-hoang-oanh.jpg',
      comment: 'Tôi đã thanh lý hệ thống phòng khách sạn cũ, giá Việt Anh đưa ra kịch kim, cao hơn các bên khác báo giá đến 20-30%. Thanh toán tiền mặt tại chỗ.'
    },
    {
      id: 3,
      name: 'Anh Việt (Hóc Môn)',
      role: 'Chủ xưởng gỗ',
      rating: 5,
      avatar: '/le-hoang-viet.jpg',
      comment: 'Bán hết mớ cửa gỗ ngỡ bỏ đi mà thu được số tiền lớn. Đội thợ tháo dỡ lễ phép, không làm ồn hay ảnh hưởng hàng xóm. Chấm 10 điểm!'
    },
    {
      id: 4,
      name: 'Anh Bảo (Thủ Đức)',
      role: 'Nhà Thầu',
      rating: 5,
      avatar: '/vo-thanh-bao.jpg',
      comment: 'Làm việc uy tín, cần thanh lý xác nhà cấp 4 cũ, gọi Việt Anh hỗ trợ từ A-Z. Rất khỏe, không phải động tay vào việc gì.'
    },
    {
      id: 5,
      name: 'Chị Nhi (Quận 7)',
      role: 'Chủ Quán Ăn Gia Đình',
      rating: 5,
      avatar: '/luu-ngoc-nhi.jpg',
      comment: 'Thanh lý hệ thống bàn ghế inox, bếp nướng nhanh gọn lẹ. Giá Việt Anh mua lại làm tôi rất bất ngờ vì cao hơn kỳ vọng. Rất ưng ý!'
    },
    {
      id: 6,
      name: 'Chị Nguyệt (Bình Thạnh)',
      role: 'Quản Lý Thu Mua',
      rating: 5,
      avatar: '/pham-thu-nguyet.jpg',
      comment: 'Hợp tác với Đồ Cũ Việt Anh nhiều năm nay. Đội bốc xếp khỏe, có xe tải riêng nên việc chở hàng cồng kềnh như cửa sắt, tủ gỗ cực kỳ suôn sẻ.'
    }
  ];

  const totalReviewSlides = Math.max(1, Math.ceil(reviews.length / reviewsPerSlide));

  useEffect(() => {
    setMounted(true);
    const updateReviews = () => {
      if (window.innerWidth < 768) setReviewsPerSlide(1);
      else if (window.innerWidth < 1024) setReviewsPerSlide(2);
      else setReviewsPerSlide(3);
    };
    updateReviews();
    window.addEventListener("resize", updateReviews);
    return () => window.removeEventListener("resize", updateReviews);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setCurrentReviewSlide((prev) => (prev + 1) % totalReviewSlides);
    }, 4000);
    return () => clearInterval(timer);
  }, [mounted, totalReviewSlides]);

  const getVisibleReviews = () => {
    if (!mounted) return reviews.slice(0, 3);
    const start = currentReviewSlide * reviewsPerSlide;
    return reviews.slice(start, start + reviewsPerSlide);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Đồ Cũ Việt Anh",
    "image": "https://thumuadocuvietanh.com/logo-viet-anh.png",
    "@id": "https://thumuadocuvietanh.com/",
    "url": "https://thumuadocuvietanh.com/",
    "telephone": "0988257479",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Lê Văn Khương",
      "addressLocality": "Đông Thạnh, Hóc Môn",
      "addressRegion": "Hồ Chí Minh",
      "postalCode": "700000",
      "addressCountry": "VN"
    },
    "description": "Chuyên thu mua đồ cũ, thu mua đồ gỗ, cửa cũ, thanh lý nhà hàng khách sạn giá cao tận nơi tại TP.HCM và các tỉnh lân cận.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Head>
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Việt Anh</title>
        <meta name="description" content="Chuyên Thu Mua Đồ Cũ Giá Cao Toàn Quốc⭐Thu Mua Thanh Lý Nhà Hàng Khách Sạn ⭐Thanh Lý Quán Ăn - Cafe⭐Báo Giá Tận Nơi 24/7. Hỗ trợ tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua đồ cũ, thu mua đồ gỗ, thanh lý nhà hàng, thanh lý khách sạn, mua cửa cũ, mua xác nhà xưởng, thu mua đồ cũ giá cao TPHCM" />
        <meta property="og:title" content="CÔNG TY THU MUA ĐỒ CŨ GIÁ CAO TPHCM☎️【VIỆT ANH】" />
        <meta property="og:description" content="Chuyên Thu Mua Đồ Cũ Giá Cao Toàn Quốc⭐Thu Mua Thanh Lý Nhà Hàng Khách Sạn ⭐Báo Giá Tận Nơi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thumuadocuvietanh.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <main className="flex-grow">

        {/* HERO SECTION */}
        <section className="relative w-full overflow-hidden">
          <div className="w-full">
            <img
              src="/banner-viet-anh.png"
              alt="Thu Mua Đồ Cũ Giá Cao Việt Anh"
              // Sử dụng h-auto để ảnh không bị méo hoặc cắt
              className="w-full h-auto block"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?q=80&w=2000&auto=format&fit=crop';
              }}
            />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="gioi-thieu">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative z-10 aspect-[4/3] rounded-3xl overflow-hidden bg-transparent">
                  <img src="/anh-gioi-thieu-viet-anh.jpg" alt="Về Chúng Tôi Đồ Cũ Việt Anh" className="w-full h-full object-contain"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop'; }}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">Về Việt Anh</h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-8 leading-tight">
                  ĐỖ CŨ KHÔNG ĐÚNG MỤC ĐÍCH <br /> <span className="text-[#bc700a]">HÃY ĐỂ CHÚNG TÔI LO</span>
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                  Với hơn 15 năm hoạt động chuyên sâu trong lĩnh vực <strong>thu mua đồ cũ, thanh lý nhà hàng, khách sạn, cửa cũ, đồ xăm xưa</strong>, Việt Anh tự hào là tổng kho thu mua lớn nhất tại khu vực Miền Nam.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 text-justify">
                  Chúng tôi xử lý triệt để bài toán hạch toán tài sản thừa cho doanh nghiệp, đảm bảo mang lại nguồn thu hồi vốn cao nhất, quy trình dọn dẹp sạch sẽ, không ảnh hưởng kết cấu hạ tầng hiện hữu.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="text-[#e08a0d] bg-[#bc700a]/10 w-12 h-12 flex items-center justify-center rounded-full text-xl flex-shrink-0">✓</div>
                    <span className="font-black text-[#111827]">Thẩm định giá chuẩn xác</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-[#e08a0d] bg-[#bc700a]/10 w-12 h-12 flex items-center justify-center rounded-full text-xl flex-shrink-0">✓</div>
                    <span className="font-black text-[#111827]">Giá thu mua cam kết cao nhất</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-[#e08a0d] bg-[#bc700a]/10 w-12 h-12 flex items-center justify-center rounded-full text-xl flex-shrink-0">✓</div>
                    <span className="font-black text-[#111827]">Thanh toán nhanh 1 lần</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-[#e08a0d] bg-[#bc700a]/10 w-12 h-12 flex items-center justify-center rounded-full text-xl flex-shrink-0">✓</div>
                    <span className="font-black text-[#111827]">Bốc dỡ tự động 100%</span>
                  </div>
                </div>

                <a href="/lien-he" className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e08a0d] transition-colors duration-300">
                  TÌM HIỂU THÊM VỀ CHÚNG TÔI →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* THỐNG KÊ (STATS) */}
        <section className="py-12 bg-white relative z-10 border-b border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#e08a0d] mb-2">15<span className="text-[#bc700a]">+</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Năm Kinh Nghiệm</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#e08a0d] mb-2">5000<span className="text-[#bc700a]">+</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Khách Hàng Hài Lòng</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#e08a0d] mb-2">5</div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Chi Nhánh Tại HCM</div>
              </div>
              <div className="text-center py-4 md:py-0">
                <div className="text-4xl md:text-5xl font-black text-[#e08a0d] mb-2">24<span className="text-[#bc700a]">/7</span></div>
                <div className="text-gray-600 font-bold text-[14px] md:text-[15px] uppercase tracking-wider">Hỗ Trợ Tận Nơi</div>
              </div>
            </div>
          </div>
        </section>

        {/* TẠI SAO CHỌN CHÚNG TÔI */}
        <section className="py-20 md:py-24 bg-gray-50 relative z-10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-[#e08a0d] mb-4">Tại Sao Chọn Việt Anh?</h2>
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-6">Những lý do khiến hàng ngàn khách hàng tin tưởng chúng tôi</p>
              <div className="w-16 h-1 bg-[#bc700a] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 text-center">
              {/* Item 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 text-[#e08a0d] border-2 border-[#e08a0d] rounded-full flex items-center justify-center bg-white shadow-xl hover:bg-[#e08a0d] hover:text-white hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#111827] mb-3 md:mb-4">Tháo Dỡ Nhanh Sạch, Vận Chuyển Gọn Gàng</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">Trang bị đầy đủ thiết bị, Việt Anh hỗ trợ tháo dỡ - bốc xếp - vận chuyển nhanh, sạch, không để lại phiền toái.</p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 text-[#e08a0d] border-2 border-[#e08a0d] rounded-full flex items-center justify-center bg-white shadow-xl hover:bg-[#e08a0d] hover:text-white hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#111827] mb-3 md:mb-4">Khảo Sát Tận Nơi – Có Mặt Sau 30 Phút</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">Chỉ cần gọi, đội ngũ chúng tôi sẽ đến tận nơi khảo sát - báo giá nhanh chóng, không mất phí, không chờ đợi.</p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 text-[#e08a0d] border-2 border-[#e08a0d] rounded-full flex items-center justify-center bg-white shadow-xl hover:bg-[#e08a0d] hover:text-white hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#111827] mb-3 md:mb-4">Thu Mua Uy Tín – Làm Việc Chuyên Nghiệp</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">Với bề dày kinh nghiệm, chúng tôi mang đến dịch vụ chuyên nghiệp - trung thực - tận tâm, làm hài lòng mọi khách hàng.</p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 text-[#e08a0d] border-2 border-[#e08a0d] rounded-full flex items-center justify-center bg-white shadow-xl hover:bg-[#e08a0d] hover:text-white hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#111827] mb-3 md:mb-4">Giá Thu Mua Cao – Ưu Đãi Hơn Thị Trường</h3>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">Cam kết thu mua giá tốt hơn thị trường đến 30%, định giá đúng thực tế, thanh toán ngay - không mặc cả.</p>
              </div>
            </div>

            <div className="text-center mt-16 md:mt-20">
              <p className="text-gray-800 text-lg font-medium mb-6">Bạn đang tìm đơn vị <strong className="text-[#111827]">tin cậy, chuyên nghiệp, giá cao?</strong></p>
              <a href="tel:0988257479" className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#e08a0d] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wider text-xl hover:bg-[#bc700a] shadow-[0_10px_30px_rgba(224,138,13,0.3)] transition-all duration-300 hover:-translate-y-1">
                <span className="animate-pulse">📞</span> LIÊN HỆ NGAY: 0988 257 479
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES - 3 Khối Dịch Vụ Chủ Đạo */}
        <section className="py-20 md:py-28 bg-white" id="dich-vu">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">LĨNH VỰC HOẠT ĐỘNG</h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">Chuyên Môn<span className="text-[#bc700a]"> Thu Mua</span></h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-6 rounded-full"></div>
            </div>

            {serviceCategories.map((category, idx) => (
              <div key={category.id} className={idx > 0 ? "mt-20 md:mt-24" : ""}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-black text-[#111827] mt-3 mb-3 flex items-center gap-3 uppercase tracking-tight">
                      <span className="w-2 h-8 bg-[#bc700a] inline-block rounded-full"></span>
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-[16px] md:text-lg font-medium">{category.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                  {category.services.map((srv) => (
                    <Link key={srv.id} href={srv.link} className="w-full shrink-0 sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-24px)] group relative bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(224,138,13,0.15)] transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
                      <div className="relative h-56 overflow-hidden">
                        <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-3 border border-white/30 shadow-lg text-white">
                            {srv.icon}
                          </div>
                          <h4 className="text-[17px] font-black text-white leading-snug">{srv.title}</h4>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col justify-between bg-white z-10 relative">
                        <div className="flex items-center text-[#e08a0d] font-bold uppercase text-[12px] tracking-widest group-hover:text-[#bc700a] transition-colors">
                          Xem Chi Tiết <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-20 text-center">
              <Link href="/lien-he" className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-10 py-4 text-lg font-bold uppercase rounded-xl hover:bg-[#e08a0d] transition-colors shadow-xl">
                TÔI CẦN BÁO GIÁ CHO SẢN PHẨM KHÁC
              </Link>
            </div>

          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-20 bg-white relative overflow-hidden" id="quy-trinh">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">Quy Trình <span className="text-[#bc700a]">Thu Mua</span></h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative z-10">
                {[
                  { step: "1", title: "Nhận yêu cầu", desc: "Tiếp nhận thông tin yêu cầu từ khách hàng qua số điện thoại: 0966.350.979" },
                  { step: "2", title: "Khảo sát", desc: "Nhân viên tới tận nơi khảo sát hoặc xin thêm hình và thông tin qua công cụ chat." },
                  { step: "3", title: "Báo giá", desc: "Thực hiện trao đổi và báo giá thu mua tới khách hàng." },
                  { step: "4", title: "Thu mua", desc: "Thực hiện quá trình thu mua khi khách hàng đồng ý thanh lý sản phẩm." }
                ].map((process, i) => (
                  <div key={i} className="flex flex-col items-center text-center px-4 relative">

                    {/* Curved dashed connecting lines for desktop */}
                    {i < 3 && (
                      <svg className="hidden lg:block absolute top-[15px] left-[50%] w-full h-[66px] z-0 text-[#bc700a]/40" preserveAspectRatio="none" viewBox="0 0 100 40">
                        <path
                          d={i % 2 === 0 ? "M23,30 Q50,0 77,30" : "M23,10 Q50,40 77,10"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}

                    <div className="w-24 h-24 bg-[#e08a0d]/10 text-[#e08a0d] rounded-full flex items-center justify-center text-[40px] font-black mb-6 mx-auto shadow-[0_5px_20px_rgba(224,138,13,0.15)] ring-8 ring-white z-10 relative">
                      {process.step}
                    </div>
                    <h4 className="text-[20px] font-black mb-3 text-[#111827]">{process.title}</h4>
                    <p className="text-gray-600 font-medium text-[15px] leading-relaxed max-w-[260px] mx-auto">{process.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEEDBACK SECTION */}
        <section className="py-20 md:py-28 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">ĐÁNH GIÁ KHÁCH HÀNG</h2>
              <h3 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">Sự Hài Lòng<span className="text-[#bc700a]"> Là Thước Đo</span></h3>
              <div className="w-24 h-1.5 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500">
                {getVisibleReviews().map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-[#e08a0d]/30 hover:shadow-2xl transition-all duration-300 relative">
                    <div className="text-6xl font-serif text-[#bc700a]/10 absolute top-4 right-8">"</div>
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-[#e08a0d] text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic font-medium leading-relaxed mb-8 relative z-10 min-h-[100px]">
                      {review.comment}
                    </p>
                    <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                      {review.avatar ? (
                        <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-[#e08a0d]/50 shadow-md" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
                      ) : null}
                      <div className="w-14 h-14 bg-[#111827] rounded-full justify-center items-center text-white font-bold text-xl uppercase shadow-md" style={{ display: review.avatar ? 'none' : 'flex' }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-black text-[#111827] text-lg">{review.name}</h4>
                        <span className="text-[#bc700a] font-bold tracking-wider text-xs uppercase">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-center gap-2 mt-10">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewSlide(idx)}
                    className={`h-2 rounded-full transition-all ${idx === currentReviewSlide ? 'w-8 bg-[#e08a0d]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="py-20 bg-[url('https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/90 to-[#111827]/70 backdrop-blur-sm"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Bạn Đang Có Sản Phẩm Cần Thanh Lý?</h2>
            <p className="text-xl font-medium text-gray-300 mb-10 leading-relaxed">
              Gửi hình ảnh qua Zalo, Nhận báo giá trong <span className="font-black text-[#e08a0d]">5 Phút</span>. <br className="hidden md:block" />
              Thu mua không ép giá - Dọn dẹp sạch sẽ - Tiền trao cháo múc ngay lập tức.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:0988257479" className="bg-[#e08a0d] text-white hover:bg-[#bc700a] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl">📞</span> Gọi Hotine
              </a>
              <a href="https://zalo.me/0988257479" target="_blank" rel="noopener noreferrer" className="bg-[#0068ff] text-white hover:bg-[#0052cc] font-black uppercase px-8 py-5 rounded-xl shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
                <span className="text-2xl font-sans">Zalo</span> Gửi Hình Zalo
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}