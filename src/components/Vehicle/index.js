import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    return (
        < div className={props.names} >
            <img className="vehicle" src={props.image} alt="vehicle" />
        </div>
    );
};

export default Vehicle;