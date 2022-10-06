import Onborading from "../Components/Onboarding";
import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Head from "next/head";

export default function GetStarted() {
  return (
    <>
      <Head>
        <title>Inbet - GetStarted</title>
        <meta name="description" content="Best betting platform" />
        <link rel="icon" href="/logow.png" />
      </Head>
      <Onborading />
    </>
  )
}