import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import avatar from './avatar-default-icon.png';
import './Login.css';
import {  GoogleAuthProvider } from "firebase/auth";
import { Link } from 'react-router-dom';
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleSignIn from './GoogleSignIn';


const Login = () => {
    const googleProvider = new GoogleAuthProvider()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user, error
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailHandle = event =>{
        setEmail(event.target.value);
    }
    const passwordHandle = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace: true});
    }
    const submitButton = event =>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='border border-0 shadow-lg mt-5 py-5 w-25 mx-auto rounded'>
            <div className="login-title mb-5 text-info">
                <img src={avatar} className="img-fluid w-25" alt="" />
            </div>
            <form onSubmit={submitButton} className=''>
                <p className='text-start ps-5'>Email:</p>
                <input onBlur={emailHandle} type="email" className='p-2 w-75  mb-4' required/> <br />
                <p className='text-start ps-5'>Password:</p>
                <input onBlur={passwordHandle} type="password" className='p-2 w-75 mb-2' name="password" id="" required/><br />
                <p style={{color: 'red'}}>{error?.message}</p>
                <button className='w-25 py-2 me-3 border border-0 px-2 mb-5 rounded bg-primary text-white mt-3'>Login</button>
                <GoogleSignIn></GoogleSignIn>
                <p>
                    If you don't have an account? <Link to='/signup'>Create new</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;