import React from "react";
import BotaoReceita from "./receitas-botao";
import './style.css'

import kiwi from '../../assets/img/receitas/salada-de-kiwi.jpg';
import beterraba from '../../assets/img/receitas/beterrabas-assadas.jpg';
import mix from '../../assets/img/receitas/mix-de-vegetais.jpg';
import pimentao from '../../assets/img/receitas/pimentoes-a-juliana.jpg';

import oriental from '../../assets/img/receitas/prato-oriental.jpg';

import abacate from '../../assets/img/receitas/tigela-de-abacate.jpg'



const srcReceitas =
    [
        {
            srcImg: `${beterraba}`,
            titulo: 'Beterrabas assadas',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        },
        {
            srcImg: `${mix}`,
            titulo: 'Mix de vegetais',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        },
        {
            srcImg: `${pimentao}`,
            titulo: 'Pimentões à Juliana',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        },
        {
            srcImg: `${oriental}`,
            titulo: 'Prato oriental',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        },
        {
            srcImg: `${kiwi}`,
            titulo: 'Salada de Kiwi',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        },
        {
            srcImg: `${abacate}`,
            titulo: 'Tigela de abacate',
            descricao: 'Receita refrescante e cheia de vitaminas para seu café da manhã.'
        }
    ]






const Receitas = () => {
    return (
        <div className="receitas">
            {srcReceitas.map((receita) => (
                <div className="receita">
                    <img className="receita__imagem" src={receita.srcImg} />
                    <div className="receita__conteudo">
                        <h4 className="receita__titulo">{receita.titulo}</h4>
                        <p className="receita__descricao">{receita.descricao}</p>
                        <BotaoReceita />

                    </div>
                </div>
            ))}
        </div>



    )
}

export default Receitas