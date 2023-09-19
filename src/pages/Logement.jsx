import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import '../styles/Logement.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDataId from '../datas/useDataId';


const Logement = () => {

    // Utilisation du hook useParams pour obtenir l'ID de l'emplacement depuis l'URL
    const { locationId } = useParams();

    // Utilisation du hook useNavigate pour gérer la navigation
    const navigate = useNavigate();

    // Déclaration de l'état local "locations" avec des valeurs initiales vides
    const [locations, setLocations] = useState({
        title: '',
        location: '',
        host: { name: '', picture: '' },
        rating: '',
        tags: [],
        description: '',
        equipments: [],
        pictures: [],
    });

    // Extraction des valeurs de "locations" pour un accès plus facile
    const {
        title,
        location,
        host,
        rating,
        tags,
        description,
        equipments,
        pictures,
    } = locations;

    // Appel au hook personnalisé useDataId pour obtenir 
    //les données de l'emplacement correspondant
    const matchedLocation = useDataId(locationId);


    // Utilisation du hook useEffect pour gérer les effets 
    //secondaires lors du chargement du composant
    useEffect(() => {
        if (!matchedLocation) { // Vérifier si non défini ou vide
            navigate('/Err404');
        } else {

            // Mettre à jour l'état local "locations" avec les données de matchedLocation
            setLocations(matchedLocation);
        }
        // Déclenchement de l'effet lorsque matchedLocation ou navigate changent
    }, [matchedLocation, navigate]);

    // Création d'une liste d'équipements à partir du tableau "equipments"
    const equitments = equipments.map((equip) => <li key={equip}>{equip}</li>);


    return (
        <div>
            {/* Affichage du composant Carousel avec les images et la description */}
            <Carousel imageArray={pictures} description={description} />

            <div class="dropdown-container">
                <Dropdown
                    title="Description"
                    paragraphe={description}
                />

                <Dropdown
                    title="Equipments"
                    paragraphe={equipments}
                />

            </div>
        </div>
    );
};
export default Logement;