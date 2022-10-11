import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Head from "next/head";
import BuyTokens from "../Components/BuyTokens";
import Onborading from '../Components/Onboarding';

export default function BuyToken() {
  return (
    <>
      <Head>
        <title>GambleBee - Buy Token</title>
        <meta name="description" content="Best betting platform" />
        <link rel="icon" href="/logow.png" />
      </Head>
      <Header />
      <BuyTokens />
      <Footer />
    </>
  )
}