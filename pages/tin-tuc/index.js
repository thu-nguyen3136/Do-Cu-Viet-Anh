import Head from "next/head";
import Link from "next/link";

export default function NewsPage() {

  const news = [
    {
      id: 1,
      title: "Đơn Vị Thu Mua Đồ Cũ Uy Tín Tại TP.HCM",
      desc: "Việt Anh là đơn vị chuyên thu mua đồ cũ giá cao tại TP.HCM, hỗ trợ khảo sát tận nơi, thanh toán nhanh chóng, không ép giá.",
      image: "/thu-mua-do-cu-uy-tin-hcm.jpeg",
      slug: "/tin-tuc/thu-mua-do-cu-uy-tin-tphcm"
    },
    {
      id: 2,
      title: "Thu Mua Thiết Bị Vệ Sinh, Phế Liệu Giá Cao Tại TP.HCM",
      desc: "Nhận thu mua thiết bị vệ sinh cũ, phế liệu inox, sắt, nhôm với giá cao, hỗ trợ tháo dỡ và vận chuyển tận nơi.",
      image: "/thu-mua-thiet-bi-ve-sinh-phe-lieu-gia-cao-tai-tp-hcm.png",
      slug: "/tin-tuc/thu-mua-bon-cau-cu-thiet-bi-ve-sinh"
    }
  ];

  return (
    <>
      <Head>
        <title>Tin Tức Thu Mua Đồ Cũ | Việt Anh</title>
        <meta
          name="description"
          content="Cập nhật tin tức thu mua đồ cũ, kinh nghiệm thanh lý nhà xưởng, cửa cũ, thiết bị vệ sinh giá cao tại TP.HCM."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50">
        <main className="flex-grow">
          {/* HERO */}
          <section className="pt-10 pb-4 md:pt-10 md:pb-4 bg-white text-center">
            <div className="max-w-[900px] mx-auto px-6">
              <h1 className="text-3xl md:text-5xl font-black text-[#111827] mb-4">
                Tin Tức <span className="text-[#e08a0d]">Việt Anh</span>
              </h1>
              <p className="text-gray-600 text-lg">
                Cập nhật kiến thức, kinh nghiệm thu mua đồ cũ và thanh lý tài sản giá cao
              </p>
            </div>
          </section>

          {/* GRID */}
          <section className="pb-8 md:pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                {news.map((item) => (
                  <Link
                    key={item.id}
                    href={item.slug}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_8px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(224,138,13,0.15)] transition-all duration-300"
                  >

                    {/* IMAGE */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://images.unsplash.com/photo-1541889025078-450f78235e23?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <span className="text-xs text-[#e08a0d] font-bold uppercase tracking-wider">
                        Tin tức
                      </span>

                      <h2 className="font-black text-xl text-[#111827] mt-2 mb-3 line-clamp-2 group-hover:text-[#e08a0d] transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                        {item.desc}
                      </p>

                      <div className="text-[#e08a0d] font-bold text-sm uppercase tracking-wide flex items-center gap-2 group-hover:text-[#bc700a]">
                        Xem chi tiết
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>

                  </Link>
                ))}

              </div>

            </div>
          </section>

        </main>
      </div>
    </>
  );
}