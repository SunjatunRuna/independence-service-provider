import React from 'react';
import { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const Service = () => {
    const [foods, setFood] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFood(data))
    }, [])
    return (
        <div className='my-5'>
            <h3 className='my-5 pt-5 fw-bold' style={{color: 'red'}}>Service</h3>
            <CardGroup>
                {
                    foods.map(food => (
                        <Cart
                            key={food.id}
                            food={food}
                        ></Cart>
                    ))
                }
            </CardGroup>
        </div>
    );
};

export default Service;