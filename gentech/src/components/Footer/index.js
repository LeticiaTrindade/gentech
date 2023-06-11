import React from "react";
import './style.css';
import logoGentechVertical from '../images/logo-gentech-vertical.jpeg';

function Footer() {
    return (

        <footer className="d-flex justify-content-end">
            <div>
                <ul>
                    <li>
                        Menu
                    </li>
                    <li>
                        Cursos
                    </li>
                    <li>
                        Apoie
                    </li>
                    <li>
                        Validar Certificados
                    </li>
                    <li>
                        Ranking
                    </li>
                </ul>

            </div>

            <div className="left">
                <img id="Footer-logo" src={logoGentechVertical}/>
                <p>Acompanhe</p>
                <div>
                    <a></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;