import Head from 'next/head';
import Link from 'next/link';

export default function ThuMuaCuaCu() {
  const allDoors = [
    { title: "Cửa Gỗ Cũ", list: ["Cửa gỗ Căm Xe", "Cửa gỗ Gõ Đỏ", "Cửa gỗ Lim", "Cửa gỗ Hương", "Cửa gỗ 2, 4 cánh", "Cửa gỗ thông phòng"] },
    { title: "Cửa Nhôm Cũ", list: ["Nhôm Xingfa cao cấp", "Nhôm kính cường lực", "Cửa sổ nhôm kính", "Vách ngăn nhôm", "Cửa nhôm cỏ"] },
    { title: "Cửa Sắt - Cổng", list: ["Cửa sắt kéo Đài Loan", "Cổng sắt hộp", "Cửa sắt cuốn", "Cổng nhôm đúc", "Hàng rào sắt"] },
    { title: "Cửa Nhựa - Khác", list: ["Cửa nhựa lõi thép", "Cửa Eurowindow", "Nhựa giả gỗ ABS", "Cửa thoát hiểm", "Cửa inox cũ"] }
  ];

  const processSteps = [
    { step: "01", title: "Tiếp nhận", desc: "Gửi ảnh qua Zalo 0966.350.979" },
    { step: "02", title: "Khảo sát", desc: "Báo giá cao nhất ngay lập tức" },
    { step: "03", title: "Chốt giá", desc: "Thống nhất thời gian tháo dỡ" },
    { step: "04", title: "Thi công", desc: "Thợ tháo dỡ nhanh, sạch sẽ" },
    { step: "05", title: "Tất toán", desc: "Thanh toán tiền mặt tại chỗ" }
  ];

  const localDistricts = [
    "Quận 1", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8", "Quận 10", "Quận 11", "Quận 12",
    "Tân Bình", "Bình Tân", "Gò Vấp", "Phú Nhuận", "Tân Phú", "Bình Thạnh", "Thủ Đức", "Bình Chánh", "Hóc Môn", "Nhà Bè", "Củ Chi"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#111827]">
      <Head>
        <title>Thu Mua Cửa Cũ TPHCM Giá Cao | Tận Nơi 30 Phút | Việt Anh</title>
        <meta name="description" content="Chuyên thu mua cửa gỗ cũ, nhôm Xingfa, sắt kéo tại TPHCM. Khảo sát tận nơi, tháo dỡ chuyên nghiệp, thanh toán ngay." />
      </Head>

      {/* HERO: Tăng leading cho tiêu đề, giảm py để banner gọn hơn */}
      <section className="relative py-10 md:py-20 bg-[#111827] text-white">
        <div className="absolute inset-0 opacity-20">
          <img src="/thu-mua-cua-cu-hcm.jpg" alt="Thu mua cửa cũ" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase leading-snug md:leading-[1.2] mb-4 !leading-[1.4]">
            THU MUA <span className="text-[#e08a0d]">CÁC LOẠI CỬA CŨ</span> <br />
            GIÁ CAO TẠI TPHCM
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed font-medium">
            Việt Anh chuyên thanh lý cửa gỗ, nhôm kính, cửa sắt.
            <span className="block md:inline text-[#e08a0d]"> Thu mua tận nơi, tháo dỡ sạch sẽ ngay trong ngày.</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
            <Link href="tel:0966350979" className="bg-[#e08a0d] text-white font-black py-3.5 px-8 rounded-xl text-lg hover:scale-105 transition-all text-center">
              GỌI: 0966.350.979
            </Link>
            <Link href="https://zalo.me/0966350979" className="bg-white text-[#111827] font-black py-3.5 px-8 rounded-xl text-lg hover:bg-gray-100 transition-all text-center">
              ZALO BÁO GIÁ
            </Link>
          </div>
        </div>
      </section>

      {/* DANH MỤC: Giảm py-16 xuống py-10 để khít với Hero */}
      <section className="py-4 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black uppercase mb-2">
              DANH MỤC <span className="text-[#bc700a]">CỬA THU MUA</span>
            </h2>
            <div className="w-16 h-1 bg-[#bc700a] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {allDoors.map((cat, i) => (
              <div key={i} className="bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-[#e08a0d]/30 transition-all shadow-sm">
                <h3 className="text-lg font-black text-[#e08a0d] mb-3 uppercase border-b border-gray-200 pb-2">{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[14px] md:text-[15px] font-semibold text-gray-700 leading-tight">
                      <span className="text-[#bc700a] text-[10px]">●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BẢNG GIÁ THAM KHẢO (PHẦN BỔ SUNG CHO SEO) - Ép sát padding */}
      <section className="py-6 md:py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-5">
            <h2 className="text-xl md:text-2xl font-black uppercase mb-1">
              BẢNG GIÁ <span className="text-[#bc700a]">THU MUA THAM KHẢO</span>
            </h2>
            <p className="text-gray-500 text-[12px] md:text-[13px] leading-snug">Giá thu mua thực tế có thể cao hơn tùy thuộc vào độ mới, kích thước và chất liệu.</p>
          </div>
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full bg-white text-left text-[13px] md:text-[14px]">
              <thead className="bg-[#111827] text-white uppercase font-bold text-[11px] md:text-[13px]">
                <tr>
                  <th className="py-2.5 px-3 md:px-4">Loại Cửa</th>
                  <th className="py-2.5 px-3 md:px-4">Đơn Vị</th>
                  <th className="py-2.5 px-3 md:px-4">Giá Thu Mua (VNĐ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50"><td className="py-2.5 px-3 md:px-4 font-bold">Cửa gỗ Căm Xe / Gõ Đỏ</td><td className="py-2.5 px-3 md:px-4">Bộ</td><td className="py-2.5 px-3 md:px-4 text-[#e08a0d] font-black">2.000.000 - 10.000.000+</td></tr>
                <tr className="hover:bg-gray-50"><td className="py-2.5 px-3 md:px-4 font-bold">Cửa Nhôm Xingfa</td><td className="py-2.5 px-3 md:px-4">m2</td><td className="py-2.5 px-3 md:px-4 text-[#e08a0d] font-black">500.000 - 1.200.000</td></tr>
                <tr className="hover:bg-gray-50"><td className="py-2.5 px-3 md:px-4 font-bold">Cửa Sắt Kéo Đài Loan</td><td className="py-2.5 px-3 md:px-4">Bộ</td><td className="py-2.5 px-3 md:px-4 text-[#e08a0d] font-black">800.000 - 3.500.000</td></tr>
                <tr className="hover:bg-gray-50"><td className="py-2.5 px-3 md:px-4 font-bold">Cổng Nhôm Đúc</td><td className="py-2.5 px-3 md:px-4">Bộ</td><td className="py-2.5 px-3 md:px-4 text-[#e08a0d] font-black">Liên hệ khảo sát</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* QUY TRÌNH: Giảm khoảng cách dọc */}
      <section className="py-10 bg-[#111827] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black uppercase mb-8">
            QUY TRÌNH <span className="text-[#e08a0d]">5 BƯỚC NHANH GỌN</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {processSteps.map((p, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-12 h-12 bg-[#e08a0d] rounded-full flex items-center justify-center text-xl font-black mb-3 group-hover:rotate-12 transition-transform shadow-lg shadow-[#e08a0d]/20">
                  {p.step}
                </div>
                <h4 className="text-sm md:text-base font-bold mb-1 group-hover:text-[#e08a0d]">{p.title}</h4>
                <p className="text-gray-400 text-[12px] leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NỘI DUNG CHỮ DÀI (PHẦN BỔ SUNG CHO SEO GOOGLE BOT) */}
      <section className="py-6 md:py-8 bg-white border-b border-gray-100">
        <div className="max-w-[900px] mx-auto px-6 text-gray-700">
          <h2 className="text-lg md:text-2xl font-black uppercase text-[#e08a0d] mb-4 !leading-[1.2]">
            TẠI SAO VIỆT ANH LÀ ĐƠN VỊ THU MUA UY TÍN?
          </h2>
          <p className="mb-4 text-[13px] md:text-[14px] leading-relaxed">
            Khi tiến hành sửa chữa, việc xử lý những bộ cửa cũ (cửa gỗ, nhôm kính, cửa sắt) luôn làm đau đầu nhiều gia chủ. Nếu bỏ đi thì lãng phí, giữ lại thì chật chội. <strong>Cửa hàng đồ cũ Việt Anh</strong> mang đến giải pháp thanh lý trọn gói với tiêu chí: <strong>Giá cao - Nhanh gọn - Chuyên nghiệp</strong>.
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-[#e08a0d] text-[14px] md:text-[15px] flex items-center gap-1.5">
                <span className="text-lg">✔</span> Định giá chính xác - Không ép giá
              </h3>
              <p className="text-[12px] md:text-[13px] mt-1 leading-snug">Chúng tôi am hiểu sâu sắc giá trị của từng loại gỗ (Lim, Hương, Căm Xe) cũng như các hệ nhôm. Cam kết báo giá sát với thực tế, tuyệt đối không ép giá.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#e08a0d] text-[14px] md:text-[15px] flex items-center gap-1.5">
                <span className="text-lg">✔</span> Tháo dỡ an toàn, sạch sẽ
              </h3>
              <p className="text-[12px] md:text-[13px] mt-1 leading-snug">Việc tháo dỡ cửa cần kỹ thuật cao. Việt Anh có đầy đủ thiết bị, đảm bảo tháo dỡ trong ngày và thu dọn xà bần sạch sẽ trước khi rời đi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAM KẾT: Ép sát margin */}
      <section className="py-6 pt-2 pb-0 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 shadow-inner">
            <h2 className="text-2xl font-black uppercase mb-4 text-[#111827]">Vì sao chọn Việt Anh?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <span className="text-xl">💰</span>
                <p className="text-[14px] leading-snug"><strong>Giá cao:</strong> Định giá sát thực tế gỗ quý và nhôm hệ.</p>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-xl">⚡</span>
                <p className="text-[14px] leading-snug"><strong>Nhanh:</strong> Tháo dỡ và dọn dẹp mặt bằng ngay trong ngày.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SEO: Rất nhẹ và khít */}
      <section className="py-4 border-t border-gray-50 mt-6">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-[13px] font-bold text-orange-400 mb-3 uppercase tracking-widest">Khu vực thu mua 24/7</p>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
            {localDistricts.map((item, index) => (
              <span key={index} className="text-[11px] md:text-[12px] text-gray-500 bg-white border border-gray-100 px-2 py-0.5 rounded shadow-sm hover:text-[#e08a0d] cursor-default transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}