import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#111827] pt-16 pb-8 font-sans text-white border-t-4 border-[#e08a0d] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#bc700a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e08a0d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative z-10">

        {/* Lưới chia cột */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-12">

          {/* Cột 1: Giới thiệu (Chiếm 4 cột) */}
          <div className="md:col-span-12 lg:col-span-4 transition-transform duration-300">
            <Link href="/" className="inline-flex items-center gap-3 md:gap-4 group mb-6 hover:no-underline cursor-pointer">
              <div className="bg-white px-5 py-3 md:px-7 md:py-4 rounded-xl shadow-[0_4px_15px_rgba(224,138,13,0.3)] group-hover:shadow-[0_8px_25px_rgba(224,138,13,0.5)] transition-all duration-300">
                <div className="relative w-[180px] h-[50px] md:w-[240px] md:h-[65px]">
                  <Image
                    src="/logo-viet-anh.png"
                    alt="Đồ Cũ Việt Anh"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>

            <p className="text-gray-400 leading-7 text-[14px] mb-8 text-justify">
              Đơn vị hàng đầu chuyên thu mua đồ cũ, cửa cũ, đồ gỗ, và nhận thanh lý nhà hàng, quán ăn, khách sạn, kho xưởng với giá cao nhất tại TP.HCM. Phương châm làm việc: Uy tín - Nhanh chóng - Chuyên nghiệp.
            </p>

            {/* Email & Hotline */}
            <div className="space-y-4">
              <a href="mailto:trinhvanviet1812@gmail.com" className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-[#e08a0d]/50 hover:bg-white/10 transition-all group">
                <div className="bg-[#bc700a] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white font-medium text-[13px] md:text-[14px] group-hover:text-[#e08a0d] transition-colors break-all">trinhvanviet1812@gmail.com</span>
                </div>
              </a>

              <a href="tel:0988257479" className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-[#e08a0d]/50 hover:bg-white/10 transition-all group">
                <div className="bg-[#e08a0d] w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e08a0d] opacity-50"></span>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-white font-black text-[15px] md:text-[16px] tracking-wider group-hover:text-[#e08a0d] transition-colors">0988.257.479 <span className="text-[12px] font-medium text-gray-400"> (Việt Anh)</span></span>
                </div>
              </a>
            </div>
          </div>

          {/* Cột 2: Hệ Thống Cửa Hàng (Chiếm 5 cột) */}
          <div className="md:col-span-7 lg:col-span-5 transition-transform duration-300 lg:pl-6">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#e08a0d] rounded-sm inline-block"></span>
              HỆ THỐNG CỬA HÀNG
            </h3>
            <ul className="space-y-4 md:space-y-5 text-gray-300 text-[13px] md:text-[14px]">
              <li className="flex items-start gap-4 group">
                <div className="bg-[#bc700a]/20 mt-1 p-1.5 rounded-lg group-hover:bg-[#bc700a] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e08a0d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span><strong className="text-white block sm:inline">Địa Chỉ 1:</strong> 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-[#bc700a]/20 mt-1 p-1.5 rounded-lg group-hover:bg-[#bc700a] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e08a0d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span><strong className="text-white block sm:inline">Địa Chỉ 2:</strong> 197 Dương Quảng Hàm, Phường 5, Quận Gò Vấp, TP.HCM</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-[#bc700a]/20 mt-1 p-1.5 rounded-lg group-hover:bg-[#bc700a] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e08a0d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span><strong className="text-white block sm:inline">Địa Chỉ 3:</strong> 288 Kha Vạn Cân, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-[#bc700a]/20 mt-1 p-1.5 rounded-lg group-hover:bg-[#bc700a] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e08a0d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span><strong className="text-white block sm:inline">Địa Chỉ 4:</strong> 110 Lê Quang Định, Phường 14, Quận Bình Thạnh, TP.HCM</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="bg-[#bc700a]/20 mt-1 p-1.5 rounded-lg group-hover:bg-[#bc700a] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-[#e08a0d] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span><strong className="text-white block sm:inline">Địa Chỉ 5:</strong> 218 Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM</span>
              </li>
            </ul>
          </div>

          {/* Cột 3: Dịch vụ mới nhất (Chiếm 3 cột) */}
          <div className="md:col-span-5 lg:col-span-3 transition-transform duration-300">
            <h3 className="text-white font-black text-[18px] md:text-[20px] mb-6 md:mb-8 uppercase flex items-center gap-3">
              <span className="w-2 h-6 bg-[#e08a0d] rounded-sm inline-block"></span>
              DỊCH VỤ MỚI NHẤT
            </h3>
            <ul className="space-y-4 text-gray-300 text-[14px] font-medium">
              <li>
                <Link href="/thu-mua-cong-nhom-duc" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Cổng Nhôm Đúc
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-cua-cuon" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Cửa Cuốn
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-do-go-cu-moi" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Đồ Gỗ Xưa & Nay
                </Link>
              </li>
              <li>
                <Link href="/thanh-ly-noi-that-khach-san" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thanh Lý Nội Thất Khách Sạn
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-xac-nha-xuong" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Xác Nhà Xưởng
                </Link>
              </li>
              <li>
                <Link href="/mua-bon-cau-cu" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Bồn Cầu Cũ
                </Link>
              </li>
              <li>
                <Link href="/thu-mua-cua-cu-thanh-ly" className="flex items-center gap-3 hover:text-[#e08a0d] hover:translate-x-2 transition-all group">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-[#e08a0d] transition-colors"></span>
                  Thu Mua Cửa Cũ
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Dòng bản quyền dưới cùng */}
        <div className="border-t border-gray-800 pt-6 pb-2 text-center flex flex-col items-center">
          <p className="text-gray-500 text-[13px] md:text-[14px]">
            Copyright © {new Date().getFullYear()} <span className="text-[#bc700a] font-bold">Đồ Cũ Việt Anh</span>. All rights reserved.
          </p>
          <div className="mt-2 text-gray-600 text-[11px] uppercase tracking-widest hidden md:block">
            Giải pháp thu mua đồ cũ uy tín hàng đầu
          </div>
        </div>
      </div>
    </footer>
  );
}