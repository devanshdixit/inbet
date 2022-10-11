import Header from '../Components/Header'
import Footer from "../Components/Footer";
import Head from 'next/head';
import Dashboard from '../Components/Dashboard';

export default function GetStarted() {
    return (
        <>
            <Head>
                <title>GambleBee - Dashboard</title>
                <meta name="description" content="Best betting platform" />
                <link rel="icon" href="/logow.png" />
            </Head>
            <Header />
            <Dashboard />
            <Footer />
        </>
    )
}