import React from 'react';
import { ReactComponent as Logo } from '../assets/footer-logo.svg';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <Logo className="footer-logo" />
                <div className="footer-text">
                <p>© 2020 Kasa. All </p>
                <p>rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;