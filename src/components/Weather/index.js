import React from 'react';
import './Weather.css';

const Weather = (props) => {
    return (
        <div className="weather">
            <h2 className={props.active ? 'active' : 'inactive'}>{props.temperatur} °C</h2>
            <img className={props.active ? 'active' : 'inactive'} src={props.weather} alt="weather"/>
        </div>
    );
};

export default Weather;