import './Cards.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards(item) {

  return (
    <div className='mx-5'>
        <Card style={{ width: '18rem' }}>
            <Card.Img className='product-image' variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="card-text">
                    {item.description}
                    <h4>${item.price}</h4>
                </Card.Text>
                  <div className='d-flex justify-content-center align-items'>
                    <Link to={`/products/${item.id}`}><Button variant="light">DETALLES</Button></Link>
                  </div>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Cards;