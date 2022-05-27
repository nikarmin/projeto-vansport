import './Logo.css';

import React from 'react';
import logo from '../../assets/imagens/logo_vansport.png';

export default function Logo(props) {
    return ( 
    <aside className = "logo" >
        <a href="/" className="logo">
            <img src={logo} alt="logo"></img>
        </a>
        </aside>
    )
}