import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='p-3 m-0 row'>
            <div className='col-lg-3'>Creative</div>
            <div className='col-lg-9 text-end'>
                <nav>
                    <Link to="/" className='menu'>Home</Link>
                    <Link to="/about" className='menu'>About</Link>
                    <Link to="/blogs" className='menu'>Blogs</Link>
                    <Link to="/checkout" className='menu'>Checkout</Link>
                    <Link to="/login" className='menu'>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;