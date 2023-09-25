import React, { useState } from 'react';
import { ReactComponent as LeftArrow } from '../assets/arrowLeft.svg';
import { ReactComponent as RightArrow } from '../assets/arrowRight.svg';
import '../styles/Carousel.css';

const Carousel = ({ imageArray, desc }) => {
    // Utilisation de useState pour gérer l'index de l'image actuelle
    const [currentIndex, setCurrentIndex] = useState(0);

    // Afficher les flèches uniquement si le tableau d'images a plus d'une image
    const displayArrow = imageArray.length > 1;

    // Fonction pour obtenir l'index de l'image suivante
    const getNextIndex = (currentIndex, arrayLength) => {
        return currentIndex < arrayLength - 1 ? currentIndex + 1 : 0;
    };

    // Fonction pour obtenir l'index de l'image précédente
    const getPrevIndex = (currentIndex, arrayLength) => {
        return currentIndex > 0 ? currentIndex - 1 : arrayLength - 1;
    };

    // Fonction pour passer à l'image suivante
    const next = () =>
        setCurrentIndex((prevIndex) => getNextIndex(prevIndex, imageArray.length));

    // Fonction pour passer à l'image précédente
    const previous = () =>
        setCurrentIndex((prevIndex) => getPrevIndex(prevIndex, imageArray.length));

    return (
        <div className="carousel-container">
             {/* Affichage de l'image actuelle */}
            <img src={imageArray[currentIndex]} alt={desc} />

            {/* Afficher les flèches et les numéros de diapositives si nécessaire */}
            {displayArrow && ( 
                <>
                    <div className="arrow-container">
                        <LeftArrow onClick={previous} className="arrow" />
                        <RightArrow onClick={next} className="arrow"/>
                    </div>

                    <div className="index-container">
                        {/* Afficher le numéro de diapositive actuel parmi le total */}
                        <span>{`${currentIndex + 1}/${imageArray.length}`}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;