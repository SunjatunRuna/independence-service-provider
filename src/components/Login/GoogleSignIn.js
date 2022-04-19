import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from './kisspng-google-logo-googleplex-google-search-5b2cd7fd2d3570.5263877415296655331852.jpg';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(user){
        navigate('/home')
    }
    const googleHandleButton = () =>{
        signInWithGoogle();
    }
    return (
        <button onClick={googleHandleButton} className='w-25 px-2 border border-0 mb-5 rounded'><img src={google} className="img-fluid" alt="" /></button>
    );
};

export default GoogleSignIn;