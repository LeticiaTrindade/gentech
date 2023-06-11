import React from "react";
import Banner from './Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Support from "./support";

const SupportPage = () => {
    return (
    <section>
        <Header/>
        <Banner />
        <Support/>
        <Footer/>
    </section>
    );
}

export default SupportPage;