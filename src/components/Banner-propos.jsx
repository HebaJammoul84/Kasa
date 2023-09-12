import React from 'react';
import '../styles/Banner.css';
import propos from '../assets/propos.png';

const Banner = ({ title }) => {
    return (
        <div class="banner-container">

            <div class="banner-img">
                <img class="banner-image" src={propos} alt={title} />
            </div>

        </div>

    );
};

export default Banner;