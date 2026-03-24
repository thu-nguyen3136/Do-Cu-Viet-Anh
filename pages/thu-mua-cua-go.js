import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCuaGoPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cửa Gỗ - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh là đơn vị chuyên thu mua cửa gỗ cũ các loại giá cao nhất tphcm và các tỉnh lân cận" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cửa Gỗ</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4">
                <strong>Thu mua các loại cửa gỗ cũ giá cao</strong>
              </p>

              <p className="mb-4 text-justify">
                <strong>Đồ Cũ Việt Anh</strong> là đơn vị chuyên thu mua cửa gỗ cũ các loại giá cao nhất TP.HCM và các tỉnh lân cận. Cửa gỗ là một trong những mặt hàng luôn chiếm được cảm tình đông đảo đối tượng khách hàng sử dụng. Quan trọng nhất vẫn là mức giá cửa gỗ khá cao nên hầu hết khách hàng vẫn còn e ngại và lựa chọn các sản phẩm cùng công năng rẻ tiền hơn.
              </p>

              <p className="mb-6 bg-yellow-100 inline-block px-4 py-2 rounded-lg">
                <span className="font-bold text-red-600">Hotline tư vấn: 0988.257.479</span>
              </p>

              {/* Ảnh 1 - ĐÃ TỐI ƯU */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-[899px] max-w-full" style={{ aspectRatio: '899 / 600' }}>
                  <Image
                    src="/thanh-ly-cua-go.jpg"
                    alt="Cửa gỗ cũ thanh lý"
                    fill
                    sizes="(max-width: 900px) 100vw, 899px"
                    className="object-cover rounded-md shadow-sm mx-auto"
                    priority
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <strong>Thu Mua Đồ Cũ Việt Anh</strong> chuyên thu mua các mặt hàng cửa gỗ cũ đã qua sử dụng, hoạt động trên 15 năm tại TP.HCM chuyên thu mua đồ gỗ cũ tại TP.HCM với giá cao nhất thị trường. <br />
                Đặc biệt, <strong>Cửa gỗ căm xe cũ</strong> luôn được người dân ưa chuộng nên chúng tôi vẫn luôn thu mua các loại cửa gỗ này với giá cực tốt. Gỗ căm xe rất thích hợp đóng cửa thông phòng, cửa chính hay cửa sổ vì có độ bền cao, màu sắc sang trọng và không bao giờ lỗi thời.
              </p>

              {/* Ảnh 2 - ĐÃ TỐI ƯU */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-[800px] max-w-full" style={{ aspectRatio: '800 / 533' }}>
                  <Image
                    src="/thanh-ly-cua-go-tphcm.jpg"
                    alt="Cửa gỗ cũ tphcm"
                    fill
                    sizes="(max-width: 800px) 100vw, 800px"
                    className="object-cover rounded-md shadow-sm mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                Chúng tôi nhận <strong>THU MUA CỬA GỖ CŨ TP.HCM</strong> bao gồm: bàn ghế gỗ, sập gụ tủ chè, tủ thờ, kệ tivi gỗ, tủ quần áo, thanh lý cửa gỗ cũ… Thu mua tất cả đồ gỗ các loại chất liệu gỗ căm xe, nu, gõ, lim, gụ, hương, cẩm lai, trắc, xưa…. Khi bạn cần bán hãy liên hệ với chúng tôi cam kết giá tốt nhất thị trường.
              </p>

              <p className="mb-4 text-justify italic border-l-4 border-blue-600 pl-4 bg-gray-50 py-2">
                Có phần trăm hoa hồng hấp dẫn cho cá nhân hoặc công ty giới thiệu khách hàng cần thanh lý cửa gỗ cũ đến với Việt Anh.
              </p>

              {/* Ảnh 3 - ĐÃ TỐI ƯU */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 400' }}>
                  <Image
                    src="/thu-mua-cu-go-hcm.jpg"
                    alt="Dịch vụ thu mua cửa gỗ"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover rounded-md shadow-sm mx-auto"
                  />
                </div>
              </div>

              <div className="bg-[#f8f9fa] p-6 rounded-lg mb-8 shadow-inner">
                <h3 className="text-xl font-bold mb-4 text-[#000099]">DANH MỤC DỊCH VỤ THU MUA:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 font-medium uppercase text-sm">
                  <p>• Thu mua cửa gỗ cũ</p>
                  <p>• Thu mua cửa sắt cũ</p>
                  <p>• Thu mua bồn cầu cũ</p>
                  <p>• Thu mua cửa nhôm cũ / Xingfa</p>
                  <p>• Thu mua cửa cuốn cũ</p>
                  <p>• Thu mua cửa nhựa lõi thép</p>
                  <p>• Thu mua đồ gỗ cũ gia đình</p>
                  <p>• Thu mua thiết bị vệ sinh cũ</p>
                  <p>• Thu mua cửa cũ</p>
                  <p>• Thanh lý bồn cầu cũ</p>
                  <p>• Thu mua cửa sắt cũ Q2</p>
                  <p>• Thu mua cửa sắt cũ Q12</p>
                </div>
              </div>

              {/* Các ảnh liên tiếp - ĐÃ TỐI ƯU */}
              <div className="space-y-6 flex flex-col items-center">
                {[
                  { src: "/thu-mua-cua-go-uy-tin.jpg", alt: "Thu mua cửa gỗ uy tín" },
                  { src: "/thanh-ly-cua-go-gia-cao.jpg", alt: "Thanh lý cửa gỗ giá cao" },
                  { src: "/thanh-ly-cua-go-uy-tin.jpg", alt: "Thanh lý cửa gỗ chất lượng" }
                ].map((img, index) => (
                  <div key={index} className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 400' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover rounded shadow-sm"
                    />
                  </div>
                ))}
              </div>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mt-12 mb-6 border-t pt-6 bg-blue-50 p-6 rounded-lg">
                <h5 className="text-xl font-bold mb-4 uppercase text-[#2c3e50]">
                  <strong>THU MUA ĐỒ CŨ VIỆT ANH</strong>
                </h5>
                <ul className="list-none space-y-3 pl-0 text-[16px] md:text-[18px]">
                  <li><strong>📍 Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></li>
                  <li><strong>✉️ Email: trinhvanviet1812@gmail.com</strong></li>
                  <li><strong>📞 Hotline: 0988.257.479 - Việt Anh</strong></li>
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