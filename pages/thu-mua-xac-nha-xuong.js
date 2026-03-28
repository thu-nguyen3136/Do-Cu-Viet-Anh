import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE CỦA NEXT.JS
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaXacNhaXuongPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Xác Nhà Xưởng - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Công ty Chúng tôi là đơn vị chuyên thu mua xác nhà cũ, xác nhà kho xưởng tại TPHCM giá tốt, Bạn đang cần xây dựng lại nhà ở, nhưng tài chính còn hạn chế." />

        <meta property="og:title" content="Thu Mua Xác Nhà Xưởng - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="Công ty Chúng tôi là đơn vị chuyên thu mua xác nhà cũ, xác nhà kho xưởng tại TPHCM giá tốt, Bạn đang cần xây dựng lại nhà ở, nhưng tài chính còn hạn chế." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-xac-nha-xuong" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-xac-nha-xuong" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Xác Nhà Xưởng</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[20px] leading-relaxed">

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Dịch vụ thu mua xác nhà xưởng - thanh lý xác nhà kho xưởng trọn gói giá cao khu vực HCM và các tỉnh lân cận</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Công ty Chúng tôi là đơn vị chuyên thu mua xác nhà cũ, xác nhà kho xưởng tại TPHCM giá tốt, Bạn đang cần xây dựng lại nhà ở, nhưng tài chính còn hạn chế. Bạn muốn bán xác nhà để trang trải cho ngôi nhà mới của mình. Hãy nhấc máy và liên hệ ngay đến hotline: <strong>0988.257.479 - Việt Anh để chúng tôi có mặt tận nơi, khảo sát và báo gía ưu đãi. nhé.</strong></span>
              </p>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ SỬA ĐƯỜNG DẪN ẢNH               */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                {/* Div bọc ngoài để ép kích thước responsive an toàn */}
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 533' }}>
                  <Image
                    src="/thu-mua-xac-nha-xuong.jpg" // ĐÃ SỬA: Thêm / ở đầu, nằm ngay trong public
                    alt="Thu mua xác nhà xưởng"
                    fill // Điền đầy div bọc ngoài
                    sizes="(max-width: 640px) 100vw, 600px" // Cấp ảnh vừa đủ cho mobile/desktop
                    className="object-cover mx-auto" // Cắt ảnh thông minh, không bị méo
                    priority // Ưu tiên load ảnh này vì nó nằm ở đầu trang
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Hoạt động nhiều năm trong lĩnh vực thu mua xác nhà cũ tại TP HCM. Công ty thu mua xác nhà cũ, thu mua xác nhà kho xưởng Việt Anh đã và đang hợp tác với nhiều khách hàng,chuyên dịch vụ mua xác nhà cũ giá cao. Thu mua xác nhà cấp 4, mua xác nhà xưởng, mua xác các công trình xây dựng.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Thu Mua Xác Nhà Giá Cao</span>
              </p>

              <ul className="list-disc pl-5 mb-4 space-y-2 text-justify">
                <li><span className="text-[#000000]">Thu mua sắt vụn, phế liệu, xà gồ, mái tôn, cửa nhôm, cửa sắt, mua xà bần……</span></li>
                <li><span className="text-[#000000]">Chuyên đập phá, tháo dỡ nhà cấp 4, phá dỡ nhà xưởng, thu dọn xà bần sạch sẽ trả lại mặt bằng cho chủ nhà yên tâm xây nhà mới.</span></li>
                <li><span className="text-[#000000]">Nhận đào móng, ép cọc bê tông, khoan nhồi uy tín, giá rẻ tại TP HCM.</span></li>
                <li><span className="text-[#000000]">Tiết kiệm chi phí dọn dẹp mặt bằng, Ngoài ra quý khách còn có 1 khoản tiền để trang trãi dự án sau của mình.</span></li>
                <li><span className="text-[#000000]">Giá tiền dịch vụ mua xác nhà cũ ở Quận 1 TPHCM của chúng tôi không cao. Phù hợp với tất cả các hộ gia đình.</span></li>
                <li><span className="text-[#000000]">Dịch vụ mua xác nhà cũ của chúng tôi có tất cả các trang thiết bị, xe chuyên dùng và nhân viên lành nghề. Chúng tôi không liên kết hay hợp tác với 1 bên dịch vụ nào. Nên giá cả rất hợp lý.</span></li>
                <li><span className="text-[#000000]">Dịch vụ mua xác nhà cũ của chúng tôi hoạt động khắp TPHCM và các tỉnh lân cận nên quý khách hàng yên tâm về dịch vụ di chuyển lâu.</span></li>
                <li><span className="text-[#000000]">Tiết kiệm được chi phí xây nhà mới nhờ có được khoản thu nhập từ bán xác nhà cấp</span></li>
                <li><span className="text-[#000000]">Không phải lo thu dọn – phá dỡ nhà cũ</span></li>
                <li><span className="text-[#000000]">Đảm bảo an toàn cho chủ nhà, cộng đồng xung quanh</span></li>
                <li><span className="text-[#000000]">Thu mua đồ cũ</span></li>
              </ul>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ SỬA ĐƯỜNG DẪN ẢNH               */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 338' }}>
                  <Image
                    src="/thu-mua-xac-nha-xuong-cu-hcm.jpeg" // ĐÃ SỬA: Thêm / ở đầu, nằm ngay trong public
                    alt="Thu mua xác nhà xưởng ở tp hcm"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Mua Xác Nhà Cũ TP.HCM</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Khu vực hoạt động dịch vụ của chúng tôi.</span>
              </p>

              <p className="mb-4 text-justify">
                <span className="text-[#000000]">Chân thành cảm ơn quý khách đã tin tưởng sử dụng dịch vụ mua xác nhà cũ của chúng tôi trong thời gian quá. Nhằm nâng cao chất lượng hoạt động lĩnh vực dịch vụ mua xác nhà cũ. Quý khách cần thắc mắc về dịch vụ vui lòng liên hệ hotline của chúng tôi để giải đáp. Xin chân thành cảm ơn.</span>
              </p>

              <p className="mb-4 text-center">&nbsp;</p>

              <p className="mb-4 text-justify">
                <strong>CAM KẾT KHI SỬ DỤNG DỊCH VỤ TẠI THU MUA XÁC NHÀ XƯỞNG VIỆT ANH</strong>
              </p>

              <ol className="list-decimal pl-5 mb-4 space-y-2 text-justify">
                <li>Thu mua trọn gói chủ nhà không cần đụng tay vào.</li>
                <li>Giá thu mua nhà cũ cao nhất thị trường.</li>
                <li>Thu mua nhiệt tình dù nhà lớn hay nhỏ.</li>
                <li>Sau khi thu mua xong dọn dẹp sạch sẽ mặt bằng.</li>
              </ol>

              {/* ========================================= */}
              {/* Ảnh 3 - ĐÃ SỬA ĐƯỜNG DẪN ẢNH               */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 450' }}>
                  <Image
                    src="/thu-mua-xac-nha-xuong-uy-tin.jpeg" // ĐÃ SỬA: Thêm / ở đầu, nằm ngay trong public
                    alt="Thu mua xác nhà xưởng uy tín"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                <strong> BẢNG GIÁ THU MUA XÁC NHÀ CŨ tại Việt Anh</strong>
              </p>

              <p className="mb-4 text-justify">
                Tùy thuộc vào mỗi công trình mà xác nhà được định giá khác nhau. Do vậy ít hiều sẽ tận thu được khi phá dỡ công trình điều này dẫn tới chi phí phá dỡ công trình ít hoặc phá dỡ không mất tiền hoặc được thêm tiền vì xác nhà có nhiều phế liệu có giá trị.
              </p>

              <p className="mb-4 text-center">&nbsp;</p>
              <p className="mb-4 text-center">&nbsp;</p>

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