import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './components/template/Logo';
import Menu from './components/template/Menu';
import Footer from './components/template/Footer';

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
