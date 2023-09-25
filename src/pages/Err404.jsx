import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Error.css';


const Err404 = () => {
    return (
        <div className="error-container">

            <div className="error-text">
                <span className="error">404</span>
                <span className="errorMessage">
                    Oups! La page que vous demandez n'existe pas.
                </span>
            </div>
            
            <NavLink to="/Home" className="to-home">
                Retourner sur la page d'accueil
            </NavLink>

        </div>
    );
};

export default Err404;