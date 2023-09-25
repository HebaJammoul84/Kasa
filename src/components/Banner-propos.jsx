import React from 'react';
import '../styles/Banner.css';
import propos from '../assets/propos.png';

const Banner = ({ title }) => {
    return (
        <div className="banner-container">

            <div className="banner-img">
                <img className="banner-image" src={propos} alt={title} />
            </div>

        </div>

    );
};

export default Banner;