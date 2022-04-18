import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import img from './image-137-scaled-e1604152201367.jpeg';
import foodImage from './HOME-SERVICESNo-Mess-No-Stress-23-1 (1).jpg'

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
                        <h1 className='fw-bold'>Healthy Kitchen, Fresh Food</h1>
                        <p className='pb-5 mb-5'>Welcome!! Delicious, Good food in low budget. Eat healthy and be healthy!! We always maintain hygiene</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Service></Service>
            <div className='my-5 shadow w-75 mx-auto'>
                <h3 className='my-5 pt-5 fw-bold' style={{color: 'red'}}>Good Food, Good Life!!</h3>
                <img src={foodImage} className='img-fluid' alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;