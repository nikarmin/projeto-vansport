import React from 'react';
import './Home.css'
import imgVan from "../../assets/imagens/van.png"

export default function Home() {
    return(
        <div>

            <div className="img-van">
                <img src={imgVan}></img>
            </div>

            <h2>OBJETIVOS</h2>

            <div className="content-obj">

                <ul>
                    <li>Organização</li>
                    <li>Praticidade</li>
                    <li>Segurança</li>
                </ul>

                <div className="content-obj-def">
                    <p> O site tem como objetivo organizar a jornada do estudante até sua escola.
                        Além de facilitar a vida do motorista, e deixar tudo mais prático, organizando
                        os clientes em cada 'sala'.
                        Com tal facilidade, o site também proporciona uma maior segurança aos cliente e 
                        seus responsáveis, afinal, um dos princípios do site é compartilhar a localização
                        em que o cliente (e seu responsável), possam ver a qualquer momento.
                    </p>
                </div>
            </div>
        </div>
    )
}