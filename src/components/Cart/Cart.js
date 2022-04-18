import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const { food, price, img, description } = props.food;
    return (
        <Card className='border border-mute' style={{ width: '18rem', margin: '15px'}}>
                <Card.Img className='img-fluid' variant="top" src={img} style={{height: '280px'}}/>
                <Card.Body>
                    <Card.Title>{food}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        Price: {price}TK
                    </Card.Text>
                    <Link to='/checkout'><Button className='text-white border border-0' style={{backgroundColor: 'red'}}>Place Order</Button></Link>
                </Card.Body>
            </Card>
    );
};

export default Cart;