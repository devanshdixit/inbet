import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Login from '../Components/Login';
import Head from 'next/head';

export default function GetStarted() {
    return (
        <>
            <Head>
                <title>GambleBee - Login</title>
                <meta name="description" content="Best betting platform" />
                <link rel="icon" href="/logow.png" />
            </Head>
            <Header />
            <Login />
            <Footer />
        </>
    )
}