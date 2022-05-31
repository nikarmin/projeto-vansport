import React, {Component} from 'react';
import { useState } from 'react';
import './Cadastro.css';
import Main from '../template/Main';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "CADASTRO";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "http://localhost:5233/api/aluno";
const initialState = {
    aluno: { id: 0, ra: '', nome:'', codCurso: 0},
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

                        <label>Email:</label>
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
                        placeholder="ESTADO TOP"
                        />

                        <label>Cidade:</label>
                        <input
                        type="text"
                        name="ucidade"
                        required
                        placeholder="CIDADE TOP"
                        />

                        <label>Número de celular:</label>
                        <input
                        type="text"
                        name="unumero"
                        required
                        placeholder="(xx) xxxxx-xxxx"
                        />

                        <label>Coloque sua foto (3x4)</label>
                        <input type="file" id="myFile" name="filename" hidden></input>
                        <label className="upload-button">Escolha seu arquivo... <span>&#128187;</span></label>
                        <input type="submit"></input>

                </form>
            </div>
    )
    }
    render() {
        // window.onload = () => {makeAnimation()}

        return (
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
    }
}