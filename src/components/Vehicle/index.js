import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    return (
        <div className={props.names} >
            <img className="vehicle" src={props.image} alt="vehicle" />
            <p className="reason">{props.reason}   </p>
        </div>
    );
};

export default Vehicle;