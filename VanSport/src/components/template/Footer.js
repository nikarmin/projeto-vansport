import './Footer.css';
import React from 'react';

import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Footer(props) {
    return (
        <footer>
            <div className="sessao1">
                <p className="slogan">Vai de Van!</p>
            </div>
                <div className="sessao2">
                    <p className="titulo">Contatos:</p>
                    <div className="contatos">
                        <p>Telefone: (19)91234-1234</p>
                        <p>Email: vansport@vansescolares.com</p>
                    </div>
                    <div className="redes-sociais">
                        <div className="rede-social">
                            <AiFillTwitterCircle fontSize={30} />
                            <p>@van_Sport</p>
                        </div>
                        <div className="rede-social">
                            <BsInstagram fontSize={25} />
                            <p>@van_Sport</p>
                        </div>
                        <div className="rede-social">
                            <AiFillYoutube fontSize={30} />
                            <p>VanSport</p>
                        </div>
                        <div className="rede-social">
                            <FaFacebookSquare fontSize={25} />
                            <p>van_Sport</p>
                        </div>
                    </div>
                </div>



                <div>
                    <p className="titulo">Reclamação:</p>
                    <form>
                        <label className="sessao3">Email:</label>
                        <input type="text" id="email" />
                        <label className="sessao3">Conteúdo:</label>
                        <textarea />
                        <button className="btnEnviar">Enviar</button>
                    </form>
                </div>
        </footer>
    )
}