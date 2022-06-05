import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
//import Main from './components/template/Main';
import Footer from './components/template/Footer';
//import CrudAluno from './components/CrudAluno/CrudAluno';

import Routes from './Rotas';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Logo />
        <Menu />
        <Routes />
        <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
