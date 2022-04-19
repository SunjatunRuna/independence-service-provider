import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import avatar from './avatar-default-icon.png'
import './Signup.css'

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[name, setName] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const navigate = useNavigate();
    
    const nameHandle = event =>{
        setName(event.target.value);
    }

    const emailHandle = event =>{
        setEmail(event.target.value);
    }
    const passwordHandle = event =>{
        setPassword(event.target.value);
    }
    if(user){
       navigate('/home')
    }
    const submitButton = event =>{
        event.preventDefault()
        if(!name){
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='border border-0 shadow-lg mt-5 py-5 w-25 mx-auto rounded'>
            <div className="login-title mb-5 text-info">
                <img src={avatar} className="img-fluid w-25" alt="" />
            </div>
            <form onSubmit={submitButton} className='container'>
                
                <input onBlur={nameHandle} type="text" placeholder='username' className='p-2 w-75  mb-4' required/><br />
                <input onBlur={emailHandle} type="email" placeholder='enter email' className='p-2 w-75  mb-4' required/> <br />
                <input onBlur={passwordHandle} type="password" placeholder='password' className='p-2 w-75 mb-4' name="password" id="" required/><br />
                <p>{error?.message}</p>
                <p>
                    Already have an account? <Link to='/login'>Log in</Link>
                </p>
                <button className='w-75 py-2 border border-0 px-2 mb-5 rounded bg-primary text-white mt-3'>Signup</button>
            </form>
        </div>
    );
};

export default Signup;