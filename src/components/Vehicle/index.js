import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    return (
        <div className="vehicle-container">
            <img className="vehicle" src={props.image} alt="vehicle" />
        </div>
    );
};

export default Vehicle;