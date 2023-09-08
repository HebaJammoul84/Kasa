import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Cards.css';

const Cards = () => {
    return (
        <NavLink>
            <div className={style.card}>
                <img className={style.image} />
                <h2 className={style.title}></h2>
            </div>
        </NavLink>
    );
};

export default Cards;