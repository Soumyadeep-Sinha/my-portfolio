import React from 'react';
const date = new Date();
const year = date.getFullYear();
const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright <span role='img' aria-label='copyright' >©️</span> - {year}, Soumyadeep Sinha</p>
        </div>
    );
}

export default Footer;