import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Register from '../Components/Register';
import Head from 'next/head';

export default function GetStarted() {
    return (
        <>
            <Head>
                <title>Inbet - Register</title>
                <meta name="description" content="Best betting platform" />
                <link rel="icon" href="/logow.png" />
            </Head>
            <Header />
            <Register />
            <Footer />
        </>
    )
}