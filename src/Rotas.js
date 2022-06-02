import React from "react";
import { Route, Routes } from 'react-router';

import Main from './components/template/Main';
import CrudAluno from './components/CrudAluno/CrudAluno';
import Cadastro from './components/Cadastro/Cadastro';
import Login from "./components/Login/Login";

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div> Cadastro de alunos, cursos e carômetro </div>
                    </Main> }
                />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
            <Route from='*' to='/' />
        </Routes>
    )
}