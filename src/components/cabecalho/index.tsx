import React from "react";
import './style.css'
import logo from '../../assets/img/logo.jpg'
import Menu from "./menu";
const Cabecalho = () => {
    return (
        <>
            <div className="cabecalho">
                <div className="menu">
                    <img className="logo" src={logo} />
                </div>
                <Menu />
            </div>

        </>
    )
}

export default Cabecalho;