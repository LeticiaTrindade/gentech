import React from "react";
import Banner from './Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ValidateCertificate from './ValidateCertificate/index';

const Certificate = () => {
    return (
    <section>
        <Header/>
        <Banner />
        <ValidateCertificate/>
        <Footer/>
    </section>
    );
}

export default Certificate;