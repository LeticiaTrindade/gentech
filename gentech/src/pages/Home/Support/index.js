import React from "react";
import './style.css';
import unity from '../../../components/images/unity.png';

function Support() {
    return (

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
    )
}

export default Support;