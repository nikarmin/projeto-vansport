import React, {Component} from 'react';
import { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';
import Main from '../template/Main';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "Cadastro";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "https://localhost:7082/api/cidade";      // perguntar tal coisa
const urlDEPRESSIVA = "https://localhost:7082/api/sexo";

const initialState = {
    motorista: { idMotorista: 0, cpf: '', email: '', senha:'', nome: '', 
                 numeroCelular: '', foto: '', cep: '', numero: '',
                 idSexo: 0, idCidade: 0},

    cliente:   { idCliente: 0, cpf: '' , nome: '', email: '', senha:'', 
                 numeroCelular: '',  cep: '', numero: '', foto: '', 
                 idCidade: 0, idTurno: 0, idSexo: 0},

    turno:     { idTurno: 0, nomeTurno: ''},

    cidade:    { idCidade: 0, nome: ''},

    sexo:      { idSexo: 0, sexo: ''},

    lista: []
}

const initialStateSex = {
    sexo: { idSexo: 0, sexo: ''},
    lista: []
}

const initialStateCity = {
    cidade: { idCidade: 0, nome: ''},
    lista: []
}

/*const Alunos = [
    { 'id': 1, 'ra': 11111, 'nome': 'André', 'codCurso': 19 },
    { 'id': 2, 'ra': 22222, 'nome': 'Amanda', 'codCurso': 28 },
    { 'id': 3, 'ra': 33333, 'nome': 'Pedro', 'codCurso': 39 },
    { 'id': 4, 'ra': 44444, 'nome': 'Alice', 'codCurso': 59 },
    ];*/


export default class Cadastro extends Component {
    state = {
        padrao: {...initialState},
        city: {...initialStateCity},
        sex: {...initialStateSex}
    }
    stateCity = {...initialStateCity}
    stateSex = {...initialStateSex}

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({padrao: { lista: resp.data }})
            this.setState({city: { lista: resp.data }})
            console.log(this.state.padrao, this.state.city)
        });
        
        axios(urlDEPRESSIVA).then(resp => {
            this.setState({sex: { lista: resp.data }})
            console.log( this.state.sex)
        });
    }

    limpar(){
        this.setState({ cliente : initialState.cliente,
                        motorista : initialState.motorista,
                        turno : initialState.turno,
                        cidade : initialState.cidade,
                        sexo : initialState.sexo});
    }

    salvar() {
        const motorista = this.state.motorista;
        motorista.cpf = Number(motorista.cpf);
        const metodo = motorista.id ? 'put' : 'post';
        const url = motorista.id ? `${urlAPI}/${motorista.idMotorista}` : urlAPI;

        axios[metodo](url, motorista).then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            this.setState({padrao: { cliente : initialState.cliente,
                            motorista : initialState.motorista,
                            turno : initialState.turno,
                            cidade : initialState.cidade,
                            sexo : initialState.sexo}})
        }).catch(console.log(Error))
    }

    makeAnimation() {
        const box = document.getElementsByClassName('box');
        
        console.log(box[0].classList.add('withCircle'))
    }

    renderForm()
    {
        return (
            <div className="box" onMouseEnter={this.makeAnimation}>
                <form className="box-cadastro">

                        <label>Nome do motorista: </label>
                        <input
                        type="text"
                        name="uname"
                        required
                        placeholder="Nome do motorista"
                        />

                        <label className="email">Email:</label>
                        <input
                        type="text"
                        name="uemail"
                        required
                        placeholder="Digite seu email"
                        />

                        <label>CPF:</label>
                        <input
                        type="text"
                        name="ucpf"
                        required
                        placeholder="000.000.000-00"
                        />

                        <label>Senha:</label>
                        <input
                        type="text"
                        name="upassword"
                        required
                        placeholder="Digite sua senha"
                        />

                        <label>Cidade:</label>
                        <select>
                            {this.state.city.lista.map((cidade) =>
                                <option>{cidade.nome}</option>
                            )}
                        </select>

                        <label>Número de celular:</label>
                        <input
                        type="text"
                        name="unumero"
                        required
                        placeholder="(xx) xxxxx-xxxx"
                        />

                        <label>Endereço:</label>
                        <input
                        type="text"
                        name="uendereco"
                        required
                        placeholder="Seu endereço..."
                        />

                        <label>Sexo:</label>
                        <select>
                            {this.state.sex.lista.map((sexo) =>
                                <option>{sexo.sexo}</option>
                            )}
                        </select>

                        <label>Coloque sua foto (3x4)</label>
                        
                        <label class="upload-button">Select Image</label>
                        <input id="files" hidden type="file" accept="image/*"/>

                        <input type="submit" onClick={e => this.salvar(e)}></input>

                </form>
            </div>
    )
    }
    render() {
        return (
            <Main title={title}>
                {this.renderForm()}
            </Main>
        )
    }
}