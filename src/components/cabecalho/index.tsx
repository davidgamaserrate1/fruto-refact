import React from "react";
import './style.css'
import logo from '../../assets/img/logo.jpg'
import Menu from "./menu";

const Cabecalho = () => {
    return (
        <header className="cabecalho">
            <div className="menu">
                <img className="logo" src={logo} />
            </div>
            <Menu />
        </header>
    )
}

export default Cabecalho;