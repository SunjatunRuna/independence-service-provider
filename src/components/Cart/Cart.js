import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cart = (props) => {
    const { food, price, img } = props.food;
    return (
        <Card className='border border-mute' style={{ width: '18rem', margin: '15px'}}>
                <Card.Img variant="top" src={img} style={{height: '280px'}}/>
                <Card.Body>
                    <Card.Title>{food}</Card.Title>
                    <Card.Text>
                        Price: {price}TK
                    </Card.Text>
                    <Button className='text-white' variant="info">Place Order</Button>
                </Card.Body>
            </Card>
    );
};

export default Cart;