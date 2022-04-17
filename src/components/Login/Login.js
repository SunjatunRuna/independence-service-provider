import React, { useState } from 'react';
import avatar from './avatar-default-icon.png'
import google from './kisspng-google-logo-googleplex-google-search-5b2cd7fd2d3570.5263877415296655331852.jpg'
import './Login.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.init';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailHandle = event =>{
        setEmail(event.target.value);
    }
    const passwordHandle = event =>{
        setPassword(event.target.value);
    }
    const submitButton = event =>{
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className='border border-0 shadow-lg mt-5 py-5 w-25 mx-auto rounded'>
            <div className="login-title mb-5 text-info">
                <img src={avatar} className="img-fluid w-25" alt="" />
            </div>
            <form onSubmit={submitButton} className=''>
                <p className='text-start ps-5'>Email:</p>
                <input onBlur={emailHandle} type="email" className='p-2 w-75  mb-4' /> <br />
                <p className='text-start ps-5'>Password:</p>
                <input onBlur={passwordHandle} type="password" className='p-2 w-75 mb-2' name="password" id="" /><br />
                <button className='w-25 py-2 me-3 border border-0 px-2 mb-5 rounded bg-primary text-white mt-3'>Login</button>
                <button className='w-25 px-2 border border-0 mb-5 rounded'><img src={google} className="img-fluid" alt="" /></button>
                <p>
                    If you don't have an account? <Link to='/signup'>Create new</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;