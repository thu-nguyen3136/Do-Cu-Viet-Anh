import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FloatingContact } from '../components/FloatingContact';
import { Be_Vietnam_Pro } from 'next/font/google';


const beVietnam = Be_Vietnam_Pro({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-be-vietnam',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Đồ Cũ Việt Anh - Thu Mua Giá Cao Tận Nơi</title>
        <meta name="description" content="Chuyên thu mua đồ gỗ, đồ cũ..." />
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>

      {/* 👇 THÊM DÒNG NÀY */}
      <div className={`${beVietnam.variable} font-sans`}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}