import React from 'react';
import '../styles/Banner.css';
import main from '../assets/main.png';

const Banner = ({ title }) => {
    return (
        <div className="banner-container">

            <div className="banner-img">
                <img className="banner-image" src={main} alt={title} />
            </div>

            <h1 className="banner-title">{title}</h1>

        </div>

    );
};

export default Banner;