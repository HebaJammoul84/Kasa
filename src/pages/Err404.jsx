import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Error.css';


const Err404 = () => {
    return (
        <div className={style.container}>

            <div className={style.text}>
                <span className={style.error}>404</span>
                <span className={style.errorMessage}>
                    Oups! La page que vous demandez n'existe pas.
                </span>
            </div>
            
            <NavLink to="Home" className={style.ToHome}>
                Retourner sur la page d'accueil
            </NavLink>

        </div>
    );
};

export default Err404;