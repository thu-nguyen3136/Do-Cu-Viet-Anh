import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

export default function ThuMuaCongNhomDucPage() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <Head>
        <title>Thu Mua Cổng Nhôm Đúc - Đồ Cũ Việt Anh</title>
        <meta name="description" content="Thu Mua Cổng Nhôm Đúc" />
        <meta name="keywords" content="Bạn đang có nhu cầu thanh lý cổng nhôm đúc cũ nhưng chưa biết ở đâu thu mua uy tín và giá cao? Đồ cũ Việt Anh là chuyên gia thu mua cổng nhôm đúc tận nơi với nhiều năm kinh nghiệm trong lĩnh vực thu mua phế liệu. Chúng tôi cam kết mang đến cho quý khách hàng dịch vụ thu mua chuyên nghiệp, nhanh chóng và giá cả cạnh tranh nhất thị trường." />
      </Head>

      <main className="max-w-[1200px] mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">

          {/* ========================================= */}
          {/* CỘT NỘI DUNG CHÍNH (BÊN TRÁI - 9/12)      */}
          {/* ========================================= */}
          <div className="w-full md:w-3/4 px-4">

            {/* Tiêu đề trang */}
            <div className="mb-6 pb-2 border-b-2 border-blue-600 inline-block">
              <h2 className="text-2xl font-bold uppercase text-[#000099]">Thu Mua Cổng Nhôm Đúc</h2>
            </div>

            <div className="prose max-w-none text-[16px] md:text-[20px] leading-relaxed">

              <h1 className="text-xl md:text-2xl font-bold mb-4 text-justify">
                <strong>Thu Mua Cổng Nhôm Đúc Trọn Gói Giá Cao</strong>
              </h1>

              <p className="mb-4 text-justify">
                <strong>Bạn đang có nhu cầu thanh lý cổng nhôm đúc cũ nhưng chưa biết ở đâu thu mua uy tín và giá cao? Đồ cũ Việt Anh là chuyên gia thu mua cổng nhôm đúc tận nơi với nhiều năm kinh nghiệm trong lĩnh vực thu mua phế liệu. Chúng tôi cam kết mang đến cho quý khách hàng dịch vụ thu mua chuyên nghiệp, nhanh chóng và giá cả cạnh tranh nhất thị trường.</strong>
              </p>

              {/* Ảnh 1 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thu-mua-cong-nhom-uy-tin.jpg"
                  alt="Thu mua cổng nhôm đúc"
                  width={700}
                  height={467}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <h2 className="text-xl font-bold mb-4 text-justify">
                <strong>Chúng tôi nhận thu mua các loại cửa nhôm như</strong>
              </h2>

              <div className="mb-4 space-y-2 text-justify">
                <p>- Chuyên nhận mua thanh lý các cửa nhôm đúc cũ.</p>
                <p>- Thu Mua thanh lý cửa đi nhôm đúc</p>
                <p>- Thu Mua thanh lý toàn bộ cửa cổng nhôm đúc</p>
                <p>- Mua thanh lý các loại cửa sổ nhôm kính cũ.</p>
                <p>- Mua thanh lý các loại khung nhôm cũ của cửa kính.</p>
                <p>- Mua thanh lý lại các loại cửa nhôm, cửa nhựa lõi thép</p>
                <p>- Mua thanh lý giá cao các loại cửa nhôm kính, mua thanh lý các vách kính, vách nhôm kính.</p>
              </div>

              {/* Ảnh 2 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thu-mua-cong-nhom-hcm.jpg"
                  alt="Thu mua cổng nhôm đúc hcm"
                  width={700}
                  height={502}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              {/* Ảnh 3 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thanh-ly-cong-nhom-nhanh-chong.jpg"
                  alt="Thu mua cổng nhôm nhanh chóng"
                  width={700}
                  height={525}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <h2 className="text-xl font-bold mb-4 text-justify">
                <strong>Quy trình thu mua cổng nhôm cũ tại Thu mua đồ cũ Việt Anh</strong>
              </h2>

              <p className="mb-4 text-justify">
                Thu mua đồ cũ Việt Anh cam kết mang đến cho quý khách dịch vụ thu mua cổng nhôm cũ chuyên nghiệp, nhanh chóng và uy tín nhất. Quy trình thu mua của chúng tôi diễn ra theo các bước sau:
              </p>

              <div className="mb-4 space-y-3 text-justify">
                <p><strong>Bước 1: Liên hệ: </strong>Bạn cần liên hệ trực tiếp với Đồ cũ Việt Anh qua hotline để thông báo về việc bạn muốn bán cửa cổng nhôm đúc cũ.</p>
                <p><strong>Bước 2: Thông tin cung cấp: </strong>Cung cấp thông tin chi tiết về sản phẩm mà bạn đang muốn bán bao gồm thông tin về kích thước, trạng thái hiện tại của cửa cổng, tuổi đời của sản phẩm, và bất kỳ chi tiết nào khác liên quan.</p>
                <p><strong>Bước 3: Đánh giá sản phẩm:</strong> Sau khi nhận được thông tin từ bạn, Đồ cũ Việt Anh sẽ tiến hành đánh giá cửa cổng nhôm đúc cũ của bạn. Đánh giá này có thể được thực hiện trực tiếp tại địa chỉ của bạn hoặc bạn mang sản phẩm đến cửa hàng để kiểm tra.</p>
                <p><strong>Bước 4: Thương lượng giá cả:</strong> Sau khi đánh giá xong, Đồ cũ Việt Anh sẽ đề xuất mức giá mà họ sẵn sàng mua lại cửa cổng nhôm đúc cũ từ bạn. Bạn có thể thương lượng để đạt được mức giá hợp lý cho cả hai bên.</p>
                <p><strong>Bước 5: Hoàn tất giao dịch:</strong> Nếu bạn đồng ý với mức giá được đề xuất, các bên sẽ hoàn tất giao dịch. Đồ cũ Việt Anh sẽ thanh toán cho bạn theo thỏa thuận và sắp xếp việc vận chuyển cửa cổng nhôm đúc cũ đi từ địa điểm của bạn.</p>
              </div>

              {/* Ảnh 4 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thanh-ly-cong-nhom-q12.jpg"
                  alt="Thu mua cổng nhôm đúc quận 12"
                  width={700}
                  height={525}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              {/* Ảnh 5 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thanh-ly-cong-nhom-gia-cao.jpg"
                  alt="Thu mua cổng nhôm đúc giá cao"
                  width={700}
                  height={525}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <h2 className="text-xl font-bold mb-4 text-justify">
                <strong>Tại sao bạn nên chọn Đồ cũ Việt Anh chúng tôi?</strong>
              </h2>

              <div className="mb-4 space-y-3 text-justify">
                <p>-<strong> Uy tín:</strong> Chúng tôi là đơn vị thu mua cửa nhôm kính uy tín with nhiều năm kinh nghiệm hoạt động trong lĩnh vực này.</p>
                <p>- <strong>Giá cao:</strong> Chúng tôi luôn thu mua cửa nhôm kính với giá cao nhất thị trường, đảm bảo mang lại lợi ích tối đa cho khách hàng.</p>
                <p>- <strong>Thu mua nhanh chóng:</strong> Chúng tôi có đội ngũ nhân viên thu mua chuyên nghiệp, sẵn sàng đến tận nơi để thu mua cửa nhôm kính của quý khách một cách nhanh chóng và gọn lẹ.</p>
                <p>-<strong> Thanh toán sòng phẳng:</strong> Chúng tôi thanh toán sòng phẳng cho quý khách ngay sau khi thu mua cửa nhôm kính.</p>
                <p>- <strong>Chuyên nghiệp:</strong> Chúng tôi luôn mang đến cho quý khách dịch vụ thu mua chuyên nghiệp và tận tâm nhất.</p>
              </div>

              {/* Ảnh 6 */}
              <div className="mb-4 text-center">
                <Image
                  src="/thanh-ly-cong-nhom-go-vap.jpeg"
                  alt="Thu mua cổng nhôm đúc gò vấp"
                  width={700}
                  height={525}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              {/* Ảnh 7 */}
              <div className="mb-6 text-center">
                <Image
                  src="/thu-mua-cong-nhom-gia-cao.jpg"
                  alt="Thu mua cổng nhôm đúc giá cao"
                  width={700}
                  height={385}
                  className="mx-auto h-auto max-w-full"
                />
              </div>

              <p className="mb-8">
                Với đội ngũ nhân viên chuyên nghiệp, nhiệt tình và quy trình thu mua nhanh chóng, gọn lẹ, giá cả cạnh tranh, Đồ cũ Việt Anh luôn mang đến cho khách hàng sự hài lòng tuyệt đối. Hãy liên hệ với chúng tôi ngay hôm nay để được tư vấn và báo giá miễn phí!
              </p>

            </div>
          </div>

          <Sidebar />
        </div>
      </main>
    </div>
  );
}