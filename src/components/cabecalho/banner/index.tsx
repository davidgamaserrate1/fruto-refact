import React from "react";
import bannerImg from '../../../assets/img/banner.jpg'
const Banner = () => {
    return (
        <div className="banner">
            <img className="banner__imagem" src={bannerImg} />
        </div>
    )
}

export default Banner