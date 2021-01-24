import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header'
import Main from '../components/Main'

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
    </div>
  )
}
