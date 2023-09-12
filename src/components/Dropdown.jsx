import React from 'react';
import { useState } from 'react';
import '../styles/Dropdown.css';
import arrow from "../assets/arrow.svg";

const Dropdown = ({ title, paragraphe }) => {
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
        <div class="drop-container" >

            <div class="drop-header">
                <span>{title}</span>

                <div onClick={handleOnClick}>
                    <img src={arrow} alt="arrow"
                        class={"drop-arrow" + (isOpen ? " drop-arrow-open" : "")}
                    />
                </div>

            </div>

            <div class="drop-box" style={{ display }}>
                <span class="paragraphe">{paragraphe}</span>
            </div>

        </div>

    );
};

export default Dropdown;