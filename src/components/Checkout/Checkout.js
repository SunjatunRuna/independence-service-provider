import React from 'react';

const Checkout = () => {
    const submitButton = event =>{
        event.preventDefault();
    }
    return (
        <div className='my-5'>
            <form onSubmit={submitButton} className='w-50 shadow mx-auto p-5 my-5'>
            <table className='mx-auto'>
                <tr>
                    <td className='text-end ps-5 w-25'>Username: </td>
                    <td><input type="text" className='w-75'/></td>
                </tr>
                <tr>
                    <td  className='text-end ps-5 w-25'>Item: </td>
                    <td><input type="text" className='w-75' /></td>
                </tr>
                <tr>
                    <td className='text-end  ps-5 w-25'>Address: </td>
                    <td><input type="textarea" className='w-75' /></td>
                </tr>
                <tr>
                    <td className='text-end  ps-5 w-25'>Phone No: </td>
                    <td><input type="number" className='w-75' /></td>
                </tr>
            </table>
            <button className='border border-0 my-5 w-25 py-2 rounded bg-info text-white'>Submit</button>
            </form>
        </div>
    );
};

export default Checkout;