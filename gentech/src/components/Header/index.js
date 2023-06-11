import React from "react";
import './style.css';
import logoGentechHorizontal from  '../images/logo-gentech-horizontal.png';
import { Link } from "react-router-dom";


function Header() {
    return (
        <section>
            <nav id="header" class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand" to="/gentech"><img id="header-logo" src={logoGentechHorizontal} /></Link>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">

                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/courses">Cursos</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/SupportPage">Apoie</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/certificates">Validar certificados</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled" href="#">Ranking</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link disabled">Painel <img /></Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Header;