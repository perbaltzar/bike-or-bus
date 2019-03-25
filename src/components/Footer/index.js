import React from 'react';
import './Footer.css';
const Footer = (props) => {
    return (
        <div className="footer">
            <div>
            Source: <a href="https://www.smhi.se/klimatdata"> SMHI </a>
            {props.text}
            </div>
        </div>
    );
};

export default Footer;