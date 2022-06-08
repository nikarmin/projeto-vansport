import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import './Cadastro.css';
import axios from 'axios';
import Main from '../template/Main';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
const title = "Cadastro";

// Arrumar isso para o BD de Motorista/Cliente
const urlAPI = "https://localhost:7082/api/cidade";      // perguntar tal coisa
const urlDEPRESSIVA = "https://localhost:7082/api/sexo";
const urlSocorro = "https://localhost:7082/api/motorista"

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

    turno: { idTurno: 0, nomeTurno: '' },

    cidade: { idCidade: 0, nome: '' },

    sexo: { idSexo: 0, sexo: '' },

    lista: []
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
        sex: { ...initialStateSex }
    }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ padrao: { lista: resp.data } })
            this.setState({ city: { lista: resp.data } })
        });

        axios(urlDEPRESSIVA).then(resp => {
            this.setState({ sex: { lista: resp.data } })
        });
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

    salvar(e) {
        e.preventDefault();
        const motorista = this.state.motorista;
        console.log(motorista)

        motorista.idCidade = Number(motorista.idCidade)
        motorista.idSexo = Number(motorista.idSexo)
        motorista.idMotorista = Number(motorista.idMotorista)
        const metodo = motorista.idMotorista ? 'put' : 'post';
        const url = motorista.idMotorista ? `${urlSocorro}/${motorista.idMotorista}` : urlSocorro;

        axios[metodo](url, motorista).then(resp => {
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

        }).catch(console.log(Error))

    }

    atualizaCampo(event) {
        const motorista = { ...this.state.motorista };
        motorista[event.target.name] = event.target.value;
        this.setState({ motorista });
        console.log(motorista)
    }

    makeAnimation() {
        const box = document.getElementsByClassName('box');

        box[0].classList.add('withCircle')
    }

    fileUpload(e){
        
        const { files } = e.target;

        console.log(files[0].name);

        if(files[0].size <= 50000){
            console.log("MEU DEUS MEU SENHRO")
            const motorista = { ...this.state.motorista };

            const reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onload = () => {
                const img = reader.result;
                motorista.foto = img;
                this.setState({ motorista })
                console.log(this.state.motorista)
            }
        }
        else{
            alert('Imagem muito grande! papo')
        }

        /*let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        this.state.motorista.foto = reader.onload;
        reader.onload=(e)=>{
            console.warn("img datra INDSAIUDB", e.target.result);
        }*/
    }

    renderForm() {
        return (
            <div className="box" onMouseEnter={this.makeAnimation}>
                <form className="box-cadastro">

                    <label>Nome do motorista: </label>
                    <input
                        id="nome"
                        type="text"
                        name="nome"
                        required
                        placeholder="Nome do motorista"
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
                    <select name="idCidade" onChange={e => this.atualizaCampo(e)} value={this.state.motorista.idCidade}>
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

                    <label>CEP:</label>
                    <input
                        type="text"
                        name="cep"
                        required
                        placeholder="Seu CEP..."
                        onChange={e => this.atualizaCampo(e)}
                    />

                    <label>Sexo:</label>
                    <select name="idSexo" onChange={e => this.atualizaCampo(e)} value={this.state.motorista.idSexo}>
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
                        onChange={e => this.fileUpload(e)}
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