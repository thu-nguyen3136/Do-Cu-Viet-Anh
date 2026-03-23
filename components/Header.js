'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-[100] shadow-xl font-sans">

      {/* --- THANH ĐẦU TRANG: CHUYÊN NGHIỆP, NỀN TỐI --- */}
      <div className="bg-[#111827] text-white py-1.5 md:py-2 relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bc700a]/20 to-transparent opacity-60"></div>
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 relative z-10">

          {/* Khẩu hiệu */}
          <div className="hidden lg:flex items-center gap-2 text-[12px] xl:text-[13px] font-semibold text-gray-300 uppercase tracking-widest">
            <span className="text-[#e08a0d] text-lg">✨</span> Đơn vị thu mua đồ cũ, thanh lý giá cao uy tín nhất TP.HCM
          </div>

          {/* Cụm hành động / Nút gọi */}
          <div className="flex items-center justify-between w-full lg:w-auto gap-3 sm:gap-6">
            <div className="flex items-center gap-2 font-black tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
              <div className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e08a0d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#bc700a]"></span>
              </div>
              <span className="text-gray-400 text-[10px] md:text-[11px] uppercase">Hotline:</span>
              <a href="tel:0988257479" className="text-white hover:text-[#e08a0d] transition-colors text-[13px] md:text-[15px]">0988.257.479</a>
            </div>

            <a href="tel:0988257479" className="flex items-center gap-1.5 bg-gradient-to-r from-[#bc700a] to-[#e08a0d] text-white px-5 md:px-7 py-2 rounded-full text-[11px] md:text-[12px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(224,138,13,0.4)] hover:shadow-[0_0_25px_rgba(224,138,13,0.7)] hover:-translate-y-0.5 transition-all duration-300 border border-[#f5b357]/30 group flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">BÁO GIÁ NGAY</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- MENU CHÍNH: THANH ĐIỀU HƯỚNG --- */}
      <nav className="bg-brand-600 border-b-4 border-brand-700 relative shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex justify-between items-stretch h-[60px] md:h-[72px]">

          {/* Nút Mobile Menu */}
          <button
            className="lg:hidden text-white hover:text-brand-200 transition z-[110] self-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 relative z-[100] lg:static lg:translate-x-0 absolute left-1/2 -translate-x-1/2 self-center">
            <div className="relative flex items-center justify-center w-36 h-10 md:w-64 md:h-14 bg-white rounded shadow-sm flex-shrink-0 border border-brand-600 overflow-hidden">
              <Image
                src="/logo-viet-anh.png"
                alt="Logo Việt Anh"
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 144px, 288px"
                priority
              />
            </div>
          </Link>

          {/* Menu chính Desktop */}
          <ul className="hidden lg:flex items-stretch space-x-1 xl:space-x-2 font-bold text-[13px] xl:text-[14px] uppercase tracking-wider h-full">
            <li className="h-full flex items-center">
              <Link href="/" className="text-white hover:bg-white/20 hover:text-brand-50 py-2.5 px-3 xl:px-4 rounded transition-colors">
                Trang chủ
              </Link>
            </li>
            <li className="h-full flex items-center">
              <Link href="/#gioi-thieu" className="text-white hover:bg-white/20 hover:text-brand-50 py-2.5 px-3 xl:px-4 rounded transition-colors">
                Giới Thiệu
              </Link>
            </li>

            {/* Thu Mua Cửa Cũ */}
            <li className="relative group h-full cursor-pointer flex items-center">
              <div className="flex items-center text-white group-hover:bg-white/20 group-hover:text-brand-50 transition-colors py-2.5 px-3 xl:px-4 rounded">
                Thu Mua Cửa Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-lg overflow-hidden text-left">
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-cu-gia-cao">Thu Mua Cửa Cũ Giá Cao</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-nhom">Thu Mua Cửa Nhôm Xingfa</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-go">Thu Mua Cửa Gỗ Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cong-nhom-duc">Thu Mua Cổng Nhôm Đúc</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-cuon">Thu Mua Cửa Cuốn Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-sat">Thu Mua Cửa Sắt Cũ</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Thu Mua Đồ Cũ */}
            <li className="relative group h-full cursor-pointer flex items-center">
              <div className="flex items-center text-white group-hover:bg-white/20 group-hover:text-brand-50 transition-colors py-2.5 px-3 xl:px-4 rounded">
                Thu Mua Đồ Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full w-[340px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-lg overflow-hidden text-left">
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/mua-thiet-bi-ve-sinh-cu">Thu Mua Thiết Bị Vệ Sinh Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-ton-cu">Thu Mua Tôn Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-xac-nha-xuong">Thu Mua Xác Nhà Kho Xưởng</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-do-go-cu-tai-nha-tphcm">Thu Mua Đồ Gỗ Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-tu-bep-go">Thu Mua Tủ Bếp Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-do-go-cu-moi">Thu Mua Bàn Ghế Gỗ Cũ</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="h-full flex items-center">
              <Link href="/tin-tuc" className="text-white hover:bg-white/20 hover:text-brand-50 py-2.5 px-3 xl:px-4 rounded transition-colors">
                Tin Tức
              </Link>
            </li>

            <li className="h-full flex items-center">
              <Link href="/lien-he" className="text-white hover:bg-white/20 hover:text-brand-50 py-2.5 px-3 xl:px-4 rounded transition-colors">
                Liên hệ
              </Link>
            </li>
          </ul>

          {/* Dành không gian trống cho cân đối nếu mobile */}
          <div className="lg:hidden w-8 self-center"></div>
        </div>

        {/* --- LỚP PHỦ MENU TRÊN DI ĐỘNG --- */}
        <div className={`fixed inset-0 bg-black/50 z-[140] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />

        <div className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-[100dvh] bg-brand-600 z-[150] lg:hidden transition-transform duration-300 shadow-2xl ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full relative p-6">

            <div className="flex justify-between items-center mb-8 border-b border-brand-500 pb-4 text-left">
              <span className="font-black text-white text-lg italic">MENU</span>
              <button onClick={() => setIsOpen(false)} className="text-brand-100 hover:text-white">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Danh sách Liên Kết Trình Đơn Di Động */}
            <div className="overflow-y-auto pb-[100px] custom-scrollbar">
              <ul className="flex flex-col space-y-4 font-bold text-[14px] uppercase text-white text-left">
                <li className="text-brand-100" onClick={() => setIsOpen(false)}><Link href="/">Trang chủ</Link></li>
                <li className="text-white hover:text-brand-100" onClick={() => setIsOpen(false)}><Link href="/#gioi-thieu">Giới Thiệu</Link></li>

                {/* Thu Mua Cửa Cũ */}
                <li className="border-t border-brand-500 pt-3 text-brand-100 text-[12px] font-black underline">Thu Mua Cửa Cũ</li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cua-cu-gia-cao">Thu Mua Cửa Cũ Giá Cao</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cua-nhom">Thu Mua Cửa Nhôm Xingfa</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cua-go">Thu Mua Cửa Gỗ Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cong-nhom-duc">Thu Mua Cổng Nhôm Đúc</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cua-cuon">Thu Mua Cửa Cuốn Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-cua-sat">Thu Mua Cửa Sắt Cũ</Link>
                </li>

                {/* Thu Mua Đồ Cũ */}
                <li className="border-t border-brand-500 pt-3 text-brand-100 text-[12px] font-black underline">Thu Mua Đồ Cũ</li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/mua-thiet-bi-ve-sinh-cu">Thu Mua Thiết Bị Vệ Sinh Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-ton-cu">Thu Mua Tôn Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-xac-nha-xuong">Thu Mua Xác Nhà Kho Xưởng</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-do-go-cu-tai-nha-tphcm">Thu Mua Đồ Gỗ Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-tu-bep-go">Thu Mua Tủ Bếp Cũ</Link>
                </li>
                <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                  <Link href="/thu-mua-do-go-cu-moi">Thu Mua Bàn Ghế Gỗ Cũ</Link>
                </li>

                <li className="border-t border-brand-500 pt-3 text-white hover:text-brand-100" onClick={() => setIsOpen(false)}>
                  <Link href="/tin-tuc">Tin Tức</Link>
                </li>
                <li className="border-t border-brand-500 pt-3 text-white hover:text-brand-100" onClick={() => setIsOpen(false)}>
                  <Link href="/lien-he">Liên hệ</Link>
                </li>
              </ul>
            </div>

            {/* Nút hành động nổi ở viền dưới Di Động */}
            <div className="absolute bottom-0 left-0 w-full bg-brand-600 border-t border-brand-500 p-6">
              <a href="tel:0988257479" className="block w-full bg-white text-[#bc700a] text-center py-4 rounded-lg font-black shadow-lg hover:bg-brand-100 transition tracking-wide">
                GỌI BÁO GIÁ NGAY
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}