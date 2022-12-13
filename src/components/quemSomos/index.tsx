import React from "react";
import './style.css'
import Pessoas from './pessoa'
const QuemSomos = () => {
    return (
        <section className="quem-somos">
            <h3 className="quem-somos__titulo">Quem somos</h3>
            <p className="quem-somos__descricao">Conheça a comunidade por trás da iniciativa</p>

            <Pessoas />

        </section>
    )
}

export default QuemSomos