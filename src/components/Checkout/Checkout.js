import React, { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const [username, setUser] = useState('');
    const [address, setAddress] = useState('');
    const[phone, setPhone] = useState('');

    const userHandle = event =>{
        setUser(event.target.value);
    }
    const addressHandle = event =>{
        setAddress(event.target.value);
    }
    const phoneHandle = event =>{
        setPhone(event.target.value);
    }
    const submitButton = event =>{
        event.preventDefault();
        const submitted = {username, user, address, phone};
        console.log(submitted,'submit form');
    }
    return (
        <div className='my-5'>
            <form onSubmit={submitButton} className='w-50 shadow mx-auto p-5 my-5'>
            <h4 className='text-secondary my-5'>Shipping Information</h4>
            <table className='mx-auto'>
                <tr>
                    <td className='text-end ps-5 w-25'>Username: </td>
                    <td><input onBlur={userHandle} type="text" className='w-75'required/></td>
                </tr>
                <tr>
                    <td  className='text-end ps-5 w-25'>Email: </td>
                    <td><input value={user?.email} readOnly type="email" className='w-75' /></td>
                </tr>
                <tr>
                    <td onBlur={addressHandle} className='text-end  ps-5 w-25'>Address: </td>
                    <td><input type="textarea" className='w-75' required/></td>
                </tr>
                <tr>
                    <td className='text-end  ps-5 w-25'>Phone No: </td>
                    <td><input onBlur={phoneHandle} type="number" className='w-75' required/></td>
                </tr>
            </table>
            <button className='border border-0 my-5 w-25 py-2 rounded bg-info text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Checkout;