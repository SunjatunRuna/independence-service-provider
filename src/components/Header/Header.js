import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './430-4304156_do-you-own-a-restaurant-catering-company-food-removebg-preview.png';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'

const Header = () => {
    const [user] = useAuthState(auth);
    const singOutButton = () =>{
        signOut(auth)
    }
    return (
        <div className='p-3 m-0 row'>
            <div className='col-lg-3'><img src={logo} className='img-fluid' style={{width: '80px'}} alt="" />
            Deli<span style={{color: 'red'}}>C</span>iou<span style={{color: 'red'}}>S</span></div>
            <div className='col-lg-9 text-end'>
                <nav>
                    <Link to="/" className='menu'>Home</Link>
                    <Link to="/about" className='menu'>About</Link>
                    <Link to="/blogs" className='menu'>Blogs</Link>
                    <Link to="/checkout" className='menu'>Checkout</Link>
                    {
                        user?
                        <button onClick={singOutButton} className='border border-0 bg-white text-secondary'>Sign Out</button>
                        :
                        <Link to="/login" className='menu'>Login</Link>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;