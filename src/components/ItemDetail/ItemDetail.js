import React, { useState, useContext } from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({item}) {
  const initial = 1;
  const [showButton, setShowButton] = useState(false);
  const {addProductToCart, addItem} = useContext(CartContext);

  const addToCart = (count) => {
    addProductToCart(item);
    addItem(item, count);
    setShowButton(true);
}

  return (
    <Container>
          <Row>
            <Col xl={5} lg={5} md={12} sm={12} className="m-1" key={item.id}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="Producto"
                />
              </Carousel.Item>
            </Carousel>
            </Col>
            <Col xl={5} lg={5} md={8} sm={8} className="item-description d-flex flex-column my-5">
              <h3>{item.title}</h3>
              <h4>Descripción</h4>
              <p>{item.description}</p>
              <h4>Especificaciones</h4>
              <p>Color: {item.color}</p>
              <p>Almacenamiento: {item.almacenamiento}</p>
              <p>Memoria RAM: {item.ram}</p>
              <p>Pantalla: {item.pantalla}</p>
              <p>Bateria: {item.bateria}</p>
              <h3>${item.price}</h3>
              {showButton === false ? 
              <ItemCount 
                  initial={initial}
                  onAdd={addToCart}
                  stock={item.stock}
              />
              :
              <Button className='mx-1 my-2' variant="success"><Link to='/cart' className='link-light'>Finalizar Compra</Link></Button>}
            </Col>
          </Row>
      </Container>
  )
}

export default ItemDetail;