import React from "react";
import './style.css';

function Course() {
    return (

        <section id="courses" className="d-flex flex-column align-items-center" >
            <div className="card">
                <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3921/3921013.png" alt="Card image cap" />

                <div className="card-body text-center">
                    <h5 className="card-title">Introdução à informática(12 horas)</h5>
                    <a href="#"><button>Começar</button></a>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>50% completo</p>
                </div>
            </div>

            <div className="card">
                <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3921/3921013.png" alt="Card image cap" />

                <div className="card-body text-center">
                    <h5 className="card-title">Pacote Office(12 horas)</h5>
                    <a href="#"><button>Começar</button></a>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>50% completo</p>
                </div>
            </div>

            <div className="card">
                <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3921/3921013.png" alt="Card image cap" />

                <div className="card-body text-center">
                    <h5 className="card-title">Introdução à informática(12 horas)</h5>
                    <a href="#"><button>Começar</button></a>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>50% completo</p>
                </div>
            </div>

            <div className="card">
                <img className="card-img-top" src="https://cdn-icons-png.flaticon.com/512/3921/3921013.png" alt="Card image cap" />

                <div className="card-body text-center">
                    <h5 className="card-title">Introdução à informática(12 horas)</h5>
                    <a href="#"><button>Começar</button></a>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>50% completo</p>
                </div>
            </div>
        </section >
    )
}

export default Course;