import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Error.css';


const Err404 = () => {
    return (
        <div class="error-container">

            <div class="error-text">
                <span class="error">404</span>
                <span class="errorMessage">
                    Oups! La page que vous demandez n'existe pas.
                </span>
            </div>
            
            <NavLink to="/Home" class="to-home">
                Retourner sur la page d'accueil
            </NavLink>

        </div>
    );
};

export default Err404;