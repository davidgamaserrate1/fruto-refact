import React from "react";
import bannerImg from '../../assets/img/banner.jpg'
import './style.css'

const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__imagem" src={bannerImg} />
            <h2 className="banner__titulo">Reaproveite melhor os alimentos!</h2>
        </div>
    )
}

export default Banner