import React from 'react';
import './Text.css'

const Text = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    );
};

export default Text;