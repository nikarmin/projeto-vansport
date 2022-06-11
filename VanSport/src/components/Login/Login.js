import React, { Component } from 'react';
import { useState } from 'react';
import './Login.css';
import Main from '../template/Main';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "Login";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "http://localhost:5233/api/aluno";

const initialState = {
    cliente: {
        idCliente: 0, cpf: '', nome: '', email: '', senha: '',
        numeroCelular: '', cep: '', numero: '', foto: '',
        idCidade: 0, idTurno: 0, idSexo: 0
    },

    idMotorista: 0, cpf: '', email: '', senha: '', nome: '',
    numeroCelular: '', foto: '', cep: '',
    idSexo: 0, idCidade: 0, endereco: '',

    lista: []
}

/*const Alunos = [
    { 'id': 1, 'ra': 11111, 'nome': 'André', 'codCurso': 19 },
    { 'id': 2, 'ra': 22222, 'nome': 'Amanda', 'codCurso': 28 },
    { 'id': 3, 'ra': 33333, 'nome': 'Pedro', 'codCurso': 39 },
    { 'id': 4, 'ra': 44444, 'nome': 'Alice', 'codCurso': 59 },
    ];*/

export default class Login extends Component {
    state = { ...initialState }
    
    makeAnimation() {
        const box = document.getElementsByClassName('box-login');

        console.log(box[0].classList.add('withCircle'))
    }

    renderTable() {
        return (
            <div className="box-login" onMouseEnter={this.makeAnimation}>
                <form className="box-cadastro">

                    <label className="email">Email:</label>
                    <input
                        type="text"
                        name="uemail"
                        required
                        placeholder="Digite seu email"
                        value= "xi"
                    />

                    <label>Senha:</label>
                    <input
                        type="text"
                        name="upassword"
                        required
                        placeholder="Digite sua senha"
                        value="xi"
                    />

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