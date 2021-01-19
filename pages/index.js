import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import NavItem from '../components/NavItem'

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
