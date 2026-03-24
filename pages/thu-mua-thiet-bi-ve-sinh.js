import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function MuaThietBiVeSinhCuPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Mua Thiết Bị Vệ Sinh Cũ - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh nhận thu mua các thiết bị vệ sinh bao gồm nhiều thứ như bồn cầu, bồn lavabo, bồn rửa tay, bồn tắm" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Mua Thiết Bị Vệ Sinh Cũ</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[20px] leading-relaxed">

              <p className="mb-4 text-justify">
                <strong>Đồ Cũ Việt Anh</strong> nhận thu mua các thiết bị vệ sinh bao gồm nhiều thứ như bồn cầu, bồn lavabo, bồn rửa tay, bồn tắm, … Thu mua của tất cả các hãng sản xuất thiết bị vệ sinh uy tín trên toàn thế giới, với nhiều kiểu dáng thiết kế khác nhau bao gồm cả những loại có thể vận hành tự động và những loại thường được sử dụng tay. Ngoài ra chúng tôi cũng là công ty chuyên thu mua cửa gỗ cũ với giá cao tại khu vực Tp.HCM, Bình Dương, Bình Phước.
              </p>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 361' }}>
                  <Image
                    src="/thu-mua-thiet-bi-ve-sinh-viet-anh.jpg"
                    alt="Thu mua thiết bị vệ sinh"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                    priority // Ưu tiên load ảnh đầu tiên
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                Quy trình thu mua thiết bị vệ sinh cũ của chúng tôi:
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2 text-justify">
                <li>Thu mua bồn cầu cũ là cả một quá trình chặt chẽ khoa học để có thể tạo cho khách hàng cảm giác thoải mái nhất:</li>
                <li>Tiếp nhận thông tin khách hàng.</li>
                <li>Lên lịch hẹn cho khách hàng để nhân viên đến tận nơi để khảo sát.</li>
                <li>Nhân viên khảo sát sẽ đưa ra mức giá phù hợp nhất.</li>
                <li>Khách hàng thỏa thuận và đồng ý với mức giá này thì nhân viên sẽ viết phiếu thu mua cho khách hàng.</li>
                <li>Tiếng hành tháo dỡ dưới sự giám sát của khách hàng.</li>
                <li>Thanh toán cho khách hàng bằng hình thức chuyển khoản hoặc tiền mặt một lần.</li>
                <li>Xe chuyên dụng sẽ đến để vận chuyển và đội ngũ nhân viên sẽ dọn dẹp vệ sinh hiện trường sạch sẽ.</li>
              </ul>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 401' }}>
                  <Image
                    src="/mua-thiet-bi-ve-sinh-cu-uy-tin.jpg"
                    alt="Mua thiết bị vệ sinh cũ uy tin"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <h2 className="text-[20px] font-bold mb-4">
                Địa điểm cửa hàng nhận thu mua bồn cầu cũ
              </h2>

              <p className="mb-4 text-justify">
                Thu mua bồn cầu cũ giá cao tại Tp.HCM - tất cả các quận như Tân Bình, Tân Phú, Bình Tân, Phú nhuận, Gò Vấp, Bình Thạnh, Thủ Đức, quận 1, quận 2, quận 3, quận 4, quận 5, quận 6, quận 7, quận 8, huyện 9, quận 10, quận 11, quận 12,...
              </p>

              <p className="mb-4 text-justify">
                Thu Mua Đồ Cũ Việt  Anh cam kết thu mua các loại bồn cầu cũ giá hơn giá thị trường. Thanh toán 100% trọn gói 1 lần. Không tính phí vận chuyển. Nhận thu mua… Cửa hàng chuyên thu mua các loại bồn cầu cũ đã qua sử dụng ở tại TPHCM.
              </p>

              {/* ========================================= */}
              {/* Ảnh 3 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-[624px] max-w-full" style={{ aspectRatio: '624 / 468' }}>
                  <Image
                    src="/thu-mua-thiet-bi-ve-sinh-gia-cao.png"
                    alt="Mua thiết bị vệ sinh cũ giá cao"
                    fill
                    sizes="(max-width: 640px) 100vw, 624px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8 border-t pt-4">
                <h5 className="text-xl font-bold mb-4 uppercase text-[#000099]">Thu Mua Đồ Cũ Việt Anh</h5>
                <ul className="list-none space-y-3 pl-0">
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Địa Chỉ 2: 197 Dương Quảng Hàm, Phường 5, Quận Gò Vấp, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Địa Chỉ 3: 288 Kha Vạn Cân, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Địa Chỉ 4: 110 Lê Quang Định, Phường 14, Quận Bình Thạnh, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Địa Chỉ 5: 218 Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Email: trinhvanviet1812@gmail.com</strong></p>
                  </li>
                  <li>
                    <p className="text-[16px] md:text-[18px]"><strong> Hotline: 0988.257.479 - Việt Anh</strong></p>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* ========================================= */}
          {/* CỘT SIDEBAR (BÊN PHẢI - 3/12)             */}
          {/* ========================================= */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
}