import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import './Cadastro.css';
import axios from 'axios';
import Main from '../template/Main';
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Rotas from '../../Rotas';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "Cadastro";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "https://localhost:7082/api/cidade";
const urlDEPRESSIVA = "https://localhost:7082/api/sexo";
const urlSocorro = "https://localhost:7082/api/motorista";
const urlSuicido = "https://localhost:7082/api/cliente";
const urlMaluquice = "https://localhost:7082/api/turno";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Nunito',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif'
      ].join(','),
    }
  });

const motoristaInitialState = {
    idMotorista: 0, cpf: '', email: '', senha: '', nome: '',
    numeroCelular: '', foto: '', cep: '',
    idSexo: 0, idCidade: 0, endereco: ''
}

const initialState = {
    cliente: {
        idCliente: 0, cpf: '', nome: '', email: '', senha: '',
        numeroCelular: '', cep: '', numero: '', foto: '',
        idCidade: 0, idTurno: 0, idSexo: 0
    },

    turno: { turno: { idTurno: 0, nomeTurno: '' }, lista: [] },

    cidade: { idCidade: 0, nome: '' },

    sexo: { idSexo: 0, sexo: '' },

    lista: [],
}

const initialStateSex = {
    sexo: { idSexo: 0, sexo: '' },
    lista: []
}

const initialStateCity = {
    cidade: { idCidade: 0, nome: '' },
    lista: []
}

