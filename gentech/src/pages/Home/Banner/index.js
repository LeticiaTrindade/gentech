import React from "react";
import './style.css';
import mulher from '../../../components/images/mulher.png';

function Banner() {
    return (

        <section id="banner" className="d-flex row justify-content-between">
            <div className="col-8 align-self-center">
                <hgroup>
                    <h1>Prepare-se para o futuro com Gentech</h1>
                    <h2>Cursos de tecnologia</h2>
                </hgroup>
                <button>
                    Começar
                </button>
            </div>
            <div className="col-4">
                <img src={mulher} />
            </div>
        </section>
    )
}

export default Banner;