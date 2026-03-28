import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoGoCuMoiXuaVaNayPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Đồ Gỗ Cũ Mới, Xưa Và Nay - Đồ Cũ Việt Anh</title>
        <meta name="description" content="DỊCH VỤ THU MUA ĐỒ GỖ CŨ GIÁ CAO XƯA VÀ NAY cũ người mới ta, mua của người chán bán cho người cần, mua hết, chuyên thu mua mọi sản phẩm liên quan đến GỖ,CŨ, MỚI, XƯA, ĐẾN NAY." />

        <meta property="og:title" content="Thu Mua Đồ Gỗ Cũ Mới, Xưa Và Nay - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="DỊCH VỤ THU MUA ĐỒ GỖ CŨ GIÁ CAO XƯA VÀ NAY cũ người mới ta, mua của người chán bán cho người cần, mua hết, chuyên thu mua mọi sản phẩm liên quan đến GỖ,CŨ, MỚI, XƯA, ĐẾN NAY." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-do-go" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-do-go" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Đồ Gỗ Cũ Mới, Xưa Và Nay</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">Cửa hàng <strong>dịch vụ thu mua đồ cũ</strong> <strong>Việt Anh </strong>của chúng tôi nhận thu mua trọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng, trong quá trình thu mua, chúng tôi đảm bảo thu mua đồ gỗ cũ giá cao nhất thị trường.</span>
              </p>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#0000cc]">Gọi Là Có Mặt Sau 30 Phút, Uy Tín, Chuyên Nghiệp</span></strong>
              </p>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">Hotline: </span><span className="text-red-600 bg-[#f1c40f] px-1">0988.257.479</span></strong>
              </p>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">DỊCH VỤ THU MUA ĐỒ GỖ CŨ GIÁ CAO XƯA VÀ NAY </span></strong>
                <span className="text-[#333333]">cũ người mới ta, mua của người chán bán cho người cần, mua hết, chuyên thu mua mọi sản phẩm liên quan đến GỖ,CŨ, MỚI, XƯA, ĐẾN NAY, tất các sản phẩm, mọi mặt hàng GỖ tốt cũng mua, thường cũng mua, gỗ tạp cũng mua, quý khách hàng cần thay đổi mới, thay đổi không gian, thay đổi phong thủy, cho căn phòng, phòng khách,căn nha nhỏ đáng yêu của mình, để mua được những sản phẩm hiện đại mới nhất, vừa với ý muốn của mình, mà không biết đến đơn vị nào thu mua lại những món đồ cũ trong nhà mình. Hãy đến ngay với thu <strong>mua đồ gỗ cũ Việt Anh</strong>. Chúng tôi chuyên thu mua hết mọi sản phẩm gỗ đã qua sử dụng, từ GIƯỜNG TỦ,BÀN GHẾ, SALON GỖ, SẬP, TRƯỜNG KỶ, TỦ THỜ, TỦ BẾP, CỬA GỖ, BÀN ĂN,...định giá tốt nhất thị trường trong từng sản phẩm mà quý khách hàng cần thanh lý, hãy đến ngay với Dịch Vụ chúng tôi, sẽ luôn làm hài lòng mọi khách hàng, dịch vụ tốt, giá hợp lý, luôn thấu hiểu mọi nhu cầu quý khách hàng, chân thành cảm ơn </span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[960px] max-w-full" style={{ aspectRatio: '960 / 720' }}>
                  <Image
                    src="/thu-mua-ban-ghe-go-hcm.jpeg"
                    alt="Thu mua đồ gỗ cũ Việt Anh"
                    fill
                    sizes="(max-width: 960px) 100vw, 960px"
                    className="object-cover mx-auto"
                    priority // Bức ảnh banner trên cùng cần tải nhanh
                  />
                </div>
              </div>

              <p className="mb-4 text-center">
                <strong><em><span className="text-[#333333]">thu mua bàn ghế gỗ</span></em></strong>
              </p>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[624px] max-w-full" style={{ aspectRatio: '624 / 832' }}>
                  <Image
                    src="/thu-mua-ban-ghe-go-hcm.jpeg"
                    alt="Thu mua đồ gỗ cũ 2"
                    fill
                    sizes="(max-width: 640px) 100vw, 624px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-center">&nbsp;</p>

              <p className="mb-4 text-center">
                <strong><em><span className="text-[#333333]">Thu mua mọi mặt hàng tủ gỗ cũ tại TP.HCM</span></em></strong>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">- Chúng tôi nhận thu mua thanh lý đồ gỗ trọn gói tại các địa điểm như Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Quận Bình Thạnh, Quận Thủ Đức, Quận Bình Tân, Quận Tân Bình, Quận Phú Nhuận, Quận Gò Vấp và các địa điểm như Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một., trong một lần đối với thời gian nhận thanh lý sớm nhất. Qúy khách hàng đến với dịch vụ thu mua đồ gỗ cũ, thanh lý đồ gỗ sẽ được hài lòng.</span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 3 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[640px] max-w-full" style={{ aspectRatio: '640 / 480' }}>
                  <Image
                    src="/thu-mua-ban-ghe-go-huong.jpg"
                    alt="Thu mua bàn ghế gỗ hương"
                    fill
                    sizes="(max-width: 640px) 100vw, 640px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <em><span className="text-[#333333]">- Nhu cầu thanh lý đồ cũ để tiện cho việc thanh lý đồ gỗ cũ tại nhà giờ đây rất tiện lợi cho nhiều quý khách hàng bận rộn công việc không đến được cửa hàng, chúng tôi đã nghĩ ra dịch vụ mua đồ gỗ cũ tại nhà chỉ cần quý khách hàng gọi cho đơn vị chúng tôi hoặc gửi qua ZALO: </span></em>
                <strong> <span className="text-black bg-[#ffff00] px-1">0988.257.478</span> </strong>
                <em><span className="text-[#333333]"> giờ đây quý khách không phải lo ngại gì về những việc thanh lý đồ cũ Cửa hàng dịch vụ thu mua đồ gỗ cũ của chúng tôi nhận thu mua thọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng, Chuyên thu mua đồ gỗ cũ giá cao, thanh lý đồ gỗ cũ xưa và nay tại tphcm mua các loại giường, tủ, bàn ghế, vẫn ngựa, salon, ván gỗ, nhà gỗ, trường kỹ, tủ thờ đồ gỗ cẩn ốc, là đơn vị đứng đầu về lĩnh vực thu mua đồ gốm sứ xưa, lư đồng, bình sứ, đồ cổ các loại giá cao. trong quá trình thu mua, chúng tôi đảm bảo thu mua đồ gỗ cũ giá cao nhất thị trường.</span></em>
              </p>

              {/* ========================================= */}
              {/* Ảnh 4 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[501px] max-w-full" style={{ aspectRatio: '501 / 700' }}>
                  <Image
                    src="/thu-mua-chieu-ngua.jpeg"
                    alt="Thu mua đồ gỗ cũ 4"
                    fill
                    sizes="(max-width: 640px) 100vw, 501px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-center">
                thu mua chiếu ngựa
              </p>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">Quy trình thu mua và thanh toán tại ĐỒ CŨ VIỆT ANH</span></strong>
              </p>

              <ol className="list-decimal pl-5 mb-4 space-y-2 text-justify">
                <li><strong><span className="text-[#e74c3c]">Khi xác nhận yêu cầu từ khách hàng chúng tôi sẽ cử nhân viên xuống tận nơi để xem hàng.</span></strong></li>
                <li><strong><span className="text-[#e74c3c]">Dựa trên chủng loại và giá thị trường tại thời điểm chúng tôi sẽ đề xuất mức giá hợp lý.</span></strong></li>
                <li><strong><span className="text-[#e74c3c]">Nếu khách hàng đồng ý giá, hai bên tiến hành thu mua.</span></strong></li>
                <li><strong><span className="text-[#e74c3c]">Chúng tôi thanh toán tiền một lần cho khách và tự tháo lắp vận chuyển.</span></strong></li>
                <li><strong><span className="text-[#e74c3c]">Nguyên tắc thu mua uy tín, chất lượng, nhiệt tình, không ép giá và không ngại xa.</span></strong></li>
              </ol>

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">- Chúng tôi cam kết thu mua đồ cũ với giá cao không ép giá tùy theo chủng loại, tình trạng và giá thị trường tại thời điểm. Thu mua đồ gỗ cũ giá cả hợp lý nhất, n<em>hờ vậy khác hàng tiết kiệm được rất nhiều chi phí và thời gian cho việc mua đồ gỗ mới. Xuất phát từ thực tế này gần đây rất nhiều cửa hàng thu mua đồ gỗ cũ đã mới mở ra, thể thúc đẩy các hoạt động mua bán chao đổi đồ gỗ cũ diễn ra thuận lợi - nhanh chóng -  với đội ngũ nhân viên của công ty chúng tôi chuyên thu mua đồ gỗ cũ để phục vụ nhu cầu khách hàng 24/7 trong thời gian qua. chúng tôi phủ sóng mạng lưới thu mua rộng lớn, mua lại tất cả các mặt hàng đồ gỗ cũ, mua tất cả các thỉnh thành trong cả nước.</em></span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 5 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[700px] max-w-full" style={{ aspectRatio: '700 / 500' }}>
                  <Image
                    src="/thanh-ly-ban-ghe-go.jpeg"
                    alt="Thu mua đồ gỗ cũ 5"
                    fill
                    sizes="(max-width: 768px) 100vw, 700px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">Cam kết thu mua đồ cũ giá cao nhất tại TP HCM</span></strong>
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2 text-justify">
                <li><span className="text-[#e74c3c]">Chúng tôi cam kết giá thu mua đồ cũ giá cao hơn giá thị trường.</span></li>
                <li><span className="text-[#e74c3c]">Thanh toán 100 % trọn gói 1 lần.</span></li>
                <li><span className="text-[#e74c3c]">Không tính phí vận chuyển.</span></li>
                <li><span className="text-[#e74c3c]">Nhận <u>thu mua đồ cũ giá cao</u> ở tất cả các quận huyện trong Tp HCM.</span></li>
                <li><span className="text-[#e74c3c]">Thời gian thu mua 24/24 và tất cả ngày trong tuần.</span></li>
              </ul>

              <p className="mb-4 text-center">&nbsp;</p>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8 border-t pt-4">
                <h5 className="text-[20px] md:text-[24px] font-bold mb-4 uppercase text-[#2c3e50]"><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></h5>
                <ul className="list-none space-y-3 pl-0 text-[18px] md:text-[20px]">
                  <li><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></li>
                  <li><strong> Email: trinhvanviet1812@gmail.com</strong></li>
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