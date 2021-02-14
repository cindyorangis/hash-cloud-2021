import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hash Cloud Solutions</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
