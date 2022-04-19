import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import avatar from './avatar-default-icon.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleSignIn from './GoogleSignIn';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user, error
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const emailHandle = event => {
        setEmail(event.target.value);
    }
    const passwordHandle = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger'>Error: {error?.message}</p>
    }
    const submitButton = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='border border-0 shadow-lg my-5 py-5 w-25 mx-auto rounded'>
            <div className="login-title mb-3 text-info">
                <img src={avatar} className="img-fluid w-25" alt="" />
            </div>
            <form onSubmit={submitButton}>
                <p className='text-start ps-5'>Email:</p>
                <input onBlur={emailHandle} type="email" className='p-2 w-75  mb-4' required /> <br />
                <p className='text-start ps-5'>Password:</p>
                <input onBlur={passwordHandle} type="password" className='p-2 w-75 mb-2' name="password" id="" required /><br />
                {errorMessage}
                <button className='w-25 py-2 me-3 border border-0 px-2 rounded bg-primary text-white mt-3'>Login</button>
                <GoogleSignIn></GoogleSignIn>
                <button
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast('Email has been sent');
                    }}
                    className='btn btn-link border border-0 text-danger'>Forget Password?</button>
                <ToastContainer />
                <p className='px-2'>
                    Do not have an account? <Link to='/signup'>Create new</Link>
                </p>
            </form>

        </div>
    );
};

export default Login;