import React from 'react';
import { ReactComponent as Logo } from '../assets/footer-logo.svg';
import style from '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className={style.container}>
                <Logo className={style.logo} />
                <p className={style.text} >© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;