export default class Cadastro extends Component {
    state = {
        motorista: motoristaInitialState,
        city: { ...initialStateCity },
        sex: { ...initialStateSex },
        ehMotorista: false,
        cliente: { ...initialState.cliente },
        turno: { ...initialState.turno },
        padrao: { ...initialState.lista }
    }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ padrao: { lista: resp.data } })
            this.setState({ city: { lista: resp.data } })
        });

        axios(urlDEPRESSIVA).then(resp => {
            this.setState({ sex: { lista: resp.data } })
        });

        axios.get(urlMaluquice).then(resp => {
            this.setState({ turno: {lista: resp.data} })
            console.log(resp.data)
        })
    }

    limpar() {
        this.setState({
            cliente: initialState.cliente,
            motorista: motoristaInitialState,
            turno: initialState.turno,
            cidade: initialState.cidade,
            sexo: initialState.sexo
        });
    }

    getListaAtualizada(motorista, add = true) {
        const lista = this.state.padrao.lista.filter(a => a.id !== motorista.idMotorista);
        if (add) lista.unshift(motorista);
        return lista;
    }

    mudarCadastro(e)
    {
        this.setState({ ehMotorista: !this.state.ehMotorista })
    }

    salvar(e) {
        e.preventDefault();
        const novo = this.state[this.state.ehMotorista ? 'motorista' : 'cliente'];

        novo.idCidade = Number(novo.idCidade)
        novo.idSexo = Number(novo.idSexo)
        novo[this.state.ehMotorista ? 'idMotorista' : 'idCliente'] = Number(novo[this.state.ehMotorista ? 'idMotorista' : 'idCliente'])
       
        if (!this.state.ehMotorista) {
            novo.idTurno = Number(novo.idTurno);
        }
            
        const url = this.state.ehMotorista ? urlSocorro : urlSuicido;

        console.log(url, novo)

        axios.post(url, novo).then(resp => {
            const lista = this.getListaAtualizada(resp.data)

            this.setState({
                padrao: {
                    cliente: initialState.cliente,
                    motorista: motoristaInitialState,
                    turno: initialState.turno,
                    cidade: initialState.cidade,
                    sexo: initialState.sexo,
                }, lista
            })
            axios.get()
            // enviar a pessoa para uma página
        }).catch(console.log(Error))

    }

    onFileUpload(event) {
        const { files } = event.target;

        console.log(files[0])

        if(files[0].size <= 50000){ // this.state[motorista]
            const reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = () => {
                console.log("entrou")
                const novo = this.state[this.state.ehMotorista ? 'motorista' : 'cliente'];
                novo.foto = reader.result

                this.setState({ [this.state[this.state.ehMotorista ? 'motorista' : 'cliente']]: { ...novo} })

            }
            console.log(this.state.cliente)
        }
        else{
            alert('Imagem muito grande! papo')
        }
    }

    atualizaCampo(event) {
        const novo = { ...this.state[this.state.ehMotorista ? 'motorista' : 'cliente'] };
        novo[event.target.name] = event.target.value;
        this.setState({ [this.state.ehMotorista ? 'motorista' : 'cliente']: novo });
        console.log(novo)
    }

    makeAnimation() {
        const box = document.getElementsByClassName('box');

        box[0].classList.add('withCircle')
    }
    renderForm() {
        return (
            <div className="box" onMouseEnter={this.makeAnimation}>
                <form className="box-cadastro">
                    <FormControlLabel
                    className="switch"
                    value="bottom"
                    control={<Switch color="warning" />}
                    label="Você é motorista?"
                    labelPlacement="start"
                    onChange = {e => this.mudarCadastro(e)}
                    />

                    <label>{this.state.ehMotorista ? 'Nome do motorista' : 'Nome do cliente'}:</label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        required
                        placeholder={this.state.ehMotorista ? 'Nome do motorista' : 'Nome do cliente'}
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label className="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="Digite seu email"
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>CPF:</label>
                    <input
                        type="text"
                        name="cpf"
                        required
                        placeholder="000.000.000-00"
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        required
                        placeholder="Digite sua senha"
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>Cidade:</label>
                    <select name="idCidade" onChange={e => this.atualizaCampo(e)} value={this.state[this.state.ehMotorista ? 'motorista' : 'cliente'].idCidade}>
                        {this.state.city.lista.map((cidade) =>
                            <option
                                key={cidade.idCidade}
                                value={cidade.idCidade}
                            >{cidade.nome}</option>
                        )}
                    </select>

                    <label>Número de celular:</label>
                    <input
                        type="text"
                        name="numeroCelular"
                        required
                        placeholder="(xx) xxxxx-xxxx"
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>Endereço:</label>
                    <input
                        type="text"
                        name="endereco"
                        required
                        placeholder="Seu endereço..."
                        onChange={e => this.atualizaCampo(e)}
                    />

                    {!this.state.ehMotorista ? (
                        <>
                         <label>Turno:</label>
                         <select name="idTurno" onChange={e => this.atualizaCampo(e)} value={this.state[this.state.ehMotorista ? 'motorista' : 'cliente'].idTurno}>
                        {this.state.turno.lista.map((turno) =>
                            <option
                                key={turno.idTurno}
                                value={turno.idTurno}
                            >{turno.nomeTurno}</option>
                        )}
                        </select>
                        </>
                    ) : <></>
                    }

                    {!this.state.ehMotorista ? (
                        <>
                         <label>Número da casa:</label>
                         <input
                        type="text"
                        name="numero"
                        required
                        placeholder="123"
                        onChange={e => this.atualizaCampo(e)}
                        />
                        </>
                    ) : <></>
                    }

                    <label>CEP:</label>
                    <input
                        type="text"
                        name="cep"
                        required
                        placeholder="Seu CEP..."
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>Sexo:</label>
                    <select name="idSexo" onChange={e => this.atualizaCampo(e)} value={this.state[this.state.ehMotorista ? 'motorista' : 'cliente'].idSexo}>
                        {this.state.sex.lista.map((s) =>
                            <option
                                key={s.idSexo}
                                value={s.idSexo}
                            >{s.sexo}</option>
                        )}
                    </select>

                    <label>Coloque sua foto (3x4)</label>

                    <label htmlFor="files" className="upload-button">Select Image</label>
                    <input
                        id="files"
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={e => this.onFileUpload(e)}
                    />

                    <input
                    type="submit" 
                    onClick={e => this.salvar(e) }
                    />

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