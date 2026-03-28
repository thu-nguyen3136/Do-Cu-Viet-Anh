import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCuaCuonPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cửa Cuốn - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Thu Mua Đồ Cũ Việt Anh chuyên thu mua các loại cửa cuốn cũ của các công ty, nhà hàng, xí nghiệp, … với giá cả hợp lý phù hợp với giá thị trường hiện hành." />

        <meta property="og:title" content="Thu Mua Cửa Cuốn - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="Thu Mua Đồ Cũ Việt Anh chuyên thu mua các loại cửa cuốn cũ của các công ty, nhà hàng, xí nghiệp, … với giá cả hợp lý phù hợp với giá thị trường hiện hành." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-cua-cuon" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-cua-cuon" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cửa Cuốn</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4 text-justify">
                <strong><span className="text-black text-[18px]">Thu Mua Đồ Cũ Việt Anh</span></strong><span className="text-black text-[18px]"> chuyên <strong>thu mua các loại cửa cuốn cũ </strong>của các công ty, nhà hàng, xí nghiệp, … với giá cả hợp lý phù hợp với giá thị trường hiện hành.</span>
              </p>

              <h2 className="text-xl md:text-[2rem] font-bold mb-4 text-justify">
                <strong>Quy trình thu mua cửa cuốn cũ tại ĐỒ CŨ VIỆT ANH</strong>
              </h2>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">– Sau khi nhận được thông tin về cửa cuốn qua trao đổi với khách hàng, chúng tôi sẽ cho nhân viên đến khảo sát số lượng và chất lượng hàng và đưa ra giá thu mua tốt nhất, sát giá thị trường hàng ngày.</span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">– Khi đã kiểm tra hàng xong chúng tôi sẽ thỏa thuận về giá với khách hàng và chốt giá đơn hàng để tiến hành giao dịch một cách thuận lợi.</span>
              </p>

              {/* Ảnh 1 */}
              <div className="mb-4 text-center px-2 md:px-4">
                <Image
                  src="/thu-mua-cua-cuon-cu-uy-tin.png"
                  alt="Quy trình thu mua cửa cuốn cũ uy tín"
                  width={640}
                  height={480}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <h2 className="text-xl md:text-[1.75rem] font-bold mb-4 text-center">
                <span className="text-[#1f3763]"><strong><span className="text-black">Thu mua cửa cuốn cũ</span></strong></span>
              </h2>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">– Tiếp theo là tiến hành <strong>thu mua cửa cuốn cũ</strong>. Nếu khách hàng đã tiến hành tháo bỏ và vận chuyển hàng ra khỏi vị trí đến nơi thu mua thì chúng tôi sẽ tăng thêm chi phí, còn nếu muốn thì công ty sẽ có nhân viên đến thu mua tận nơi và tự tháo rời dưới sự dám sát của khách hàng.</span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">– Khách hàng có thể lựa chọn cách thanh toán bằng tiền mặt hoặc theo chuyển khoản. công ty đảm bảo sẽ thanh toán 1 lần duy nhất với số tiền đã thỏa thuận và đã chốt.</span>
              </p>

              {/* Ảnh 2 */}
              <h2 className="mb-4 text-center md:text-left md:ml-[440px] px-2 md:px-0">
                <Image
                  src="/thanh-ly-cua-cuon-hcm.jpg"
                  alt="Thanh lý cửa cuốn tp hcm"
                  width={640}
                  height={480}
                  className="mx-auto md:mx-0 h-auto max-w-full"
                />
              </h2>

              <p className="mb-4 text-justify px-2 md:px-4">
                <strong><span className="text-black text-[18px]">Thu Mua Đồ Cũ Việt Anh n</span></strong><span className="text-black text-[18px]">hận <strong>thu mua cửa cuốn cũ</strong> tại TP.HCM và các tỉnh lân cận  như: <strong>Long An, Đồng Nai, Bình Dương,Tây Ninh,...</strong></span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Tất cả các sản phẩm cửa cuốn cũ, hỏng, hay không được dùng đến mà khách hàng muốn bán chúng tôi đều có thể thu mua. Từ các loại cửa cuốn phổ biến tại Việt Nam hiện nay như: Cửa cuốn khe thoáng và cửa cuốn tấm liền. Cụ thể các Cửa Cuốn Generaldoor, Cửa Cuốn Mitadoor, Cửa Cuốn Smartdoor, Cửa Cuốn Newdoor, Cửa Cuốn Titadoor, Cửa Cuốn Boossdoor, Cửa Cuốn Vitdoor, … công ty đều thu mua với mức giá phù hợp, sát với giá thị trường hiện hành.</span>
              </p>

              <p className="mb-4 text-center px-2 md:px-4">&nbsp;</p>

              {/* Loạt ảnh thu mua */}
              <div className="space-y-4 px-2 md:px-4">
                <div className="text-center">
                  <Image src="/thu-mua-cua-cuon-hcm.jpg" alt="Thu mua cửa cuốn hcm" width={600} height={800} className="mx-auto h-auto max-w-full" />
                </div>
                <div className="text-center">
                  <Image src="/mua-cua-cuon-cu.jpg" alt="Mua cửa cuốn tấm liền cũ" width={600} height={740} className="mx-auto h-auto max-w-full" />
                </div>
                <div className="text-center">
                  <Image src="/thu-mua-cua-cuon-cu-q12.jpg" alt="Mua cửa cuốn cũ quận 12" width={600} height={429} className="mx-auto h-auto max-w-full" />
                </div>
                <div className="text-center">
                  <Image src="/Thu-mua-cua-cuon-tam-lien.jpg" alt="Thu mua cửa cuốn tấm liền" width={600} height={617} className="mx-auto h-auto max-w-full" />
                </div>
              </div>

              <p className="mb-4 text-center px-2 md:px-4">&nbsp;</p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Chúng tôi thu mua các sản phẩm của Công ty, xí nghiệp, nhà máy có nhu cầu bán theo nguyên tắc là vui vẻ, không ép giá, nhiệt tình và không quan ngại vấn đề khoảng cách.</span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Khách hàng có như cầu bán cửa cuốn hỏng, cũ, không dùng đến thì có thể liên hệ cho công ty vào bất kỳ thời gian nào trong ngày, chúng tôi luôn sẵn sàng phục vụ quá khách 24/24 giờ vào tất cả các ngày kể cả chủ nhật.</span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Nếu các bạn giới thiệu công ty về nơi bán và thu mua hàng thành công thì công ty sẽ có hoa hồng cho người giới thiệu. vì vậy, nếu các bạn biết thông tin về địa chỉ mà công ty, nhà hàng, xí nghiệp,… muốn bán cửa cuốn cũ có thể giới thiệu cho.</span>
              </p>

              <p className="mb-4 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Không chỉ thu mua cửa cuốn cũ giá thành cao, công ty còn thu mua tất cả các mặt hàng đồ cũ, đồ gỗ các loại</span>
              </p>

              <p className="mb-8 text-justify px-2 md:px-4">
                <span className="text-black text-[18px]">Với đội ngũ nhân viên nhiệt tình và dịch thu mua tận nơi tiện lợi với nguyên tắc là không ép giá, quý khách hàng có thể liên hệ đến <strong>Thu Mua Đồ Cũ </strong>Việt Anh để được mua cửa cuốn cũ với giá cao trên thị trường.</span>
              </p>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4"><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></h3>
                <ul className="list-none space-y-3 pl-0">
                  <li>
                    <h3 className="text-lg"><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></h3>
                  </li>
                  <li>
                    <h3 className="text-lg"><strong> Email: trinhvanviet1812@gmail.com</strong></h3>
                  </li>
                  <li>
                    <h3 className="text-lg"><strong> Hotline: 0988.257.479 - Việt Anh</strong></h3>
                  </li>
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