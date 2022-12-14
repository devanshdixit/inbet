import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Newsletter from '../Components/Newsletter'
import Content from '../Components/Content'
export default function Home() {
  return (
    <>
      <Head>
        <title>GambleBee - Home</title>
        <meta name="description" content="Best betting platform" />
        <link rel="icon" href="/logow.png" />
      </Head>
      <Header/>
      <Hero />
      <Content />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  )
}
