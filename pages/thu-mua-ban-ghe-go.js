import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ThuMuaDoGoCuPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua bàn Ghế Gỗ Cũ Tại Nhà TPHCM - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Cửa hàng dịch vụ thu mua bàn ghê gỗ cũ Việt Anh  của chúng tôi nhận thu mua trọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng." />

        <meta property="og:title" content="Thu Mua bàn Ghế Gỗ Cũ Tại Nhà TPHCM - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="Cửa hàng dịch vụ thu mua bàn ghê gỗ cũ Việt Anh  của chúng tôi nhận thu mua trọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-ban-ghe-go" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-ban-ghe-go" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Bàn Ghế Gỗ Cũ Tại Nhà TPHCM</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">Nếu bạn đang có nhu cầu thanh lý bàn ghế gỗ cũ, dù là những món đồ nhỏ như đồ gỗ mỹ nghệ hay cồng kềnh như giường tủ gỗ, chúng tôi đều sẵn lòng đến tận nơi để giao dịch.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">Cửa hàng <strong>dịch vụ thu mua bàn ghế gỗ cũ Việt Anh  </strong>của chúng tôi nhận thu mua trọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng, trong quá trình thu mua, chúng tôi đảm bảo thu mua đồ gỗ cũ giá cao nhất thị trường.</span>
              </p>

              <p className="mb-4">
                <span className="text-[#333333]">Liên Hệ:</span><strong><span className="text-[#e74c3c] bg-yellow-300 px-1"> 0988.257.479</span></strong>
              </p>

              {/* Ảnh 1 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thu-mua-do-go-tan-noi.png"
                  alt="Thu mua đồ gỗ cũ tận nơi"
                  width={624}
                  height={465}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <p className="mb-4 text-justify">
                <strong><span className="text-[#333333]">DỊCH VỤ THU MUA ĐỒ GỖ CŨ GIÁ CAO XƯA VÀ NAY </span></strong>
                <span className="text-[#333333]">cũ người mới ta, mua của người chán bán cho người cần, mua hết, chuyên thu mua mọi sản phẩm liên quan đến GỖ,CŨ, MỚI, XƯA, ĐẾN NAY, tất các sản phẩm, mọi mặt hàng GỖ tốt cũng mua, thường cũng mua, gỗ tạp cũng mua, quý khách hàng cần thay đổi mới, thay đổi không gian, thay đổi phong thủy, cho căn phòng, phòng khách,căn nha nhỏ đáng yêu của mình, để mua được những sản phẩm hiện đại mới nhất, vừa với ý muốn của mình, mà không biết đến đơn vị nào thu mua lại những món bàn ghế gỗ cũ trong nhà mình. Hãy đến ngay với <strong>thu mua đồ gỗ cũ Việt Anh</strong>. Chúng tôi chuyên thu mua hết mọi sản phẩm gỗ đã qua sử dụng, từ GIƯỜNG TỦ,BÀN GHẾ, SALON GỖ, SẬP, TRƯỜNG KỶ, TỦ THỜ, TỦ BẾP, CỬA GỖ, BÀN ĂN,...định giá tốt nhất thị trường trong từng sản phẩm mà quý khách hàng cần thanh lý, hãy đến ngay với Dịch Vụ chúng tôi, sẽ luôn làm hài lòng mọi khách hàng, dịch vụ tốt, giá hợp lý, luôn thấu hiểu mọi nhu cầu quý khách hàng, chân thành cảm ơn </span>
              </p>

              <p className="mb-4 text-center">&nbsp;</p>

              {/* Ảnh 2 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thanh-ly-do-go.png"
                  alt="Thu mua đồ gỗ cũ "
                  width={600}
                  height={338}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <p className="mb-4 text-justify">
                <span className="text-[#333333]">- Chúng tôi nhận thu mua thanh lý đồ gỗ trọn gói tại các địa điểm như Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Quận Bình Thạnh, Quận Thủ Đức, Quận Bình Tân, Quận Tân Bình, Quận Phú Nhuận, Quận Gò Vấp và các địa điểm như Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một., trong một lần đối với thời gian nhận thanh lý sớm nhất. Qúy khách hàng đến với dịch vụ thu mua đồ gỗ cũ, thanh lý đồ gỗ sẽ được hài lòng.</span>
              </p>

              <p className="mb-4 text-justify">
                <strong><em><span className="text-[#333333]">- Nhu cầu thanh lý bàn ghế gỗ cũ để tiện cho việc thanh lý đồ gỗ cũ tại nhà giờ đây rất tiện lợi cho nhiều quý khách hàng bận rộn công việc không đến được cửa hàng, chúng tôi đã nghĩ ra dịch vụ mua đồ gỗ cũ tại nhà chỉ cần quý khách hàng gọi cho đơn vị chúng tôi hoặc gửi qua ZALO:</span><span className="text-[#e74c3c]">0988.257.479</span><span className="text-[#333333]"> giờ đây quý khách không phải lo ngại gì về những việc thanh lý bàn ghế gỗ Cửa hàng dịch vụ thu mua đồ gỗ cũ của chúng tôi nhận thu mua thọn gói cho tất cả các sản phẩm đồ gỗ cũ đã qua sử dụng, Chuyên thu mua đồ gỗ cũ giá cao, thanh lý đồ gỗ cũ xưa và nay tại tphcm mua các loại giường, tủ, bàn ghế, vẫn ngựa, salon, ván gỗ, nhà gỗ, trường kỹ, tủ thờ đồ gỗ cẩn ốc, là đơn vị đứng đầu về lĩnh vực thu mua đồ gốm sứ xưa, lư đồng, bình sứ, đồ cổ các loại giá cao. trong quá trình thu mua, chúng tôi đảm bảo thu mua đồ gỗ cũ giá cao nhất thị trường.</span></em> </strong>
              </p>

              {/* Ảnh 3 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thu-mua-do-go-hcm.jpeg"
                  alt="Thu mua đồ gỗ cũ tp hcm"
                  width={600}
                  height={800}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <p className="mb-4">
                <strong><span className="text-[#333333]">BẢNG GIÁ THAM KHẢO THU MUA ĐỒ GỖ CŨ CÁC LOẠI .</span></strong>
              </p>

              {/* Bảng giá (Table) */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 text-left bg-white">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><a href="#" className="text-[#0563c1] underline">NHỮNG MẶT HÀNG ĐỒ GỖ CŨ</a></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><a href="#" className="text-[#0563c1] underline">BẢNG GIÁ THU MUA ĐỒ GỖ CŨ</a></strong></p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><span className="text-[#333333]">1. Sập + Ván ngựa </span></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><span className="text-[#333333]">từ 15.000.000đ - 200.000.000đ</span></strong></p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><span className="text-[#333333]">2. Bàn ghế salon + Bàn ăn  </span></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><span className="text-[#333333]">từ 10.000.000đ - 100.000.000đ </span></strong></p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><span className="text-[#333333]">3. Các loại mặt hàng tủ + Giường</span></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><span className="text-[#333333]">từ 5.000.000đ - 50.000.000đ</span></strong></p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><span className="text-[#333333]">4. Tượng gỗ các loại</span></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><span className="text-[#333333]">từ 2.000.000đ - 20.000.000đ</span></strong></p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-3 border-r border-gray-300">
                        <p className="m-0"><strong><span className="text-[#333333]">5. Thu mua tất cả mặt hàng đồ gỗ</span></strong></p>
                      </td>
                      <td className="p-3">
                        <p className="m-0"><strong><span className="text-[#333333]">1.000.000.000đ</span></strong></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-4 text-justify">
                <span className="text-black">- Chúng tôi cam kết thu mua bàn ghế gỗ cũ với giá cao không ép giá tùy theo chủng loại, tình trạng và giá thị trường tại thời điểm. Thu mua đồ gỗ cũ giá cả hợp lý nhất, n<em>hờ vậy khác hàng tiết kiệm được rất nhiều chi phí và thời gian cho việc mua đồ gỗ mới. Xuất phát từ thực tế này gần đây rất nhiều cửa hàng thu mua đồ gỗ cũ đã mới mở ra, thể thúc đẩy các hoạt động mua bán chao đổi đồ gỗ cũ diễn ra thuận lợi - nhanh chóng -  với đội ngũ nhân viên của công ty chúng tôi chuyên thu mua đồ gỗ cũ để phục vụ nhu cầu khách hàng 24/7 trong thời gian qua. chúng tôi phủ sóng mạng lưới thu mua rộng lớn, mua lại tất cả các mặt hàng đồ gỗ cũ, mua tất cả các thỉnh thành trong cả nước.</em></span>
              </p>

              {/* Ảnh 4 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thu-mua-va-van-chuyen-do-go.jpeg"
                  alt="Thu mua đồ gỗ cũ và vận chuyển"
                  width={900}
                  height={1200}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <p className="mb-4">
                <strong><span className="text-black">Cam kết thu mua bàn ghế gỗ cũ giá cao nhất tại TP HCM</span></strong>
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2 text-justify">
                <li><span className="text-black">Chúng tôi cam kết giá thu mua bàn ghế gỗ cũ giá cao hơn giá thị trường.</span></li>
                <li><span className="text-black">Thanh toán 100 % trọn gói 1 lần.</span></li>
                <li><span className="text-black">Không tính phí vận chuyển.</span></li>
                <li><span className="text-black">Nhận <u>thu mua bàn ghế gỗ cũ giá cao</u> ở tất cả các quận huyện trong Tp HCM.</span></li>
                <li><span className="text-black">Thời gian thu mua 24/24 và tất cả ngày trong tuần.</span></li>
              </ul>

              {/* Ảnh 5 */}
              <div className="mb-6 text-center">
                <Image
                  src="/thanh-ly-do-go-q12.png"
                  alt="Thu mua đồ gỗ cũ quận 12"
                  width={600}
                  height={450}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8">
                <h5 className="text-[18px] font-bold mb-4 uppercase"><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></h5>
                <ul className="list-none space-y-3 pl-0 text-[18px]">
                  <li><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></li>
                  <li><strong> Email: trinhvanviet1812@gmail.com</strong></li>
                  <li><strong> Hotline: 0988.257.479 - Việt Anh</strong></li>
                </ul>
              </div>

            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}