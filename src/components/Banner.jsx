import React from 'react';
import style from '../styles/Banner.css';
import img1 from '../assets/img1.png';

const Banner = ({ bannerImg , title }) => {
    return (
        <div className={style.container}>

            <div className={style.image}>
                <img className={style.bannerImg} src={img1} alt={title} />
            </div>

            <h1 className={style.title}>{title}</h1>

        </div>

    );
};

export default Banner;