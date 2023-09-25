import React from 'react';
import { useState } from 'react';
import '../styles/Dropdown.css';
import arrow from "../assets/arrow.svg";

const Dropdown = ({ title, paragraphe, wrapClassName}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };

    let display;
    if (isOpen) {
        display = 'block';
    } else {
        display = 'none';
    }

    return (
        <div className={`drop-container ${wrapClassName}`} >

            <div className="drop-header">
                <span>{title}</span>

                <div onClick={handleOnClick}>
                    <img src={arrow} alt="arrow"
                        className={"drop-arrow" + (isOpen ? " drop-arrow-open" : "")}
                    />
                </div>

            </div>

            <div className="drop-box" style={{ display }}>
                <span className="paragraphe">{paragraphe}</span>
            </div>

        </div>

    );
};

export default Dropdown;