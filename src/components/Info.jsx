import React from 'react';
import Rating from './Rating';
import Tags from './Tags';
import '../styles/Info.css';

const Info = ({ title, location, name, picture, tagList, rating }) => {
    return (
        <div className="info-container">

            <div className="title-tag-container">
                <div className="title-container">
                    <h1>{title}</h1>
                    <h2>{location}</h2>
                </div>
                <Tags tagList={tagList} />
            </div>

            <div className="profile-container">
                <div className="profile">
                    <span>{name}</span>
                    <img src={picture} alt={name} />
                </div>

                <Rating rating={rating} />
            </div>

        </div>
    );
};

export default Info;