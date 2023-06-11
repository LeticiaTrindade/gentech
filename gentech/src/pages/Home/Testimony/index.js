import React from "react";
import './style.css';
import testemunho from "../../../components/images/testemunho.png";
import user from '../../../components/images/user.png'
import user1 from '../../../components/images/user1.png';
import user2 from '../../../components/images/user2.png';

function Testimony() {
    return (
        <>
            <div id="testimony" className="d-flex flex-column align-items-center">
                <h1>Nossos alunos ♥</h1>
                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={testemunho} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex flex-column   ">
                                <div id="topUser" className="d-flex justify-content-between align-items-center ">
                                    <h2 className="col-7">Sarah Gomes</h2>
                                    <img id="user" src={user} alt="..." />
                                </div >
                                <p>Goooooosto muito das aulas, consigo entender muito bem e absorver todo o conteúdo!</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                        <img src={testemunho} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex flex-column   ">
                                <div id="topUser" className="d-flex justify-content-between align-items-center ">
                                    <h2 className="col-7">Francielly L.</h2>
                                    <img id="user" src={user1} alt="..." />
                                </div >
                                <p>Que conteúdo legal! Muito obrigada por disponibilizar!</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                        <img src={testemunho} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-flex flex-column   ">
                                <div id="topUser" className="d-flex justify-content-between align-items-center ">
                                    <h2 className="col-7">Will Smith</h2>
                                    <img id="user" src={user2} alt="..." />
                                </div >
                                <p>LOVED TO KNOW YOUR WEBSITE! YOU EXPLAIN EVERYTHING VERY WELL. I'M STOP BEING AN ACTOR AND I'M GOING TO BE A DEVELOPER!</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </>

    )
}

export default Testimony;