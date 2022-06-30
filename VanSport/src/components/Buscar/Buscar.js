import React, { Component } from 'react';
import { useState } from 'react';
import './Buscar.css';
import Main from '../template/Main';
const title = "Buscar";

export default class Buscar extends Component {
    renderTable() {
        return (
            <div className="buscar">
                <p>buscar...</p>
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