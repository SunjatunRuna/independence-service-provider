import React from 'react';

const Footer = () => {
    return (
        <div className='text-white p-5' style={{backgroundColor: 'red'}}>
            <h6>Follow Us</h6>
            <h3>
                <i className="fa-brands fa-facebook m-2"></i>
                <i className="fa-brands fa-instagram m-2"></i>
                <i className="fa-brands fa-whatsapp m-2"></i>
            </h3>
        </div>
    );
};

export default Footer;