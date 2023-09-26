import React from 'react';
import { ReactComponent as StarIcon } from '../assets/star.svg';
import '../styles/Rating.css';

const Rating = ({ rating }) => {
  const maxRating = 5; // Nombre maximum d'étoiles possibles

  // Conversion de la prop "rating" en un nombre entier (base 10)
  const numberOfStars = parseInt(rating, 10);
  const numberOfEmptyStar = maxRating - numberOfStars; // les étoiles vides

  // Création d'un tableau d'icônes d'étoiles pleines en utilisant Array.from
  const starIcons = Array.from({ length: numberOfStars }, (_, i) => (
    <StarIcon key={i} className="star" />
  ));
  const emptyStarIcons = Array.from({ length: numberOfEmptyStar }, (_, i) => (
    <StarIcon key={i} className="empty-star" />
  ));

  return (
    <div className="rate-container">
      {starIcons}
      {emptyStarIcons}
    </div>
  );
};

export default Rating;