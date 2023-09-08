import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/header-logo.svg';
import style from '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div className={style.container} >
        <NavLink to="Home">
          <Logo className={style.logo} />
        </NavLink>
      </div>
      <nav>
        <ul className={style.navbarre}>
          <li>
            <NavLink to="Home">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="Propos">A Propos</NavLink>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
