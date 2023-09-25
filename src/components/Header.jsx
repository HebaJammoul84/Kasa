import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/header-logo.svg';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="home">
          <Logo fill="#FF6060" className="header-logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="navbarre">
          <li>
            <NavLink to="home">Accueil</NavLink>
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
