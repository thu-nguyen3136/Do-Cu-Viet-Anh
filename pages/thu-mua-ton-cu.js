import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE CỦA NEXT.JS
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTonCuPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Tôn Cũ - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Thu Mua Đồ Cũ Việt Anh chuyên thu mua và thanh lý tôn cũ giá cao, uy tín chuyên nghiệp, thủ tục nhanh chóng" />

        <meta property="og:title" content="Thu Mua Tôn Cũ - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="Thu Mua Đồ Cũ Việt Anh chuyên thu mua và thanh lý tôn cũ giá cao, uy tín chuyên nghiệp, thủ tục nhanh chóng" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-ton-cu" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-ton-cu" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Tôn Cũ</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[20px] leading-relaxed">

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">Dịch Vụ <strong>Thu Mua Tôn Cũ Giá Cao</strong> Tại TP.HCM & Các Tỉnh Lân Cận</span>
              </p>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">Thu  Mua Đồ Cũ Việt Anh </span></strong>
                <span className="text-[#333333]">chuyên thu mua và t<strong>hanh lý tôn cũ giá cao, uy tín chuyên nghiệp, thủ tục nhanh chóng, giá cả hợp lý nhất đảm bảo hài lòng đến quý khách hàng khó tính nhất. Đối với những nhà xưởng cần bán tôn cũ để thay tôn mới, chúng tôi có thể tự tháo dỡ cho các bạn. Nếu có nhu cầu lắp tôn mới qua công ty chúng tôi thì sẽ có nhân viên đến báo giá và thi công cho quý vị.</strong></span>
              </p>

              <p className="mb-4 text-center px-4">
                <strong><span className="text-black"> LIÊN HỆ NHẬN BÁO GIÁ:</span> </strong>
                <span className="text-[24px] text-[#ff0000]"><strong><span className="bg-[#ffff00] px-1">0988.257.479</span></strong></span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ TỐI ƯU VÀ SỬA ĐƯỜNG DẪN         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center px-4">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 400' }}>
                  <Image
                    src="/mua-ton-cu.jpg" // ĐÃ SỬA: Thêm / ở đầu
                    alt="Thu mua tôn cũ"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                    priority // Ưu tiên load vì ảnh nằm trên cùng
                  />
                </div>
              </div>

              <p className="mb-4 text-justify px-4">
                <span className="text-[#333333]">- Khi những mái tôn nhà bạn đã bị xuống cấp chầm trọng rồi, hay đơn giản là bạn khong còn nhu cầu sử dụng chúng nữa, nhất là lại chuẩn bị những mùa mưa sắp tới làm ảnh hưởng rất lớn đến ngôi nhà của gia đình chúng ta, vậy lên bạn hãy tìm đến những nơi thu mua tôn cũ giá cao, Uy tín, Chất lượng, Nhanh chóng.</span>
              </p>

              <p className="mb-4 text-center px-4">&nbsp;</p>

              <p className="mb-4 text-justify px-4">
                <strong><span className="text-[#333333]">OP 1 : THU MUA TÔN CŨ GIÁ CAO </span></strong>
              </p>

              <p className="mb-2 text-justify px-4">
                <span className="text-[#333333]">- Đơn vị của chúng tôi không ngại xa, vui vẻ, nhiệt tình, đúng giá, đúng hẹn, thanh lý tôn cũ nhanh chóng trong ngày. </span>
              </p>

              <p className="mb-2 text-justify px-4">
                <span className="text-[#333333]">- Không ép giá, thu mua tôn cũ giá cao, thanh toán nhanh. </span>
              </p>

              <p className="mb-2 text-justify px-4">
                <span className="text-[#333333]">- Thanh lý tôn cũ tận nơi số lượng nhiều và ít. </span>
              </p>

              <p className="mb-4 text-justify px-4">
                <span className="text-[#333333]">- Người giới thiệu thu mua sẽ có 5% đến 10% giá trị trên hóa đơn. </span>
              </p>

              <p className="mb-4 text-justify px-4">
                <strong><span className="text-[#333333]">TOP 2 : THU MUA TÔN CŨ TP HCM</span></strong>
              </p>

              <p className="mb-4 text-justify px-4">
                <span className="text-[#333333]">- Thu mua tôn cũ hư hỏng của các cơ quan, xí nghiệp, công ty, trường học không hạn chế số lượng. Có nhiều loại tôn cũ như, tôn lạnh, tôn màu, tôn kẽm, tôn sóng vuông, tôn sóng tròn, tôn sóng lớn, tôn sóng nhỏ… đều thu mua và giá của mỗi loại tôn là khác nhau, tuy thuộc vào giá tôn lợp chính phẩm trên thị trường và chất lượng còn lại của từng loại tôn cũ. Sẽ nhận thu mua tôn cũ giá cao và thầu phần thi công tôn mới cho doanh nghiệp, nếu hợp tác với công ty chúng tôi các bạn sẽ được báo giá rất mềm so với thị trường. Chúng tôi có kinh nghiệm trong việc lợp mái tôn cho các nhà xưởng Với phương châm làm việc: "VUI VẺ - NHIỆT TÌNH - KHÔNG ÉP GIÁ" </span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ TỐI ƯU VÀ SỬA ĐƯỜNG DẪN         */}
              {/* ========================================= */}
              <div className="mb-6 flex justify-center px-4">
                <div className="relative w-[728px] max-w-full" style={{ aspectRatio: '728 / 960' }}>
                  <Image
                    src="/thu-mua-ton-cu-hcm.jpeg" // ĐÃ SỬA: Thêm / ở đầu
                    alt="Thu mua tôn cũ hcm"
                    fill
                    sizes="(max-width: 768px) 100vw, 728px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <h2 className="text-xl md:text-2xl font-bold mb-4 px-2">
                <strong><span className="text-black">Địa bàn thu mua tôn cũ của </span><strong><span className="text-black">Đồ Cũ Việt Anh</span></strong><span className="text-black"> tại TPHCM:</span></strong>
              </h2>

              <p className="mb-4 text-justify px-4">
                <strong><span className="text-[#333333]">Thu mua tôn cũ </span></strong>
                <span className="text-[#333333]">TPHCM gồm các quận huyện như : quận 1, quận 2, quận 3, quận 4, quận 5, quận 6, quận 7, quận 8, quận 9, quận 10, quận 11, quận 12, quận Tân Bình, Quận Tân Phú, Quận Gò Vấp, quận Bình Tân, Quận Phú Nhuận, Quận Thủ Đức, Huyện Củ Chi, Huyện Hóc Môn, Huyện Nhà Bè, Huyện Bình Chánh..</span>
              </p>

              <p className="mb-8 text-justify px-4">
                <span className="text-[#333333]">Khách hàng sẽ hoàn toàn yên tâm khi sử làm việc với chúng tôi. <strong>Dịch vụ thu tôn cũ giá cao </strong>tại <strong>Đồ Cũ Việt Anh</strong> cam kết mang lại lợi ích tốt nhất, giá cả hợp lý nhất cho mọi khách hàng tại TP.HCM và các tỉnh lân cận</span>
              </p>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8 border-t pt-4">
                <h5 className="text-xl font-bold mb-4 text-[#e08a0d] uppercase">THU MUA ĐỒ CŨ VIỆT ANH</h5>
                <ul className="list-none space-y-2 pl-0 text-[16px] md:text-[18px]">
                  <li><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 2: 197 Dương Quảng Hàm, Phường 5, Quận Gò Vấp, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 3: 288 Kha Vạn Cân, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 4: 110 Lê Quang Định, Phường 14, Quận Bình Thạnh, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 5: 218 Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM</strong></li>
                  <li className="mt-4"><strong> Email: trinhvanviet1812@gmail.com</strong></li>
                  <li><strong> Hotline: 0988.257.479 - Việt Anh</strong></li>
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