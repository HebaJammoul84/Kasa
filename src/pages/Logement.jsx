import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Info from '../components/Info';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../assets/Backend-data.json';
import '../styles/Logement.css';


const Logement = () => {

    const { locationId } = useParams();
    const [logement, setLogement] = useState();
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(data)
        console.log(locationId)
        console.log(data.find(log => log.ID === locationId))
        setLogement(data.find(log => log.ID === locationId))
        setLoading(false)
    });

    for (let logement of data) {
        if (logement.id === locationId) {
            return logement
        }}


    if (Loading) {
        return <div> Loading...... </div>
    }

    return (
        <div>
            <Carousel imageArray={logement.pictures} description={logement.description} />

            <Info
                title={logement.title}
                location={logement.location}
                name={logement.host.name}
                picture={logement.host.picture}
                tagList={logement.tags}
                rating={logement.rating}
            />

            <div className="dropdown-container">
                <Dropdown
                    title="Description"
                    paragraphe={logement.description}
                    wrapClassName="drop-down"
                />
                <Dropdown
                    title="Equipments"
                    paragraphe={logement.equipments}
                    wrapClassName="drop-down"
                />
            </div>
        </div>
    );
};
export default Logement;