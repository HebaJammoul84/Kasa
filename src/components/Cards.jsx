import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = ({ data }) => {
    // Le composant "Cards" prend les données sous forme de prop "data"

  const cardsList = data.map((location) => {
    // Utilise la méthode "map" pour créer une liste de cartes à partir des données

    const { cover, title, id } = location;
    
    return ( 
      <NavLink to={`/Logement/${id}`} key={id}>
        <div className="card">
          <img className="card-image" src={cover} alt={title} />
          <h2 className="card-title">{title}</h2>
        </div>
      </NavLink>
    );
  });

  return <div className="card-container">{cardsList}</div>;
};

export default Cards;