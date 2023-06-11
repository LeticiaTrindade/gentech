import React from "react";
import Banner from './Banner';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Course from './courses/index';

const Courses = () => {
    return (
    <section>
        <Header/>
        <Banner />
        <Course/>
        <Footer/>
    </section>
    );
}

export default Courses;