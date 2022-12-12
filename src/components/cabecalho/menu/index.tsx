import React from "react";
import './style.css'

const Menu = () => {
    return (
        <ul className="menu__lista">
            <li className="menu__item"> <a className="menu__link ativo" href="#">Início</a> </li>
            <li className="menu__item"> <a className="menu__link" href="#">Receitas</a> </li>
            <li className="menu__item"> <a className="menu__link" href="#">Quem somos</a> </li>
            <li className="menu__item"> <a className="menu__link" href="#">Comunidade</a> </li>
        </ul>
    )
}

export default Menu;