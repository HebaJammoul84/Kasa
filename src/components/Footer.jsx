import React from 'react';
import { ReactComponent as Logo } from '../assets/footer-logo.svg';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <Logo class="footer-logo" />
                <p class="footer-text" >© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;