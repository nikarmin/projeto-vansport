import './Menu.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

//                 <FontAwesomeIcon icon={faMagnifyingGlass}/>

export default function Menu(props) {
    return (
        <nav className='menu'>
            <Link to="/">
                Home
            </Link>
            
            <Link to="/buscar">
                Buscar 
            </Link>

            <Link to="/cadastro">
                Cadastro
            </Link>

            <Link to="/login">
                Login
            </Link>

            <Link to="/ajuda">
                Ajuda
            </Link>
        </nav>
    )
}