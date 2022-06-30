import './Ajuda.css';
import Main from '../template/Main';
import React, { Component } from 'react';

import IconePagamento from '../../assets/imagens/icons8-wallet-64.png'
import IconeCadastro from '../../assets/imagens/icons8-adicionar-usuário-masculino-80.png'
import IconeChat from '../../assets/imagens/icons8-comunicação-64.png'
import IconeRotas from '../../assets/imagens/icons8-van-64.png'
import IconeInfo from '../../assets/imagens/icons8-info-64.png'
import IconeNos from '../../assets/imagens/icons8-gestão-de-desenvolvimento-comercial-100.png'

const title = "Ajuda";

export default class Ajuda extends Component {
    renderContent() {
        return (
            <div className="Ajuda">
                <h1>Olá! Como podemos te ajudar?</h1>
                <div className="meuGrid">
                    <div className="parteUm">

                        <div className="Pagamento">
                            <h4>Dúvidas sobre o processo de pagamento:</h4>
                            <details>
                                <summary className="btnPagamento"><img src={IconePagamento} /></summary>
                                <form>
                                    <div id="pagamentoEscondido" >O pagamento do transporte não é realizado no site, apenas diretamente com o motorista da van.</div>
                                </form>

                            </details>
                        </div>

                        <div className="Cadastro">
                            <h4>Dúvidas sobre o cadastro no vanSport:</h4>
                            <details>
                                <summary className="btnCadastro"><img src={IconeCadastro} /></summary>
                                <div id="cadastroEscondido">
                                    <p>Cadastro: Para fazer seu cadastro no vanSport são necessários algúns documentos:</p>
                                    <p>Para o cadastro como motoristra são necessários:<br></br>
                                    - CPF<br></br>
                                    - Nome<br></br>
                                    - Cidade<br></br>
                                    - Modelo da van<br></br>
                                    - Número de celular (contato em si)<br></br>
                                    - Rotas (bairros)<br></br>
                                    - Foto (tipo 3x4, algo assim)</p>

                                    <p>Para o cadastro como cliente são necessários:<br></br>
                                    - Nome (aluno)<br></br>
                                    - Nome (responsável)<br></br>
                                    - Contato (telefone, email, etc.)<br></br>
                                    - Endereço;<br></br>
                                    - Escola;<br></br>
                                    - Turnos;<br></br>
                                    - Dias de corrida (D, S, T, Q, Q, S, S);<br></br>
                                    - Foto</p>

                                    <p>Para fazer seu cadastro no vanSport <a id="cadastro" href="/cadastro">clique aqui</a>, e se junte a uma van!</p>
                                </div>

                            </details>
                        </div>

                        <div className="Rotas">
                            <h4>Deseja saber as rotas que o VanSport percorre:</h4>
                            <details>
                                <summary className="btnRotas"><img src={IconeRotas} /></summary>
                                <div id="rotasEscondido">
                                    <p>Nossos motoristas percorrem as rotas...</p>
                                </div>
                            </details>
                        </div>
                    </div>
                    <div className="parteDois">
                        <div className="Chat">
                            <h4>Deseja falar com o VanSport:</h4>
                            <details>
                                <summary className="btnChat"><img src={IconeChat} /></summary>
                                <div id="chatEscondido">
                                    <p>Para falar conosco <a id="email" href="mailto:someone@example.com">clique aqui</a>, e nos envie um e-mail.</p>
                                </div>
                            </details>
                        </div>

                        <div className="Info">
                            <h4>Mais informações:</h4>
                            <details>
                                <summary className="btnInfo"><img src={IconeInfo} /></summary>
                                <div id="infoEscondido">
                                    <p> A proposta do VanSport é criar uma rede de busca e comunicação entre os motoristas de
                                        transporte escolar e os responsáveis pelos alunos. O site possui um sistema para o
                                        cadastramento dos motoristas e dos clientes, contando com um sistema de avaliações,
                                        filtros, quadro de avisos e chat direto entre motorista e cliente. A princípio o site
                                        pretende atender apenas estudantes do colégio técnico de Campinas. Por hora, as cidades
                                        onde atuamos são: Campinas, Hortolândia, Monte Mor, Indaiatuba, Valinhos, Vinhedo,
                                        Itatiba, Morungaba, Pedreira, Jaguariúna, Paulínia e Sumaré.</p>
                                </div>
                            </details>
                        </div>

                        <div className="Nos">
                            <h4>Sobre nós:</h4>
                            <details>
                                <summary className="btnNos"><img src={IconeNos} /></summary>
                                <div id="nosEscondido">
                                    <p>Somos estudante do segundo ano da escola técnica de Campinas,
                                        fomos convidados a criar um site como projeto pré-tcc (que faremos no próximo ano).
                                        Ao conversar com colegas, chegamos à conclusão de que a maioria dos alunos que vem de van são de outras cidades,
                                        por isso, seria bacana fazer um site, onde poderíamos conectar todos os motoristas de van da região,
                                        e conectá-los com os estudantes que precisam de transporte, assim surgiu o VanSport.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <Main className="title" title={title}>
                {this.renderContent()}
            </Main>
        )
    }
}
