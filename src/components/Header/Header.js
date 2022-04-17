import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-3 m-0 row'>
            <div className='col-lg-3'>Creative</div>
            <div className='col-lg-9 text-end'>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log in</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;