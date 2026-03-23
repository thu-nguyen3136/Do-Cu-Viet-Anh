const fs = require('fs');
const filePath = 'e:/My Website/DoCuVietAnh/components/Header.js';
let content = fs.readFileSync(filePath, 'utf8');

const desktopMenuNew = `          {/* Menu chính Desktop */}
          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-bold text-[13px] xl:text-[14px] uppercase tracking-wider">
            <li className="text-white hover:text-brand-100 transition cursor-pointer pb-1">
              <Link href="/">Trang chủ</Link>
            </li>
            <li className="text-white hover:text-brand-100 transition cursor-pointer pb-1">
              <a href="/#gioi-thieu">Giới Thiệu</a>
            </li>

            {/* Thu Mua Cửa Cũ - Desktop Submenu */}
            <li className="relative group py-2">
              <div className="flex items-center text-white group-hover:text-brand-100 cursor-pointer transition">
                Thu Mua Cửa Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-lg overflow-hidden text-left">
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cong-nhom-duc">Thu Mua Cổng Nhôm Đúc</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-sat">Thu Mua Cửa Sắt</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-cuon">Thu Mua Cửa Cuốn</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-nhom">Thu Mua Cửa Nhôm</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-go">Thu Mua Cửa Gỗ</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Thu Mua Đồ Gỗ - Desktop Submenu */}
            <li className="relative group py-2">
              <div className="flex items-center text-white group-hover:text-brand-100 cursor-pointer transition">
                Thu Mua Đồ Gỗ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-lg overflow-hidden text-left">
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-di-vang">Thu Mua Đi Văng</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-do-go-cu-moi">Thu Mua Đồ Gỗ Cũ Mới, Xưa Và Nay</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-do-go-cu-tai-nha-tphcm">Thu Mua Đồ Gỗ Cũ Tại Nhà TPHCM</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-tu-bep-go">Thu Mua Tủ Bếp Gỗ</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* Thu Mua Đồ Cũ - Desktop Submenu */}
            <li className="relative group py-2">
              <div className="flex items-center text-white group-hover:text-brand-100 cursor-pointer transition">
                Thu Mua Đồ Cũ
                <svg className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <ul className="bg-white border-t-4 border-brand-600 shadow-2xl rounded-b-lg overflow-hidden text-left">
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thanh-ly-noi-that-khach-san">Thanh Lý Nội Thất Khách Sạn</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-xac-nha-xuong">Thu Mua Xác Nhà Xưởng</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-ton-cu">Thu Mua Tôn Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/mua-thiet-bi-ve-sinh-cu">Mua Thiết Bị Vệ Sinh Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/mua-bon-cau-cu">Mua Bồn Cầu Cũ</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-bon-cau">Thu Mua Bồn Cầu</Link>
                  </li>
                  <li className="px-5 py-3.5 hover:bg-brand-50 text-gray-700 border-b border-gray-50 text-[13px] font-semibold hover:text-brand-600 hover:pl-8 transition-all duration-300">
                    <Link href="/thu-mua-cua-cu-thanh-ly">Thu Mua Cửa Cũ</Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="text-white hover:text-brand-100 transition cursor-pointer pb-1">
              <Link href="/tin-tuc">Tin Tức</Link>
            </li>
            
            <li className="text-white hover:text-brand-100 transition cursor-pointer pb-1">
              <Link href="/lien-he">Liên hệ</Link>
            </li>

            <li>
              <a href="tel:0988257479" className="bg-white text-[#bc700a] px-5 xl:px-6 py-2 xl:py-2.5 rounded-md hover:bg-brand-100 transition-all shadow-lg font-black tracking-wide whitespace-nowrap">
                BÁO GIÁ NGAY
              </a>
            </li>
          </ul>`;

const mobileMenuNew = `            <ul className="flex flex-col space-y-4 font-bold text-[14px] uppercase text-white text-left overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar pr-2">
              <li className="text-white hover:text-brand-100" onClick={() => setIsOpen(false)}><Link href="/">Trang chủ</Link></li>
              <li className="text-white hover:text-brand-100" onClick={() => setIsOpen(false)}><Link href="/#gioi-thieu">Giới Thiệu</Link></li>

              {/* Thu Mua Cửa Cũ */}
              <li className="border-t border-brand-500 pt-3 text-brand-100 text-[12px] font-black underline">Thu Mua Cửa Cũ</li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cong-nhom-duc">Thu Mua Cổng Nhôm Đúc</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cua-sat">Thu Mua Cửa Sắt</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cua-cuon">Thu Mua Cửa Cuốn</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cua-nhom">Thu Mua Cửa Nhôm</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cua-go">Thu Mua Cửa Gỗ</Link>
              </li>

              {/* Thu Mua Đồ Gỗ */}
              <li className="border-t border-brand-500 pt-3 text-brand-100 text-[12px] font-black underline">Thu Mua Đồ Gỗ</li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-di-vang">Thu Mua Đi Văng</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-do-go-cu-moi">Thu Mua Đồ Gỗ Cũ Mới, Xưa Và Nay</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-do-go-cu-tai-nha-tphcm">Thu Mua Đồ Gỗ Cũ Tại Nhà TPHCM</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-tu-bep-go">Thu Mua Tủ Bếp Gỗ</Link>
              </li>

              {/* Thu Mua Đồ Cũ */}
              <li className="border-t border-brand-500 pt-3 text-brand-100 text-[12px] font-black underline">Thu Mua Đồ Cũ</li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thanh-ly-noi-that-khach-san">Thanh Lý Nội Thất Khách Sạn</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-xac-nha-xuong">Thu Mua Xác Nhà Xưởng</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-ton-cu">Thu Mua Tôn Cũ</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/mua-thiet-bi-ve-sinh-cu">Mua Thiết Bị Vệ Sinh Cũ</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/mua-bon-cau-cu">Mua Bồn Cầu Cũ</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-bon-cau">Thu Mua Bồn Cầu</Link>
              </li>
              <li className="pl-4 text-[13px] font-semibold text-brand-100 hover:text-white" onClick={() => setIsOpen(false)}>
                <Link href="/thu-mua-cua-cu-thanh-ly">Thu Mua Cửa Cũ</Link>
              </li>

              <li className="border-t border-brand-500 pt-3 text-white hover:text-brand-100" onClick={() => setIsOpen(false)}>
                <Link href="/tin-tuc">Tin Tức</Link>
              </li>
              <li className="border-t border-brand-500 pt-3 text-white hover:text-brand-100" onClick={() => setIsOpen(false)}>
                <Link href="/lien-he">Liên hệ</Link>
              </li>
            </ul>`;

// Replace desktop menu
const desktopStart = content.indexOf('{/* Menu chính Desktop */}');
const desktopEnd = content.indexOf('          <div className="lg:hidden w-6"></div>');
content = content.substring(0, desktopStart) + desktopMenuNew + '\\n' + content.substring(desktopEnd);

// Replace mobile menu
const mobileStart = content.indexOf('<ul className="flex flex-col space-y-4');
const mobileEnd = content.indexOf('            <div className="mt-8 pt-6 border-t');
if (mobileStart !== -1 && mobileEnd !== -1) {
  content = content.substring(0, mobileStart) + mobileMenuNew + '\\n' + content.substring(mobileEnd);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update complete');
