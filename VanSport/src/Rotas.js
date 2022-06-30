import React from "react";
import { Route, Routes } from 'react-router';

import Main from './components/template/Main';
import Cadastro from './components/Cadastro/Cadastro';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Ajuda from "./components/Ajuda/Ajuda";
import Buscar from "./components/Buscar/Buscar";

import imgVan from "../src/assets/imagens/van.png"

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="VanSport">
                        <Home />
                    </Main> }
                />
                <Route path='/cadastro' element={<Cadastro />} />
                <Route path='/login' element={<Login />} />
                <Route path='/buscar' element={<Buscar />} />
                <Route path='/ajuda' element={<Ajuda />} />
            <Route from='*' to='/' />
        </Routes>
    )
}