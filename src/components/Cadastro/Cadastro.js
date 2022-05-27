import React, {Component} from 'react';
import './CrudAluno.css';
import Main from '../template/Main';

const title = "Cadastro";

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
            <div className="listagem">
                <table className="listaAlunos" id="tblListaAlunos">
                    <thead>
                        <tr className="cabecTabela">
                            <th className="tabTituloRa">Ra</th>
                            <th className="tabTituloNome">Nome</th>
                            <th className="tabTituloCurso">Curso</th>
                        </tr>
                    </thead>

            
        </table>
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