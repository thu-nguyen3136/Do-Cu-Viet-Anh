import Head from 'next/head';
import Link from 'next/link';

export default function ThuMuaCuaCu() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Thu Mua Cửa Cũ, Thanh Lý Cửa Gỗ, Cửa Sắt, Cửa Nhôm",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Đồ Cũ Việt Anh",
      "image": "https://thanhlycuacutphcm.com/logo-viet-anh.png",
      "telephone": "0988257479",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14 Lê Văn Khương",
        "addressLocality": "Đông Thạnh, Hóc Môn",
        "addressRegion": "Hồ Chí Minh",
        "postalCode": "700000",
        "addressCountry": "VN"
      }
    },
    "areaServed": "Hồ Chí Minh",
    "description": "Dịch vụ thu mua cửa cũ giá cao tại TPHCM. Thu mua cửa gỗ cũ, cửa sắt, cửa nhôm kính, tháo dỡ trọn gói, thanh toán ngay 1 lần duy nhất."
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Thu Mua Cửa Cũ Giá Cao Tận Nơi Tại TPHCM | Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh chuyên thu mua cửa cũ giá cao. Nhận thanh lý cửa gỗ cũ, cửa sắt, cửa nhôm kính, định giá chính xác, hỗ trợ tháo dỡ không làm hỏng tường nhà." />
        <meta name="keywords" content="thu mua cửa cũ, thu mua cửa gỗ cũ, thu mua cửa sắt cũ, thu mua cửa nhôm Xingfa, thanh lý cửa cũ TPHCM" />
        <meta property="og:title" content="Thu Mua Cửa Cũ Giá Cao Tại TPHCM | Uy Tín, Tháo Dỡ Trọn Gói" />
        <meta property="og:description" content="Chuyên Thu Mua Cửa Gỗ, Cửa Nhôm, Cửa Sắt Cũ Giá Cao Toàn Quốc⭐Báo Giá Tận Nơi 24/7. Hỗ trợ tháo dỡ vận chuyển miễn phí." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-cua-cu" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-cua-cu" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      {/* PAGE BANNER */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-[#111827]">
        <div className="absolute inset-0 z-0">
          <img
            src="/banner-viet-anh.png"
            alt="Thu Mua Cửa Cũ Giá Cao Đồ Cũ Việt Anh"
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=2000&auto=format&fit=crop'; }}
          />
        </div>
        <div className="relative z-10 text-center px-6 mt-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase drop-shadow-lg tracking-tight">Dịch Vụ Thu Mua Cửa Cũ <span className="text-[#e08a0d]">Giá Cao</span></h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-300 font-medium">
            <Link href="/" className="hover:text-[#e08a0d] transition-colors">Trang Chủ</Link>
            <span>/</span>
            <span>Thu Mua Đồ Cũ</span>
            <span>/</span>
            <span className="text-white">Thu Mua Cửa Cũ</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="block text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">TỔNG KHO VIỆT ANH</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] mb-6 leading-tight">CHUYÊN NHẬN THU MUA <span className="text-[#bc700a]">CÁC LOẠI CỬA ĐÃ QUA SỬ DỤNG</span></h2>
              <div className="w-16 h-1 bg-[#bc700a] mb-8 rounded-full"></div>

              <div className="text-gray-600 text-lg leading-relaxed space-y-5 text-justify">
                <p><strong>Đồ Cũ Việt Anh</strong> nhận thu mua toàn bộ các dòng cửa cũ, phế liệu từ cửa công trình dự án thanh lý trên địa bàn <strong>TP.HCM</strong> và các tỉnh lân cận. Nếu nhà bạn đang sửa chữa, hoặc doanh nghiệp muốn thay thế cửa hàng loạt, hãy liên hệ với chúng tôi để lấy ngay cơ hội thu hồi vốn tốt nhất!</p>
                <p>Khắc phục hoàn toàn nỗi lo: tháo dỡ không đúng kỹ thuật làm hư hại tường, không biết cách vận chuyển những cánh cửa gỗ dài và nặng, hoặc bị ép giá không thương tiếc. Quy trình của chúng tôi là: <strong>Khảo sát nhanh - Chốt giá ngay - Tháo dỡ an toàn - Dọn dẹp sạch sẽ mặt bằng.</strong></p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a href="tel:0988257479" className="inline-flex items-center gap-3 bg-[#e08a0d] text-white px-8 py-3 rounded-xl font-bold uppercase tracking-wider hover:bg-[#bc700a] transition-all shadow-[0_5px_15px_rgba(224,138,13,0.3)] hover:-translate-y-1">
                  <span>📞 GỌI KHẢO SÁT MIỄN PHÍ</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
                <img src="/thu-mua-cua-cu-gia-cao.jpg" alt="Thu Mua Cửa Cu" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }} />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-square mt-8">
                <img src="/thu-mua-cua-go.jpg" alt="Thu Mua Cửa Gỗ" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }} />
              </div>
            </div>
          </div>

          {/* CÁC LOẠI CỬA NHẬN THU MUA */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="block text-sm font-bold tracking-widest text-[#e08a0d] uppercase mb-3">DANH MỤC THU MUA TẬN NƠI</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#111827] uppercase">CÁC LOẠI CỬA CŨ <span className="text-[#bc700a]">GIÁ CAO</span></h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Thu Mua Cửa Gỗ Cũ', desc: 'Nhận các loại cửa bằng gỗ tự nhiên (Lim, Xoan Đào, Hương...), không ngại quy mô lớn nhỏ.', img: '/thu-mua-cua-go.jpg', link: '/thu-mua-cua-go' },
                { title: 'Thu Mua Cửa Sắt Cũ', desc: 'Thanh lý cổng sắt, rào bảo vệ, cửa kéo sắt phế liệu trọn gói với giá tái chế tối đa.', img: '/thu-mua-cua-sat-cu.jpg', link: '/thu-mua-cua-sat' },
                { title: 'Thu Mua Cửa Cuốn', desc: 'Cửa cuốn nhôm, cửa kéo vân sóng, thu lại kèm motor đi lốc từ các nhà xưởng, kho bãi.', img: '/thu-mua-cua-cuon-cu.jpg', link: '/thu-mua-cua-cuon' },
                { title: 'Thu Mua Cửa Nhôm Xingfa', desc: 'Kính cường lực, vách kính văn phòng, khung nhôm phế liệu tháo dỡ không bể vỡ.', img: '/thu-mua-cua-nhom-xingfa.jpg', link: '/thu-mua-cua-nhom-xingfa' },
                { title: 'Thu Mua Cổng Nhôm Đúc', desc: 'Cổng khu trang trại biệt thự, nhà phố, đúc khối kim loại đồng nguyên chất nguyên tấm.', img: '/thu-mua-cong-nhom-duc.jpg', link: '/thu-mua-cong-nhom-duc' },
                { title: 'Thu Mua Khung Tôn Cũ', desc: 'Xà gồ chịu lực mái che, lợp sóng phế liệu kèm cửa công trình định giá thu mua toàn diện.', img: '/thu-mua-ton-cu.jpg', link: '/thu-mua-ton-cu' },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-[#e08a0d]/30 transition-all duration-300 flex flex-col hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop'; }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-xl text-[#111827] mb-2 group-hover:text-[#e08a0d] transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-[15px]">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* QUY TRÌNH & CAM KẾT (SEO TEXT) */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-black text-[#111827] mb-6">Tại Sao Chọn Dịch Vụ Thanh Lý Cửa Cũ Của Chúng Tôi?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 text-justify">
              <p>Hiện nay trên thị trường có không ít đơn vị cá nhân lẻ tẻ thu mua tháo dỡ nội thất, tuy nhiên đa phần hay gặp <strong>tình huống rủi ro trong quá trình gỡ khung bao cửa vì không có đủ trình độ chuyên môn neo đỡ tường</strong>. Đồng thời thường ép giá sau khi cạy cửa xong.</p>
              <p>Sở hữu đội bốc xếp nội bộ hùng hậu, trang bị đủ xe cẩu chở kho riêng biệt, Việt Anh cam kết vững chắc:</p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Khảo sát chuẩn xác giá trị thực của dòng gỗ / nhôm sắt. Đi giá sòng phẳng <strong>chênh lệch lớn hơn 30%</strong> so với các dịch vụ thanh lý đồ cũ tự do.</li>
                <li>Đội kỹ thuật chuyên thực hiện hàng trăm công trình tháo dỡ quy mô dự án biệt thự có bọc dán bảo vệ hoàn trả mặt bằng gốc.</li>
                <li>Quá trình chốt trực tiếp chỉ 10 phút, thanh toán ngay tiền mặt tại chỗ tuyệt đối minh bạch một lần duy nhất.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-20 bg-[#111827] relative mt-auto overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/banner-viet-anh.png" alt="Do cu" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Gia đình, Công ty bạn đang có Cửa cần vứt đi?</h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-10">Mọi báo giá được hoàn thành trong vòng chưa tới 15 phút với độ chuyên nghiệp tuyệt đối!</p>
          <a href="tel:0988257479" className="inline-flex items-center gap-3 bg-white text-[#111827] px-10 py-5 rounded-xl font-black uppercase tracking-wider text-xl hover:bg-[#e08a0d] hover:text-white shadow-[0_15px_30px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-2">
            <span className="text-3xl animate-pulse">📞</span> CHỐT GIÁ NGAY ZALO: 0988.257.479
          </a>
        </div>
      </section>
    </div>
  );
}
