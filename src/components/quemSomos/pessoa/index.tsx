import React from "react";
import './style.css'

import roberta from '../../../assets/img/pessoas/roberta.jpg'
import andreia from '../../../assets/img/pessoas/andreia.jpg'
import marcela from '../../../assets/img/pessoas/marcela.jpg'


const Pessoas = () => {
    const pessoas = [
        {
            imagem: `${roberta}`,
            nome: 'Roberta',
            funcao: 'Conteudo'
        },
        {
            imagem: `${andreia}`,
            nome: 'Andréia',
            funcao: 'Produtora'
        },
        {
            imagem: `${marcela}`,
            nome: 'marcela',
            funcao: 'Chef de cozinha'
        },
    ]
    return (
        <div className="pessoas">
            {pessoas.map((pessoa) => (
                <div className="pessoa">
                    <img className="pessoa__imagem" src={pessoa.imagem} />
                    <span className="pessoa__nome">{pessoa.nome}</span>
                    <span className="pessoa__funcao">{pessoa.funcao}</span>
                </div>
            ))}

        </div>
    )
}

export default Pessoas