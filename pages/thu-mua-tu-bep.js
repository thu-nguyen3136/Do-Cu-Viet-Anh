import Head from 'next/head';
// 1. IMPORT COMPONENT IMAGE CỦA NEXT.JS
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';

export default function ThuMuaTuBepGoPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Tủ Bếp Gỗ - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Đồ Cũ Việt Anh là đơn vị chuyên thu mua tủ bếp gỗ cũ các loại giá cao nhất tphcm và các tỉnh lân cận." />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Tủ Bếp Gỗ</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[18px] leading-relaxed">

              <p className="mb-4 text-justify">
                <strong>Thu mua các loại tủ bếp gỗ cũ đã qua sử dụng giá cao tại TP.HCM</strong>
              </p>

              <p className="mb-4 text-justify">
                <strong>Đồ Cũ Việt Anh </strong>là đơn vị chuyên thu mua tủ bếp gỗ cũ các loại giá cao nhất tphcm và các tỉnh lân cận.
              </p>

              <p className="mb-4 text-justify">
                Hotline: <strong>0988.257.479 Để Được Báo Giá Tốt Nhất!!!</strong>
              </p>

              {/* ========================================= */}
              {/* Ảnh 1 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[1280px] max-w-full" style={{ aspectRatio: '1280 / 960' }}>
                  <Image
                    src="/thu-mua-tu-bep-hcm.jpg"
                    alt="Thu mua tủ bếp gỗ tp hcm"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover mx-auto"
                    priority // Bức ảnh đầu tiên phải được ưu tiên load
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">
                Chúng tôi nhận thu mua đồ gỗ của ở các địa điểm ở Sài gòn, TP.HCM như Quận 1, Quận 2, Quận 3, Quận 4, Quận 5, Quận 6, Quận 7, Quận 8, Quận 9, Quận 10, Quận 11, Quận 12, Quận Bình Thạnh, Quận Thủ Đức, Quận Bình Tân, Quận Tân Bình, Quận Phú Nhuận, Quận Gò Vấp và các địa điểm như Biên Hòa, Đồng Nai, Bình Dương, Thủ Dầu Một. Lợi ích mà bạn nhận được khi mua đồ gỗ cũ ở một địa chỉ uy tín, đáng tin cậy.
              </p>

              <p className="mb-4 text-justify">
                Trên thị trường hiện nay có hàng trăm cửa hàng mua bán đồ gỗ cũ nhưng để chọn lựa ra một cửa hàng mua đồ gỗ cũ tốt nhất hiện nay thì chắc chắn nhiều người sẽ chọn cửa hàng đồ cũ của chúng tôi
              </p>

              <p className="mb-4 text-justify">
                Cửa hàng đồ gỗ cũ của chúng tôi là một cửa hàng mua bán đồ gỗ cũ uy tín, được rất nhiều khách hàng tin tưởng và tìm đến. Không chỉ giới hạn ở một mặt hàng, tại đây bạn có thể tìm thấy rất nhiều mặt hàng khác nhau.
              </p>

              <p className="mb-4 text-justify">
                Với đội ngũ nhân viên tư vấn, nhân viên kỹ thuật nhiệt tình, có trách nhiệm sẽ giúp bạn lựa chọn được một sản phẩm phù hợp nhất với mục đích sử dụng và yêu cầu của bạn.
              </p>

              {/* ========================================= */}
              {/* Ảnh 2 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[899px] max-w-full" style={{ aspectRatio: '899 / 1200' }}>
                  <Image
                    src="/thanh-ly-tu-bep.jpg"
                    alt="Thu mua tủ bếp gỗ quận 12"
                    fill
                    sizes="(max-width: 899px) 100vw, 899px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              <p className="mb-4 text-justify">Các sản phẩm đồ gỗ mà Đồ Cũ Việt Anh nhận thu mua:</p>
              <p className="mb-4 text-justify">Đồ gỗ cũ nội thất</p>
              <p className="mb-4 text-justify">Mua cửa cũ</p>
              <p className="mb-4 text-justify">Bàn ghế giường tủ, salon ván ngựa sập gụ, tủ chè</p>
              <p className="mb-4 text-justify">Giường cũ</p>
              <p className="mb-4 text-justify">Tủ đồ quần áo cũ</p>
              <p className="mb-4 text-justify">Vật dụng trong gia đình bằng gỗ đồ cũ</p>
              <p className="mb-4 text-justify">Bộ bàn ăn, bàn làm việc, tủ chưng bày đồ, tủ ly tủ thờ, kệ tivi</p>
              <p className="mb-4 text-justify">Đồ gỗ mỹ nghệ</p>
              <p className="mb-4 text-justify">Tượng gỗ các loại</p>
              <p className="mb-4 text-justify">Tất cả các loại đồ xưa cổ, hoàng phi câu đối, trường kỷ, tủ chè tủ chùa, chạm trổ cẩn ốc, đồ đồng đồ gốm sứ</p>
              <p className="mb-4 text-justify">Mua đồ gỗ huỳnh đàn (gỗ xưa), gỗ gián hương, gỗ gõ đỏ gỗ cẫm lai, gỗ căm xe,thao lao, bộ ván ngựa</p>
              <p className="mb-4 text-justify">Bàn ghế làm việc, bàn ghế văn phòng, bàn ghế cafe, bàn ghế nhà hàng khách sạn, bàn ghế inox, mua do go cu</p>
              <p className="mb-4 text-justify">Mua xác nhà cửa gỗ cũ, cửa phòng, cử đi, cửa 4 cánh, 2 cánh 1 cánh, chất liệu gỗ cẫm, gõ hương, thao lao</p>
              <p className="mb-4 text-justify">Bàn ghế salon - bàn ăn - ván ngựa gỗ (ưu tiên gỗ nhóm 1: cẩm, gõ, nu).</p>

              <p className="mb-4 text-center">&nbsp;</p>

              {/* ========================================= */}
              {/* Ảnh 3 - ĐÃ TỐI ƯU                         */}
              {/* ========================================= */}
              <div className="mb-4 flex justify-center">
                <div className="relative w-[1280px] max-w-full" style={{ aspectRatio: '1280 / 975' }}>
                  <Image
                    src="/thanh-ly-tu-bep.jpg"
                    alt="Thu mua tủ bếp gỗ giá cao uy tín"
                    fill
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover mx-auto"
                  />
                </div>
              </div>

              {/* Footer Thông Tin Liên Hệ */}
              <div className="mb-6 mt-8">
                <h2 className="text-[20px] md:text-[24px] font-bold mb-4 uppercase"><em><strong>THU MUA ĐỒ CŨ VIỆT ANH</strong></em></h2>
                <ul className="list-none space-y-3 pl-0 text-[20px] md:text-[24px]">
                  <li><em><strong> Địa Chỉ 1: 14 Lê Văn Khương, Xã Đông Thạnh, Huyện Hóc Môn, TP.HCM</strong></em></li>
                  <li><em><strong> Email: trinhvanviet1812@gmail.com</strong></em></li>
                  <li><em><strong> Hotline: 0988.257.479 - Việt Anh</strong></em></li>
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