import React from 'react';
import Banner from '../components/Banner-propos';
import propos from '../assets/propos.png';
import Dropdown from '../components/Dropdown';
import '../styles/Propos.css';

const Propos = () => {
    return (
        <div>
            <Banner bannerImg={propos} title="" />

            <div class="Dropdown-Container">
                <Dropdown
                    title="Fiabilité"
                    paragraphe="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                <Dropdown
                    title="Respect"
                    paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Dropdown
                    title="Service"
                    paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Dropdown
                    title="Responsabilité"
                    paragraphe="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </div>

    );
};

export default Propos;