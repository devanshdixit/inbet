import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Head from 'next/head';
import BetOption from '../Components/BetOption';

export default function GetStarted() {
    return (
        <>
            <Head>
                <title>GambleBee - Start</title>
                <meta name="description" content="Best betting platform" />
                <link rel="icon" href="/logow.png" />
            </Head>
            <Header />
            <BetOption />
            <Footer />
        </>
    )
}