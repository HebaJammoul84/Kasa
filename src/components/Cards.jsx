import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Cards.css';

const Cards = ({ data }) => {
  // Le composant "Cards" prend les données sous forme de prop "data"
  const cardsList = data.map((location) => {
  // Utilise la méthode "map" pour créer une liste de cartes à partir des données
    const { cover, title, id } = location;
  // Destructuring pour extraire les propriétés "cover", "title" et "id" de chaque emplacement

    return ( // génère un lien de navigation dynamique
             // vers une URL basée sur l'identifiant ID fourni
      <NavLink to={`location/${id}`} key={id}>

        <div class="card">
          <img class="card-image" src={cover} alt={title} />
          <h2 class="card-title">{title}</h2>
        </div>

      </NavLink>
    );
  });

  return <div class="card-container">{cardsList}</div>;
  // Rend la liste complète de cartes dans un conteneur "card-container"
};

export default Cards;