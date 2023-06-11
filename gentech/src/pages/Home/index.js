import React from "react";
import Banner from './Banner';
import Testimony from './Testimony/index';
import Line from './Line';
import Support from './Support';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
    return (
    <section>
        <Header/>
        <Banner />
        <Testimony />
        <Line />
        <Support />
        <Footer/>
    </section>
    );
}

export default Home;