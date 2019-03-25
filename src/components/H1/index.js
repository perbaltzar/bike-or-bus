import React from 'react';
import './H1.css';

const H1 = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    );
};

export default H1;