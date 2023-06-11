import React from "react";
import './style.css';
import unity from '../../../components/images/unity.png';

function Support() {
    return (
        <>
            <section>
                <div className="support red d-flex row justify-content-evenly">
                    <div className="col-4 align-self-center">
                        <hgroup>
                            <h1>Seja um apoiador</h1>
                            <h3>Ajude a nossa escola Gentech para que possamos produzir cada vez mais!</h3>
                        </hgroup>
                        <button>
                            Apoiar ♥
                        </button>
                    </div>
                    <div className="col-4">
                        <img src={unity} />
                    </div>
                </div>
            </section>
            <section id="supports">
                <div className="d-flex justify-content-center align-self-center">
                    <div id="monthly" className="d-flex flex-column">
                        <h1>apoio mensal</h1>
                        <h2 className="value">R$ 12</h2>
                        <ul className="text-left">
                            <li><h3>1 ponto</h3><p>Mensal para certificado</p></li>
                            <li>Navegue na Gentech sem anúncios no site</li>
                            <li>Presença no Ranking</li>
                            <li>Nossa gratidão</li>
                        </ul>

                        <button >Quero apoiar!</button>
                    </div>

                    <div id="yarly">
                        <h1>apoio mensal</h1>
                        <h2 className="value">R$ 100</h2>
                        <ul className="text-left">
                            <li><h3>12 pontos</h3><p>Para emitir certificados AGORA!</p></li>
                            <li>Navegue na Gentech sem anúncios no site</li>
                            <li>Presença no Ranking</li>
                            <li>Nossa gratidão</li>
                        </ul>

                        <button >Quero apoiar!</button>
                    </div>

                </div >
            </section>

        </>
    )
}

export default Support;