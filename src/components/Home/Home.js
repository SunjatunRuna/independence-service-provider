import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Service from '../Service/Service';
import img from './image-137-scaled-e1604152201367.jpeg';

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                        style={{ height: '600px' }}
                    />
                    <Carousel.Caption className='mb-5 pb-5'>
                        <h1>Healthy Kitchen, Fresh Food</h1>
                        <p className='pb-5 mb-5'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;