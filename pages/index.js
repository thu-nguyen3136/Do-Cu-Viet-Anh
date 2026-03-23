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
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'CỬA CŨ', // Phần màu vàng #bc700a
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
      mainTitle: 'THU MUA', // Phần màu đen #111827
      highlightTitle: 'ĐỒ CŨ', // Phần màu vàng #bc700a
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
    "image": "https://thanhlycuacutphcm.com/logo-viet-anh.png",
    "@id": "https://thanhlycuacutphcm.com/",
    "url": "https://thanhlycuacutphcm.com/",
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

  const news = [
    {
      id: 1,
      title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
      desc: "Việt Anh chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng.",
      image: "/tin-tuc-1.jpg",
      slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
    },
    {
      id: 2,
      title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
      desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm giá cao, hỗ trợ tháo dỡ tận nơi.",
      image: "/tin-tuc-2.jpg",
      slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      <Head>
        <title>Thu Mua Đồ Cũ Giá Cao TPHCM | Thanh Lý Nhà Hàng, Khách Sạn - Việt Anh</title>
        <meta name="description" content="Chuyên Thu Mua Đồ Cũ Giá Cao Toàn Quốc⭐Thu Mua Thanh Lý Nhà Hàng Khách Sạn ⭐Thanh Lý Quán Ăn - Cafe⭐Báo Giá Tận Nơi 24/7. Hỗ trợ tháo dỡ vận chuyển miễn phí." />
        <meta name="keywords" content="thu mua đồ cũ, thu mua đồ gỗ, thanh lý nhà hàng, thanh lý khách sạn, mua cửa cũ, mua xác nhà xưởng, thu mua đồ cũ giá cao TPHCM" />
        <meta property="og:title" content="CÔNG TY THU MUA ĐỒ CŨ GIÁ CAO TPHCM☎️【VIỆT ANH】" />
        <meta property="og:description" content="Chuyên Thu Mua Đồ Cũ Giá Cao Toàn Quốc⭐Thu Mua Thanh Lý Nhà Hàng Khách Sạn ⭐Báo Giá Tận Nơi" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* PHẦN BANNER CHÍNH */}
      <section className="relative w-full overflow-hidden block">
        <h1 className="sr-only">Thu Mua Đồ Cũ Giá Cao, Thanh Lý Nhà Hàng, Khách Sạn TPHCM - Đồ Cũ Việt Anh</h1>
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

      <main className="flex-grow">

        {/* PHẦN GIỚI THIỆU */}
        <section
          id="gioi-thieu"
          className="pt-8 pb-8 md:pt-8 md:pb-8 bg-white"
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* HÌNH ẢNH GÓC TRÁI */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src="/anh-gioi-thieu-viet-anh.jpg"
                    alt="Thu mua đồ cũ Việt Anh - Thanh lý cửa cũ, nhà xưởng, đồ gỗ"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>

              {/* NỘI DUNG GIỚI THIỆU */}
              <div>
                <span className="block text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">
                  Giới thiệu Việt Anh
                </span>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] mb-6 leading-tight">
                  THU MUA ĐỒ CŨ GIÁ CAO <br />
                  <span className="text-[#bc700a]">XỬ LÝ NHANH – GỌN – CHUYÊN NGHIỆP</span>
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
                  Với hơn <strong>15 năm kinh nghiệm</strong>, Việt Anh chuyên
                  <strong> thu mua cửa cũ, đồ cũ, thanh lý nhà xưởng, nhà hàng, khách sạn </strong>
                  với giá cao, hỗ trợ xử lý nhanh gọn và tối ưu thu hồi vốn cho khách hàng.
                </p>

                {/* CÁC LỢI ÍCH */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e08a0d]/10 text-[#e08a0d] text-sm font-bold">
                      ✓
                    </div>
                    <span className="font-semibold">Giá thu mua cao</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e08a0d]/10 text-[#e08a0d] text-sm font-bold">
                      ✓
                    </div>
                    <span className="font-semibold">Thanh toan nhanh</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e08a0d]/10 text-[#e08a0d] text-sm font-bold">
                      ✓
                    </div>
                    <span className="font-semibold">Dọn dẹp trọn gói</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e08a0d]/10 text-[#e08a0d] text-sm font-bold">
                      ✓
                    </div>
                    <span className="font-semibold">Không ảnh hưởng hạ tầng</span>
                  </div>
                </div>

                {/* NÚT KÊU GỌI HÀNH ĐỘNG */}
                <a
                  href="/lien-he"
                  className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e08a0d] transition"
                >
                  NHẬN BÁO GIÁ NGAY →
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* PHẦN THỐNG KÊ CÔNG TY */}
        <section className="-mt-6 pt-6 pb-12 bg-white relative z-10 border-b border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
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
        <section className="-mt-0 pt-1 pb-2 md:pt-1 md:pb-0 bg-gray-50 relative z-10">
          <div className="max-w-[1400px] mx-auto px-4 md:px-4">
            <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#111827] uppercase mb-4 tracking-tight">
                Tại Sao Chọn <span className="text-[#bc700a]">Việt Anh?</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl font-medium mb-4">Những lý do khiến hàng ngàn khách hàng tin tưởng chúng tôi</p>
              <div className="w-16 h-1 bg-[#bc700a] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
              {/* Mục 1 */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 text-[#e08a0d] border-2 border-[#e08a0d] rounded-full flex items-center justify-center bg-white shadow-xl hover:bg-[#e08a0d] hover:text-white hover:-translate-y-2 transition-all duration-300">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h3 className="font-bold text-xl md:text-2xl text-[#111827] mb-3 md:mb-4">Tháo Dỡ Nhanh, Vận Chuyển Gọn Gàng</h3>
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

            <div className="text-center mt-10 md:mt-12">
              <p className="text-gray-800 text-lg font-medium mb-6">Bạn đang tìm đơn vị <strong className="text-[#111827]">tin cậy, chuyên nghiệp, giá cao?</strong></p>
              <a href="tel:0988257479" className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#e08a0d] text-white px-10 py-5 rounded-xl font-bold uppercase tracking-wider text-xl hover:bg-[#bc700a] shadow-[0_10px_30px_rgba(224,138,13,0.3)] transition-all duration-300 hover:-translate-y-1">
                <span className="animate-pulse">📞</span> LIÊN HỆ NGAY: 0988 257 479
              </a>
            </div>
          </div>
        </section>

        {/* TÁCH CÁC SECTION DỊCH VỤ DỰA TRÊN THIẾT KẾ MỚI */}
        {serviceCategories.map((category, idx) => (
          <section
            key={category.id}
            // border-gray-50/50 tạo đường kẻ cực mảnh, gần như hòa vào nền
            className={`mt-0 mb-0 py-2 md:py-4 border-t border-gray-50/50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-[1400px] mx-auto px-4 md:px-10">

              {/* TIÊU ĐỀ 2 MÀU IN HOA - ĐÃ ÉP SÁT KHOẢNG CÁCH */}
              <div className="text-center mb-2 md:mb-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#111827] uppercase tracking-tight mb-1 md:mb-2">
                  {category.mainTitle} <span className="text-[#bc700a]">{category.highlightTitle}</span>
                </h2>
                <p className="text-gray-500 text-[13px] md:text-base font-medium max-w-2xl mx-auto px-2 leading-tight italic">
                  {category.description}
                </p>
                <div className="w-10 md:w-16 h-1 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-2 md:mt-3 rounded-full"></div>
              </div>

              {/* GRID DỊCH VỤ - HIỂN THỊ 1 CỘT TRÊN MOBILE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {category.services.map((srv) => (
                  <Link
                    key={srv.id}
                    href={srv.link}
                    // border-gray-50 giúp viền thẻ dịch vụ rất nhẹ nhàng, không bị thô
                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-50 hover:-translate-y-1"
                  >

                    {/* PHẦN ẢNH */}
                    <div className="relative h-48 md:h-60 lg:h-64 overflow-hidden">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }}
                      />
                    </div>

                    {/* NỘI DUNG THẺ DỊCH VỤ */}
                    <div className="py-2 px-3 flex flex-col flex-grow text-center items-center">

                      {/* Tiêu đề: Xám đen, in đậm, tăng padding để thoáng chữ */}
                      <h3 className="font-black text-[#111827] group-hover:text-[#e08a0d] text-[15px] md:text-[18px] py-1 md:py-2 mb-1 transition-colors line-clamp-2 leading-tight min-h-[40px] md:min-h-[50px] flex items-center">
                        {srv.title}
                      </h3>

                      {/* Nút bấm: Vàng cam chủ đạo, Hover xám đen */}
                      <div className="inline-block w-full bg-[#e08a0d] group-hover:bg-[#111827] text-white font-black py-2 px-6 rounded-xl text-[11px] md:text-[13px] uppercase tracking-widest transition-all shadow-md group-hover:shadow-lg">
                        XEM CHI TIẾT
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </section>
        ))}

        {/* KHU VỰC NÚT BÁO GIÁ - Đã giảm tối đa khoảng đệm */}
        <section className="py-0 md:py-1 bg-white flex justify-center w-full relative z-[6]">
          <Link
            href="/lien-he"
            className="inline-flex items-center justify-center gap-3 bg-[#111827] text-white px-8 py-3 md:px-10 md:py-4 text-xs md:text-lg font-bold uppercase rounded-xl hover:bg-[#e08a0d] transition-all shadow-lg hover:-translate-y-1"
          >
            TÔI CẦN BÁO GIÁ CHO SẢN PHẨM KHÁC
          </Link>
        </section>

        {/* PHẦN QUY TRÌNH BAO TRỌN - ĐÃ GIẢM KHOẢNG CÁCH TỐI ĐA */}
        <section className="py-2 md:py-2 bg-white relative overflow-hidden" id="quy-trinh">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">

            {/* Tiêu đề: Giảm mb-10 xuống mb-6 */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#111827] uppercase tracking-tight">
                Quy Trình <span className="text-[#bc700a]">Thu Mua</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="relative">
              {/* Lưới hiển thị: Giảm khoảng cách trên mobile để các bước sát nhau hơn */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-0 relative z-10">
                {[
                  { step: "1", title: "Nhận yêu cầu", desc: "Tiếp nhận thông tin qua hotline: 0988.257.479" },
                  { step: "2", title: "Khảo sát", desc: "Khảo sát tận nơi hoặc báo giá nhanh qua hình ảnh Zalo." },
                  { step: "3", title: "Báo giá", desc: "Thỏa thuận giá cả minh bạch, không ép giá khách hàng." },
                  { step: "4", title: "Thu mua", desc: "Tháo dỡ nhanh gọn, thanh toán tiền mặt ngay tại chỗ." }
                ].map((process, i) => (
                  <div key={i} className="group flex flex-col items-center text-center px-4 relative cursor-default">

                    {/* Đường kẻ nối SVG - Giữ nguyên nhưng thêm transition màu */}
                    {i < 3 && (
                      <svg className="hidden lg:block absolute top-[10px] left-[50%] w-full h-[50px] z-0 text-[#bc700a]/20 group-hover:text-[#bc700a]/40 transition-colors duration-500" preserveAspectRatio="none" viewBox="0 0 100 40">
                        <path
                          d={i % 2 === 0 ? "M20,30 Q50,0 80,30" : "M20,10 Q50,40 80,10"}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    )}

                    {/* Vòng tròn số: Hiệu ứng Hover biến đổi màu và phóng lớn */}
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#e08a0d]/10 text-[#e08a0d] rounded-full flex items-center justify-center text-2xl md:text-3xl font-black mb-4 mx-auto shadow-sm ring-4 ring-white z-10 relative 
                            transition-all duration-500 transform group-hover:scale-110 group-hover:bg-[#111827] group-hover:text-[#e08a0d] group-hover:shadow-lg">
                      {process.step}
                    </div>

                    {/* Tiêu đề Bước Hoạt Động: Chuyển màu khi rê chuột  */}
                    <h3 className="text-lg md:text-xl font-black mb-2 text-[#111827] transition-colors duration-300 group-hover:text-[#bc700a] uppercase tracking-wide">
                      {process.title}
                    </h3>

                    {/* Mô tả Từng Bước: Canh chỉnh thu nhỏ gọn gàng */}
                    <p className="text-gray-500 font-medium text-[13px] md:text-[14px] leading-snug max-w-[240px] mx-auto transition-colors duration-300 group-hover:text-gray-800">
                      {process.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHẦN ĐÁNH GIÁ CỦA KHÁCH HÀNG */}
        <section className="py-4 md:py-6 bg-white overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-4 md:px-10">

            <div className="text-center mb-4">
              <h2 className="text-2xl md:text-4xl font-black text-[#111827] uppercase leading-tight">
                Đánh Giá<span className="text-[#bc700a]"> Khách Hàng</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500">
                {getVisibleReviews().map((review) => (
                  /* TĂNG CHIỀU CAO: Thay p-5 thành py-10 px-6 để block cao hơn */
                  <div key={review.id} className="bg-gray-50 rounded-2xl py-10 px-6 border border-gray-100 hover:border-[#e08a0d]/30 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between h-full">
                    <div className="text-6xl font-serif text-[#bc700a]/10 absolute top-4 right-8">"</div>

                    <div>
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-[#e08a0d] text-lg">★</span>
                        ))}
                      </div>

                      {/* TĂNG CHIỀU CAO NỘI DUNG: Tăng min-h lên 140px hoặc cao hơn tùy ý */}
                      <p className="text-gray-700 italic font-medium leading-relaxed mb-10 relative z-10 text-sm md:text-base min-h-[140px]">
                        {review.comment}
                      </p>
                    </div>

                    <div className="border-t border-gray-200 pt-6 flex items-center gap-4">
                      {review.avatar ? (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-[#e08a0d]/30 shadow-sm"
                          onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div className="w-12 h-12 bg-[#111827] rounded-full justify-center items-center text-white font-bold text-xl uppercase" style={{ display: review.avatar ? 'none' : 'flex' }}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-black text-[#111827] text-lg leading-tight mb-1">{review.name}</h3>
                        <span className="text-[#bc700a] font-bold tracking-wider text-xs uppercase">{review.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center gap-2 mt-10">
                {[...Array(totalReviewSlides)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${idx === currentReviewSlide ? 'w-8 bg-[#e08a0d]' : 'w-2 bg-gray-300'}`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KÊU GỌI HÀNH ĐỘNG DƯỚI CÙNG */}
        <section className="py-16 md:py-16 bg-[url('https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center relative">
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

        {/* NEWS SECTION */}
        <section className="pt-4 pb-4 md:pt-4 md:pb-4 bg-gray-50" id="tin-tuc">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">

            {/* HEADER */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-[#111827] uppercase">
                Cập Nhật Tin Tức <span className="text-[#bc700a]">Mới Nhất</span>
              </h2>

              <div className="w-20 h-1 bg-[#bc700a] mx-auto mt-4 rounded-full"></div>
            </div>

            {/* DATA */}
            {(() => {
              const news = [
                {
                  id: 1,
                  title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
                  desc: "Việt Anh chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng, không ép giá.",
                  image: "/thu-mua-do-cu-uy-tin-hcm.jpeg",
                  slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
                },
                {
                  id: 2,
                  title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
                  desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm với giá cao, tháo dỡ và vận chuyển tận nơi.",
                  image: "/thu-mua-thiet-bi-ve-sinh-phe-lieu-gia-cao-tai-tp-hcm.png",
                  slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
                }
              ];

              return (
                <>
                  {/* GRID */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {news.map((item) => (
                      <Link
                        key={item.id}
                        href={item.slug}
                        className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(224,138,13,0.15)] transition-all duration-300"
                      >

                        {/* IMAGE */}
                        <div className="relative h-52 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* CONTENT */}
                        <div className="p-5">
                          <span className="text-xs text-[#e08a0d] font-bold uppercase tracking-wider">
                            Tin tức
                          </span>

                          <h3 className="font-black text-lg text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#e08a0d] transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                            {item.desc}
                          </p>

                          <div className="text-[#e08a0d] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#bc700a]">
                            Xem chi tiết
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center mt-10 md:mt-12">
                    <Link
                      href="/tin-tuc"
                      className="inline-flex items-center justify-center bg-[#111827] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e08a0d] transition"
                    >
                      XEM TẤT CẢ TIN TỨC →
                    </Link>
                  </div>
                </>
              );
            })()}

          </div>
        </section>

      </main>
    </div>
  );
}