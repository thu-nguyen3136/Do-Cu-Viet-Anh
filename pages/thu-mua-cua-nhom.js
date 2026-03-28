import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCuaNhomPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cửa Nhôm - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Thu Mua Đồ Cũ Việt Anh chuyên nhận thu mua các dòng của nhôm cũ đã qua sử dụng như: cửa nhôm kính, cửa nhôm xingfa giá cao tại khu vực TP.HCM." />

        <meta property="og:title" content="Thu Mua Cửa Nhôm - Đồ Cũ Việt Anh" />
        <meta property="og:description" content="Thu Mua Đồ Cũ Việt Anh chuyên nhận thu mua các dòng của nhôm cũ đã qua sử dụng như: cửa nhôm kính, cửa nhôm xingfa giá cao tại khu vực TP.HCM." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thanhlycuacutphcm.com/thu-mua-cua-nhom" />
        <link rel="canonical" href="https://thanhlycuacutphcm.com/thu-mua-cua-nhom" />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h1 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cửa Nhôm</h1>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[20px] leading-relaxed">

              <p className="mb-4 text-justify">
                Thu Mua Đồ Cũ Việt Anh chuyên nhận thu mua các dòng cửa nhôm cũ đã qua sử dụng như: cửa nhôm kính, cửa nhôm xingfa giá cao tại khu vực TP.HCM. Dịch vụ thu mua uy tín, chuyên nghiệp, giá cả cạnh tranh trên thị trường.
              </p>

              {/* Ảnh 1 - ĐÃ TỐI ƯU */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[475px] max-w-full" style={{ aspectRatio: '475 / 350' }}>
                  <Image
                    src="/thu-mua-cua-nhom-uy-tin.png"
                    alt="Thu Mua Cửa Nhôm"
                    fill
                    sizes="(max-width: 640px) 100vw, 475px"
                    className="object-cover mx-auto"
                    priority
                  />
                </div>
              </div>

              <p className="mb-4 text-[#111111] font-semibold">
                Đơn vị chúng tôi chuyên thu mua đồ nhôm kính cũ phục vụ nhu cầu khách hàng:
              </p>

              <div className="mb-6 text-[#222222] space-y-1 ml-4">
                <p>– Chuyên nhận mua thanh lý các loại tủ nhôm kính.</p>
                <p>– Mua thanh lý nhôm kính cũ giá cao.</p>
                <p>– Mua thanh lý toàn bộ cửa nhôm kính.</p>
                <p>– Mua thanh lý các loại tủ nhôm kính cũ.</p>
                <p>– Mua thanh lý các loại khung nhôm cũ của cửa kính.</p>
                <p>– Mua thanh lý lại các loại tủ nhôm kính mỹ phẩm.</p>
                <p>– Mua thanh lý giá cao các loại tủ nhôm kính, mua thanh lý các vách kính, vách nhôm kính.</p>
              </div>

              {/* Ảnh 2 - ĐÃ TỐI ƯU */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[600px] max-w-full" style={{ aspectRatio: '600 / 400' }}>
                  <Image
                    src="/thanh-ly-cua-nhom.png"
                    alt="Thu mua đồ nhôm kính"
                    fill
                    sizes="(max-width: 640px) 100vw, 600px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-[#111111] font-semibold mt-6">
                Quy trình nhận <strong>Thu mua cửa nhôm kính cũ tại Việt Anh chúng tôi:</strong>
              </p>

              <div className="mb-6 text-[#222222] space-y-4 text-justify">
                <p><strong>+ Bước 1:</strong> Quý khách hàng chỉ cần nhấc máy lên và gọi cho Cửa hàng thu mua đồ cũ Việt Anh chúng tôi để được hỗ trợ tốt nhất</p>
                <p><strong>+ Bước 2:</strong> Khi nhận được những thông tin cung cấp được từ phía khách hàng, doanh nghiệp khách hàng cần thanh lý đồ cũ, … Thì đơn vị chúng tôi sẽ liên hệ lại và cử nhân viên đến tận nơi khảo sát tình hình thực tế về đồ cũ cần thanh lý cho khách hàng.</p>
                <p><strong>+ Bước 3:</strong> Từ những tình hình khảo sát thực tế, Việt Anh chúng tôi sẽ đưa ra bảng giá hợp lý và cao nhất thị trường dựa vào tình trạng của các loại hàng hóa, tình trạng sản phẩm và cân đối giá thực tế của thị trường, bàn bạc và đưa ra ý kiến thống nhất giá với khách hàng. Ký kết hợp đồng có bảng giá thanh lý đồ cũ và lịch hẹn để có thể tiến hành thu mua theo thỏa thuận.</p>
                <p><strong>+ Bước 4:</strong> Lập tức tiến hành quá trình thu mua đồ cũ nhanh chóng, thu mua lại các loại phế liệu giá cao, thanh toán bằng những hình thức tiền mặt hoặc chuyển khoản ngân hàng ngay sau khi hoàn thiện việc bốc vác hết các loại mặt hàng để lên xe.</p>
                <p><strong>+ Bước 5:</strong> Nhân viên của chúng tôi sẽ thực hiện dọn dẹp sạch sẽ lại, lái xe chuyển đồ đi nhanh chóng.</p>
              </div>

              <p className="mb-8 text-[#222222] text-justify italic border-l-4 border-blue-600 pl-4 bg-gray-50 py-2">
                Hãy liên hệ ngay cho Việt Anh khi bạn có nhu cầu muốn thanh lý cửa nhôm cũ nhé, để chúng tôi giúp ngôi nhà, nhà xưởng, công ty của bạn thêm sạch sẽ và tiết kiệm được một phần kinh tế.
              </p>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8 border-t pt-4">
                <h5 className="text-xl font-bold mb-4 uppercase text-[#000099]">THU MUA ĐỒ CŨ VIỆT ANH</h5>
                <ul className="list-none space-y-3 pl-0">
                  <li>
                    <p className="m-0 text-[16px] md:text-[18px]">
                      <strong>
                        Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM
                      </strong>
                    </p>
                  </li>
                  <li>
                    <p className="m-0 text-[16px] md:text-[18px]"><strong> Email: trinhvanviet1812@gmail.com</strong></p>
                  </li>
                  <li>
                    <p className="m-0 text-[16px] md:text-[18px]"><strong> Hotline: 0988.257.479 - Việt Anh</strong></p>
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