import React from "react";
import './style.css';
import certificateImg from '../../../components/images/certificate.jpeg';

function ValidateCertificate() {
    return (

        <section className="d-flex justify-content-center">
            <div id="certificate">
                <img src={certificateImg}/>
                <h1 className="">Digite o código do certificado para verificar sua validade</h1>
                <input maxLength="10" lasseName="w-100" placeholder="Código do Certificado"></input>
                <button>Validar</button>
            </div>
        </section>
    )
}

export default ValidateCertificate;