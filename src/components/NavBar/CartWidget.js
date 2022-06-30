import React from 'react';
import { useContext } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const {cartListItems, removeItemById, removeCart} = useContext(CartContext);

  return (
    <div className='cart'>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" className="cart-button">
        <div className='count-display'>{cartListItems.length}</div>
          <a href='#' className='h4 text-light'><i className="fa-solid fa-cart-shopping"></i></a>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <div className='container-cart-item-list d-flex flex-column align-items-center p-1'>
            {cartListItems.map((item) => {
              return(
                <div className='cart-item-product' key={item.id}>
                  <div className='cart-item-image'>
                    <img src={`${item.image}`} alt="product" />
                  </div>
                  <div className='cart-item-info'>
                    <p>{item.title}</p>
                    <span>${item.price}</span>
                    <span>Cantidad: {item.count}</span>
                    <span className="cart-item-count"><strong>Total:</strong> ${item.count * item.price}</span>
                  </div>
                  <i className="fa-solid fa-xmark" onClick={() => removeItemById(item.id)}></i>
                </div>
                
              )
            })}
            <div className='my-3'>
            {cartListItems.length ? (<div className='d-flex flex-column align-items-center'>
                                      <Button
                                        variant="danger" 
                                        className="button-primary button-padding"
                                        onClick={removeCart}
                                        >VACIAR CARRITO
                                      </Button>
                                      <Button 
                                      className='mx-1 my-2' 
                                      variant="primary"
                                      >
                                      <Link to='/cart' 
                                      className='link-light'
                                      >Finalizar Compra
                                      </Link>
                                      </Button>
                                    </div>)
                         : <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                            <p>No hay productos en el carrito</p>
                            <Button variant='light'><Link to="/product">Empezar a comprar</Link></Button>
                          </div>
            }
            </div>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CartWidget;