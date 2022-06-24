// import './Ajuda.css';
// import Main from '../template/Main';
// import React, { Component } from 'react';
// //import {Link} from 'react-router-dom';

// import IconePagamento from '../../assets/imagens/icons8-dinheiro-na-mão-100.png'
// import IconeCadastro from '../../assets/imagens/icons8-adicionar-usuário-masculino-80.png'
// import IconeChat from '../../assets/imagens/icons8-bate-papo-100.png'
// import IconeRotas from '../../assets/imagens/icons8-van-64.png'
// import IconeInfo from '../../assets/imagens/icons8-info-64.png'
// import IconeNos from '../../assets/imagens/icons8-sexy-boy-96.png'

// const title = "Ajuda";

// export default class Ajuda extends Component{
//     renderContent() {
//         return (
//             <div className="Ajuda">
//                 <h1>Olá! Como podemos te ajudar?</h1>
//                 <div className="meuGrid">
//                 <div className="parteUm">
                    
//                     <div className="Pagamento">
//                         <h4>Dúvidas sobre o processo de pagamento:</h4>
//                         <details>
//                             <summary className="btnPagamento"><img src={IconePagamento} /></summary>
//                             Pagamento: o pagamento do transporte não é realizado no site, apenas diretamente com o motorista da van.
//                         </details>
//                     </div>

//                     <div className="Cadastro">
//                         <h4>Dúvidas sobre o cadastro no vanSport:</h4>
//                         <details>
//                             <summary className="btnCadastro"><img src={IconeCadastro} /></summary>
//                             <p>Cadastro: Para fazer seu cadastro no vanSport são necessários algúns documentos:</p>
//                             <p>Para o cadastro como motoristra são necessários:</p>
//                             <p>CPF</p>
//                             <p>Nome</p>
//                             <p>Cidade</p>
//                             <p>Modelo da van</p>
//                             <p>Número de celular (contato em si)</p>
//                             <p>Rotas (bairros)</p>
//                             <p>Foto (tipo 3x4, algo assim)</p>

//                             <p>Para o cadastro como cliente são necessários:</p>
//                             <p>Nome (aluno)</p>
//                             <p>Nome (responsável)</p>
//                             <p>Contato (telefone, email, etc.)</p>
//                             <p>Endereço;</p>
//                             <p>Escola;</p>
//                             <p>Turnos;</p>
//                             <p>Dias de corrida (D, S, T, Q, Q, S, S);</p>
//                             <p>Foto</p>

//                             <p>Para fazer seu cadastro no vanSport <a id="cadastro" href="/cadastro">clique aqui</a>, e se junte a uma van:</p>
                            
//                         </details>
//                     </div>

//                     <div className="Rotas">
//                         <h4>Deseja saber as rotas que o vanSport percorre:</h4>
//                         <details>
//                             <summary className="btnRotas"><img src={IconeRotas} /></summary>
//                             <p>Nossos motoristas percorrem as rotas:</p>
//                         </details>
//                     </div>
//                 </div>
//                 <div className="parteDois">
//                     <div className="Chat">
//                         <h4>Deseja falar com o vanSport:</h4>
//                         <details>
//                             <summary className="btnChat"><img src={IconeChat} /></summary>
//                             <p>Para falar conosco <a id="email" href="mailto:someone@example.com">clique aqui</a>, e nos envie um e-mail:</p>
//                         </details>
//                     </div>
                    
//                     <div className="Info">
//                         <h4>Mais informações:</h4>
//                         <details>
//                             <summary className="btnInfo"><img src={IconeInfo} /></summary>
//                             <p> A proposta do VanSport é criar uma rede de busca e comunicação entre os motoristas de</p>
//                             <p>transporte escolar e os responsáveis pelos alunos. O site possui um sistema para o</p>
//                             <p>cadastramento dos motoristas e dos clientes, contando com um sistema de avaliações,</p>
//                             <p>filtros, quadro de avisos e chat direto entre motorista e cliente. A princípio o site</p>
//                             <p>pretende atender apenas estudantes do colégio técnico de Campinas. Por hora, as cidades</p>
//                             <p>onde atuamos são: Campinas, Hortolândia, Monte Mor, Indaiatuba, Valinhos, Vinhedo,</p>
//                             <p>Itatiba, Morungaba, Pedreira, Jaguariúna, Paulínia e Sumaré.</p>
//                         </details>
//                     </div>

//                     <div className="Nos">
//                         <h4>Sobre nós:</h4>
//                         <details>
//                             <summary className="btnNos"><img src={IconeNos} /></summary>
//                             <p>Somos estudante do segundo ano da escola técnica de Campinas,
//                                 fomos convidados a criar um site como projeto pré-tcc (que faremos no próximo ano).
//                                 Ao conversar com colegas, chegamos à conclusão de que a maioria dos alunos que vem de van são de outras cidades,
//                                 por isso, seria bacana fazer um site, onde poderíamos conectar todos os motoristas de van da região,
//                                 e conectá-los com os estudantes que precisam de transporte, assim surgiu o vanSport, 
//                             </p>
//                         </details>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )
//     }
//     render() {
//         return (
//             <Main className="title" title={title}>
//                 {this.renderContent()}
//             </Main>
//         )
//     }
// }
