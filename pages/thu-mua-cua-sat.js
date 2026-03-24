import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCuaSatPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cửa Sắt - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh là nơi chuyên thu mua cửa sắt cũ, mua cửa sắt với giá tốt nhất." />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cửa Sắt</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">Nếu bạn đang muốn tân trang lại một bộ cửa mới xịn hơn, đẹp hơn, hợp thời hơn so với cửa và khung cửa sắt cũ. Bạn đừng vội vứt cửa cũ đi vì chúng vẫn có giá trị và có thể đem lại cho bạn một khoản tiền kha khá. Hiện nay, dịch vụ <strong>thu mua cửa sắt cũ</strong> – khung cửa tại Tp.HCM đang rất thịnh hành, bạn có thể tham khảo thêm bài viết này để hiểu rõ hơn về dịch vụ này.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Đồ Cũ Việt Anh là nơi chuyên </span><strong><span className="text-blue-600">thu mua cửa sắt cũ, mua cửa sắt</span></strong><span className="text-black"> với giá tốt nhất. Chúng tôi cam kết luôn mang đến quyền lợi tốt nhất dành cho quý khách hàng chọn chúng tôi là nơi bán, thanh lý cửa sắt cũ sỉ và lẻ.</span>
              </p>

              <p className="mb-4">
                <strong><span className="text-black">CÁC LOẠI CỬA CŨ MÀ ĐỒ CŨ VIỆT ANH THU MUA</span></strong>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Cửa sắt hiện nay được làm gia công từ nhiều chất liệu như sắt hộp, sắt đặc, hoặc kết hợp giữa sắt hộp, sắt đặc, kèm với nhôm, thép và kính tùy từng thiết kế và nhu cầu đặt hàng của người dùng. <strong>Thu Mua Đồ Cũ Việt Anh</strong> không những nhận mua các loại cửa sắt mà còn bằng các chất liệu khác như nhôm, inox,… Hiện nay, công ty chúng tôi nhận </span><strong><span className="text-blue-600">thu mua cửa sắt cũ</span></strong><span className="text-black"> các loại như sau:</span>
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li><span className="text-black">Cửa sắt cuốn, cửa sắt kéo Đài Loan</span></li>
                <li><span className="text-black">Cửa sắt nhôm, kính, cửa sắt giả gỗ</span></li>
                <li><span className="text-black">Cửa sổ sắt, cửa cổng, cửa sắt hoa văn</span></li>
                <li><span className="text-black">Chi tiết cửa sắt đã tháo rời….</span></li>
                <li><span className="text-black">Mua cửa sắt cũ</span></li>
                <li><span className="text-black">Mua cửa kính cũ</span></li>
                <li><span className="text-black">Mua cửa gỗ cũ</span></li>
                <li><span className="text-black">Mua cửa nhựa cũ</span></li>
                <li><span className="text-black">Mua cửa cuốn cũ</span></li>
                <li><span className="text-black">Cửa cổng, cửa kéo cũ thời, cửa đi, cửa sổ sắt kính, cửa lùa nhôm, cửa sắt, sửa chữa cửa sắt, mái cây tôn, cửa phòng nhôm kính 1 cánh, lan can, cầu thang, cửa cuốn motor, cửa cuốn kéo tay, mua cửa cuốn công nghệ đức, cửa cuốn kéo công nghệ đài loan</span></li>
              </ul>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ TỐI ƯU VÀ SỬA ĐƯỜNG DẪN         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 450' }}>
                  <Image
                    src="/thu-mua-cua-sat-viet-anh.jpg"
                    alt="Thu mua cửa sắt Việt Anh"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                    priority // Ưu tiên load ảnh banner
                  />
                </div>
              </div>

              <p className="mb-4">
                <strong><span className="text-black">ƯU ĐIỂM CỦA DỊCH VỤ THU MUA CỬA SẮT CŨ TẠI VIỆT ANH</span></strong>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Công ty của chúng tôi cam kết rằng, quá trình thương lượng giá cả là hoàn toàn không ép giá, quá trình thảo luận và xác định mức giá thu mua cửa sắt cũ đều dựa trên khung giá quy định sẵn của công ty chúng tôi nói riêng và thị trường thu mua cửa sắt cũ nói chung. Báo giá được thông báo cụ thể, rõ ràng, minh bạch cho quý khách.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Chúng tôi là đơn vị thu mua cửa sắt cũ có mạng lưới thu mua rộng lớn, có mặt ở hầu hết các khu vực, tỉnh thành trên khắp cả nước, đặc biệt là tại các quận huyện trên địa bàn Thành phố Hồ Chí Minh.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Thêm nữa, công ty Quang Đạt còn xây dựng đội ngũ nhân viên phục vụ chuyên nghiệp, tận tâm và luôn sẵn sàng phục vụ khách hàng nhanh chóng. Nhân viên của chúng tôi sẽ trực tiếp đến địa điểm thu mua cửa sắt cũ theo yêu cầu.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Công ty của chúng tôi là một trong những đơn vị có tiềm lực thu mua cửa sắt cũ mạnh hàng đầu trên thị trường hiện nay. Chúng tôi nhận thu mua cửa sắt cũ với số lượng lớn tại các hộ gia đình, phòng trọ, nhà kho, xưởng, các khu công nghiệp lớn… với đủ mọi chủng loại, kích thước, kiểu dáng, xuất xứ,…</span>
              </p>

              <p className="mb-4 text-center">&nbsp;</p>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ TỐI ƯU VÀ SỬA ĐƯỜNG DẪN         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 700' }}>
                  <Image
                    src="/thanh-ly-cua-sat.jpeg"
                    alt="Thanh lý cửa sắt"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <strong><span className="text-black">Thu Mua Đồ Cũ Việt Anh</span></strong><span className="text-black">  là nơi chuyên </span><strong><span className="text-blue-600">thu mua cửa sắt cũ</span></strong><span className="text-black"> với giá tốt nhất. Chúng tôi cam kết luôn mang đến quyền lợi tốt nhất dành cho quý khách hàng chọn chúng tôi là nơi bán, thanh lý cửa sắt cũ sỉ và lẻ.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Công ty của chúng tôi cam kết rằng, quá trình thương lượng giá cả là hoàn toàn không ép giá, quá trình thảo luận và xác định mức giá thu mua cửa sắt cũ đều dựa trên khung giá quy định sẵn của công ty chúng tôi nói riêng và thị trường thu mua cửa sắt cũ nói chung. Báo giá được thông báo cụ thể, rõ ràng, minh bạch cho quý khách.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-black">Chúng tôi là đơn vị thu mua cửa sắt cũ có mạng lưới thu mua rộng lớn, có mặt ở hầu hết các khu vực, tỉnh thành trên khắp cả nước, đặc biệt là tại các quận huyện trên địa bàn Thành phố Hồ Chí Minh.</span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 3 - ĐÃ TỐI ƯU VÀ SỬA ĐƯỜNG DẪN         */}
              {/* ========================================= */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-[900px] max-w-full" style={{ aspectRatio: '900 / 450' }}>
                  <Image
                    src="/thu-mua-cua-sat-hcm.jpg"
                    alt="Thu mua cửa sắt cũ hcm"
                    fill
                    sizes="(max-width: 960px) 100vw, 900px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8 border-t pt-4">
                <h5 className="text-[18px] font-bold mb-4 uppercase"><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></h5>
                <ul className="list-none space-y-3 pl-0 text-[18px]">
                  <li>
                    <p className="m-0"><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></p>
                  </li>
                  <li>
                    <p className="m-0"><strong> Email: trinhvanviet1812@gmail.com</strong></p>
                  </li>
                  <li>
                    <p className="m-0"><strong> Hotline: 0988.257.479 - Việt Anh</strong></p>
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