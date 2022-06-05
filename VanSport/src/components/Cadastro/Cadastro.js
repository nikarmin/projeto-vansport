import React, {Component} from 'react';
import { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';
import Main from '../template/Main';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "Cadastro";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "http://localhost:5233/api/cadastro";

const initialState = {
    motorista: { idMotorista: 0, cpf: '', email: '', senha:'', nome: '', 
                 numeroCelular: '', foto: '', cep: '', numero: '',
                 idSexo: 0, idCidade: 0},

    cliente:   { idCliente: 0, cpf: '' , nome: '', email: '', senha:'', 
                 numeroCelular: '',  cep: '', numero: '', foto: '', 
                 idCidade: 0, idTurno: 0, idSexo: 0},

    turno:     { idTurno: 0, nomeTurno: ''},

    lista: []
}

/*const Alunos = [
    { 'id': 1, 'ra': 11111, 'nome': 'André', 'codCurso': 19 },
    { 'id': 2, 'ra': 22222, 'nome': 'Amanda', 'codCurso': 28 },
    { 'id': 3, 'ra': 33333, 'nome': 'Pedro', 'codCurso': 39 },
    { 'id': 4, 'ra': 44444, 'nome': 'Alice', 'codCurso': 59 },
    ];*/


export default class Cadastro extends Component {
    state = {...initialState}

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    limpar(){
        this.setState({ cliente : initialState.cliente,
                        motorista : initialState.motorista,
                        turno : initialState.turno});
    }

    salvar() {
        const motorista = this.state.motorista;
        motorista.cpf = Number(motorista.cpf);
        const metodo = motorista.id ? 'put' : 'post';
        const url = motorista.id ? `${urlAPI}/${motorista.idMotorista}` : urlAPI;

        axios[metodo](url, motorista).then(resp => {
            const lista = this.getListaAtualizada(resp.data)
            this.setState({ cliente : initialState.cliente,
                            motorista : initialState.motorista,
                            turno : initialState.turno})
        }).catch(console.log(Error))
    }

    makeAnimation() {
        const box = document.getElementsByClassName('box');
        
        console.log(box[0].classList.add('withCircle'))
    }

    renderTable()
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

                        <label>Estado:</label>
                        <input
                        type="text"
                        name="uestado"
                        required
                        placeholder="Estado (um select aq)"
                        />

                        <label>Cidade:</label>
                        <input
                        type="text"
                        name="ucidade"
                        required
                        placeholder="Cidade (um select aq)"
                        />

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
                        <input
                        type="text"
                        name="usexo"
                        required
                        placeholder="Sexo (trocar p select)..."
                        />

                        <label>Coloque sua foto (3x4)</label>
                        
                        <label for="files" class="upload-button">Select Image</label>
                        <input id="files" hidden type="file" accept="image/*"/>

                        <input type="submit"></input>

                </form>
            </div>
    )
    }
    render() {
        return (
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
    }
}