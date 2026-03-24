import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCuaCuPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cửa Cũ - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh nhận thu mua cửa cũ và thanh lý cửa cũ, cửa đã qua sử dụng giá cao tại TP.HCM." />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cửa Cũ</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">
              <p className="mb-4">
                <span className="text-[#000099]"><strong>Thu Mua Đồ Cũ Việt Anh</strong></span> nhận <strong>thu mua cửa cũ</strong> và <strong>thanh lý cửa cũ</strong>, cửa đã qua sử dụng giá cao tại TP.HCM. Nếu bạn đang có nhu cầu muốn bán hay <strong>thanh lý cửa cũ</strong> hãy liên hệ ngay cho chúng tôi để được chốt giá cao nhất, vận chuyển tại nhà, đội ngũ nhân viên uy tín - chuyên nghiệp.
              </p>

              <p className="mb-4">
                Chúng tôi đảm bảo đội ngũ nhân viên có đầy đủ kinh nghiệm, tháo lắp đúng kỹ thuật, đảm bảo giữ lại giá trị đồ cũ cao nhất cho khách hàng. <strong>Đồ Cũ Việt Anh</strong> nhận <strong>thu mua cửa cũ giá cao</strong> nhất trên thị trường đồ cũ Sài Gòn, làm việc nhanh chóng, không kì kèo giá cả, chốt là đưa tiền ngay.
              </p>

              <p className="text-center mb-4">
                <strong>LIÊN HỆ HOTLINE: <span className="bg-yellow-300 text-red-600 px-1">0988.257.479</span></strong>
              </p>

              {/* Ảnh 1 */}
              <div className="text-center mb-4">
                <Image
                  src="/thu-mua-cua-cu-hcm.jpg"
                  alt="Thu mua cửa cũ TPHCM"
                  width={500}
                  height={444}
                  className="mx-auto h-auto max-w-full object-cover"
                />
              </div>

              <p className="text-center mb-4"><strong>Thu mua cửa gỗ cũ giá cao</strong></p>
              <p className="text-center mb-4">&nbsp;</p>

              <p className="mb-4"><strong><span className="text-red-600">Thu Mua Cửa Cũ Tại TP.HCM</span></strong></p>
              <p className="mb-4"><strong>1. Tìm hiểu về dịch vụ thu mua cửa cũ</strong></p>

              <p className="mb-4 text-justify">
                <strong>Thu mua cửa cũ</strong> là dịch vụ mua lại tất cả các loại cửa từ những loại gỗ hay chất liệu khác nhau như: gỗ xoan, gỗ lim, gỗ hương, cửa sắt, cửa nhôm, cửa cuốn, cửa nhựa.... Chúng tôi cũng nhận <strong>thu mua bàn ghế cũ</strong>, <strong>mua cầu thang cũ</strong>, <strong>mua xác nhà cũ</strong>,... và tất cả những đồ dùng gia đình, nhà hàng hay quán ăn nếu có thể tái sử dụng chúng tôi đều thu mua lại với giá cao, giúp khách hàng tiết kiệm thêm 1 phần chi phí khi mua lại đồ dùng mới.
              </p>

              {/* Ảnh 2 */}
              <div className="text-center mb-4">
                <Image
                  src="/thu-mua-cua-nhom-gia-cao.jpg"
                  alt="Thu Mua Cửa Nhôm Kính Cũ"
                  width={487}
                  height={350}
                  className="mx-auto h-auto max-w-full"
                />
              </div>
              <p className="text-center mb-4"><strong>Thu Mua Cửa Nhôm Kính Cũ</strong></p>

              <p className="mb-4"><strong>2. Danh Sách Các Loại Cửa Cũ Nhận Thu Mua Tận Nơi:</strong></p>

              <div className="mb-4 space-y-2">
                <p><strong><em>- Mua cửa sắt Cũ</em></strong></p>
                <p><strong><em>- Mua Cửa Cuốn Cũ</em></strong></p>
                <p><strong><em>- Mua cửa gỗ cũ</em></strong></p>
                <p><strong><em>- mua cửa nhôm cũ</em></strong></p>
                <p><strong><em>- Mua cửa nhựa lõi thép</em></strong></p>
                <p><strong><em>- Thu mua tôn cũ</em></strong></p>
                <p><strong><em>- mua cầu thang cũ</em></strong></p>
                <p><strong><em>- mua xác nhà cũ</em></strong></p>
                <p><strong><em>- mua bàn ghế cũ</em></strong></p>
                <p><strong><em>- mua bồn cầu cũ</em></strong></p>
                <p><strong><em>- thu mua bồn cầu</em></strong></p>
              </div>

              <p className="mb-4"><strong>Nhận thu mua đồ cũ giá cao trên thị trường</strong></p>

              {/* Ảnh 3 */}
              <div className="text-center mb-4">
                <Image
                  src="/thu-mua-cua-cuon-cu-uy-tin.jpg"
                  alt="thu mua cửa cuốn cũ"
                  width={600}
                  height={450}
                  className="mx-auto h-auto max-w-full"
                />
              </div>
              <p className="text-center mb-4"><strong>thu mua cửa cuốn cũ</strong></p>

              <p className="mb-4 text-justify">
                <strong>Đồ Cũ Việt Anh</strong> chuyên nhận <strong>thu mua đồ cũ</strong> và <strong>thanh lý đồ cũ</strong>, đồ đã qua sử dụng, nội thất gia đình, <strong>thu mua đồ cũ công ty</strong>, bàn ghế nhà hàng, quán ăn, quán bar, salon,... Chúng tôi sẵn sàng nhận cải tiến và làm mới lại đồ dùng cho khách nếu đồ vẫn còn mới hoặc vừa mới sử dụng để tiết kiệm được chi phí cho khách hàng. Tuy nhiên trên thị trường hiện nay đang có rất nhiều đơn vị thu mua và thanh lý đồ cũ nên bạn hãy lựa chọn và cân nhắc để tìm ra cho mình 1 đơn vị làm việc uy tín, trách nhiệm và định giá cao trên thị trường nhé.
              </p>

              {/* Ảnh 4 */}
              <div className="text-center mb-4">
                <Image
                  src="/thu-mua-cua-sat-gia-cao.png"
                  alt="Thu Mua Các Dòng Cửa Sắt Cũ"
                  width={486}
                  height={350}
                  className="mx-auto h-auto max-w-full"
                />
              </div>
              <p className="text-center mb-4"><strong>Thu Mua Các Dòng Cửa Sắt Cũ</strong></p>

              {/* Ảnh 5 */}
              <div className="text-center mb-4">
                <Image
                  src="/thu-mua-cua-nhua-loi-thep.png"
                  alt="Thu Mua Cửa Nhựa Lõi Thép"
                  width={500}
                  height={350}
                  className="mx-auto h-auto max-w-full"
                />
              </div>
              <p className="text-center mb-4"><strong>Thu Mua Cửa Nhựa Lõi Thép</strong></p>

              <p className="mb-4"><strong>3. Quy Trình Thu Mua Đồ Cũ Tại Đồ Cũ Việt Anh</strong></p>

              <p className="mb-4">Quý khách lên Google gõ từ khóa: <strong>Đồ Cũ Việt Anh</strong> và Click vào website để liên hệ với chúng tôi hoặc yêu cầu chúng tôi gọi lại.</p>
              <p className="mb-4">Quý khách kết bạn zalo với sđt: <strong><span className="bg-yellow-300 text-red-600 px-1">0988.257.479</span></strong> và gửi hình đồ cũ mà quý khách cần thanh lý sau đó công ty sẽ báo giá trực tiếp với những mặt hàng số lượng ít, còn không chúng tôi sẽ đến tận nơi để báo giá.</p>
              <p className="mb-4">Quý khách đồng ý với giá công ty đưa ra thì chúng tôi sẽ đưa xe xuống và bốc về trong ngày, nhận tiền ngay khi chốt.</p>

              <p className="mb-4 text-justify">
                Dịch Vụ <strong>Thu Mua Đồ Cũ Việt Anh</strong> nhận <strong>thu mua cửa cũ</strong> tất cả các quận huyện từ quận 1- quận 12, quận Gò Vấp, Quận Tân Bình, Quận Tân Phú, Quận Bình Thạnh, Thủ Đức, Phú Nhuận, Bình Tân, Bình Chánh, Hóc Môn,..
              </p>

              <p className="mb-6">
                <strong>Chúng Tôi tự hào là đơn vị thu mua đồ cũ giá cao trên thị trường, không ngại đường xa, không lo về giá, uy tín làm hàng đầu!!!!</strong>
              </p>

              {/* Footer Thông Tin Liêm Hệ */}
              <div className="mb-6">
                <p className="mb-4 text-xl"><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></p>
                <ul className="list-none space-y-3">
                  <li><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 2: 197 Dương Quảng Hàm, Phường 5, Quận Gò Vấp, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 3: 288 Kha Vạn Cân, Hiệp Bình Chánh, Quận Thủ Đức, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 4: 110 Lê Quang Định, Phường 14, Quận Bình Thạnh, TP.HCM</strong></li>
                  <li><strong> Địa Chỉ 5: 218 Nguyễn Thị Thập, Phường Tân Phong, Quận 7, TP.HCM</strong></li>
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