import React, {Component} from 'react';
import './Cadastro.css'
import Main from '../template/Main';

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

    renderTable()
    {
        return (
            <div className="box">
                <form className="box-cadastro">
                    
                        <label>Nome do motorista: </label><br></br>
                        <input type="text" name="uname" required></input> <br></br>

                        <label>Email:</label><br></br>
                        <input type="text" name="uemail" required></input><br></br>

                        <label>CPF:</label> <br></br>
                        <input type="text" name="ucpf" required></input><br></br>

                        <label>Senha:</label><br></br>
                        <input type="text" name="upassword" required></input> <br></br>

                        <input type="file" id="myFile" name="filename"></input> <br></br>
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