import React from 'react';
import './Home.css'
import imgVan from "../../assets/imagens/van.png"
import imgMotorista from "../../assets/imagens/motorista.png"
import imgCliente from "../../assets/imagens/clientes.png"
import { useHref } from 'react-router';

export default function Home() {
    return(
        <div>

            <div className="img-van">
                <img src={imgVan}></img>
                
                <div className="img-van-text">
                    <h3>VANSPORT</h3>
                    <p>Organize sua van do melhor jeito!</p>
                </div>
            </div>

            <h2 className='obj-name'>OBJETIVOS</h2>

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
            
            <div className="motorista-cliente">
                    <div className="motorista-cliente">
                        <img src={imgMotorista} />

                        <div className="motorista-cliente-text">
                            <a href="/cadastro"><p className="title">MOTORISTA</p></a>
                            <p>Crie uma conta como motorista, e monte seu grupo! </p>
                        </div>
                    </div>

                    <div className="motorista-cliente">
                        <img src={imgCliente} />

                        <div className="motorista-cliente-text">
                            <a href="/cadastro"><p className="title">CLIENTE</p></a>
                            <p>Crie uma conta como cliente, e escolha um motorista!</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}