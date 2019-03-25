import React from 'react';
import './Weather.css';

const Weather = (props) => {
    return (
        <div className="weather">
            <h2>{props.temperatur} °C</h2>
            <img src={props.weather} alt="weather"/>
        </div>
    );
};

export default Weather;