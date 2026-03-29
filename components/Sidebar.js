import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-full md:w-1/4 px-4 mt-8 md:mt-0">

      {/* Box 1: Thu Mua Cửa Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm">
        <div className="bg-[#e08a0d] text-white p-2">
          <h4 className="text-base font-bold text-center m-0 capitalize">Thu Mua Cửa Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cua-go" className="flex items-center gap-3">
              <img src="thu-mua-cua-go.jpg" alt="Thu Mua Cửa Gỗ" className="w-16 h-12 object-cover" />
              <h6 className="tesxt-[14px] text-gray-800 m-0 font-medium">Thu Mua Cửa Gỗ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cua-sat" className="flex items-center gap-3">
              <img src="thu-mua-cua-sat-cu.jpg" alt="Thu Mua Cửa Sắt" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Cửa Sắt</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cua-nhom" className="flex items-center gap-3">
              <img src="thu-mua-cua-nhom-xingfa.jpg" alt="Thu Mua Cửa Nhôm" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Cửa Nhôm</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cua-cuon" className="flex items-center gap-3">
              <img src="thu-mua-cua-cuon-cu.jpg" alt="Thu Mua Cửa Cuốn" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Cửa Cuốn</h6>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cong-nhom" className="flex items-center gap-3">
              <img src="thu-mua-cong-nhom-duc.jpg" alt="Thu Mua Cổng Nhôm Đúc" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Cổng Nhôm Đúc</h6>
            </Link>
          </li>
        </ul>
      </div>

      {/* Box 2 : Thu Mua Đồ Cũ */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm">
        <div className="bg-[#e08a0d] text-white p-2">
          <h4 className="text-base font-bold text-center m-0 capitalize">Thu Mua Đồ Cũ</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-cua-cu-gia-cao" className="flex items-center gap-3">
              <img src="thu-mua-cua-cu-gia-cao.jpg" alt="Thu Mua Cửa Cũ" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Cửa Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-tu-bep" className="flex items-center gap-3">
              <img src="thu-mua-tu-bep-cu.jpg" alt="Thu Mua Bồn Cầu" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Tủ Bếp Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-do-go" className="flex items-center gap-3">
              <img src="thu-mua-do-go-cu.jpg" alt="Thu Mua Đồ Gỗ Cũ" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Đồ Gỗ Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-van-san-go" className="flex items-center gap-3">
              <img src="thu-mua-van-san-go-cu.png" alt="Thu Mua Ván Sàn Gỗ Cũ" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Ván Sàn Gỗ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-thiet-bi-ve-sinh" className="flex items-center gap-3">
              <img src="thu-mua-thiet-bi-ve-sinh-cu.jpg" alt="Mua Thiết Bị Vệ Sinh Cũ" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Mua Thiết Bị Vệ Sinh Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-ton-cu" className="flex items-center gap-3">
              <img src="thu-mua-ton-cu.jpg" alt="Thu Mua Tôn Cũ" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Tôn Cũ</h6>
            </Link>
          </li>
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="/thu-mua-xac-nha-xuong" className="flex items-center gap-3">
              <img src="thu-mua-xac-nha-kho-xuong.jpg" alt="Thu Mua Xác Nhà Xưởng" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Xác Nhà Xưởng</h6>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-50">
            <Link href="/thu-mua-ban-ghe-go" className="flex items-center gap-3">
              <img src="thu-mua-ban-ghe-go-cu.jpg" alt="Thanh Lý Nội Thất Khách Sạn" className="w-16 h-12 object-cover" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Bàn Ghế Gỗ Cũ</h6>
            </Link>
          </li>
        </ul>
      </div>

      {/* Box 4: Tin Tức Mới Nhất */}
      <div className="mb-8 bg-white border border-gray-200 rounded-sm">
        <div className="bg-[#e08a0d] text-white p-2">
          <h4 className="text-base font-bold text-center m-0">Tin Tức Mới Nhất</h4>
        </div>
        <ul className="list-none p-0 m-0">
          <li className="border-b border-gray-100 p-2 hover:bg-gray-50">
            <Link href="tin-tuc/thu-mua-do-cu-uy-tin-tphcm" className="flex items-center gap-3">
              <img src="thu-mua-do-cu-uy-tin-hcm.jpeg" alt="Tin tức 1" className="w-16 h-12 object-cover rounded" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM</h6>
            </Link>
          </li>
          <li className="p-2 hover:bg-gray-50">
            <Link href="/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh" className="flex items-center gap-3">
              <img src="thu-mua-thiet-bi-ve-sinh-viet-anh.jpg" alt="Tin tức 2" className="w-16 h-12 object-cover rounded" />
              <h6 className="text-[14px] text-gray-800 m-0 font-medium">Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM</h6>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}