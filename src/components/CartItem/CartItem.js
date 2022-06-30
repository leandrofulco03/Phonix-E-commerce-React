import React from 'react';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CartItem.css';

function CartItem({item, removeItemById}) {

  return (
    <article className="cart-item-card my-1">
        <div className="cart-item__delete" onClick={() => removeItemById(item.id)}>
                <FontAwesomeIcon cursor={"pointer"} icon={faTimes} color={'#1d1d1d'} size={'2x'}/>
            </div>
            <div className="cart-item-img">
                <img src={item.image} alt="product" />
            </div>
            <div className="cart-info px-5">
              <div className="cart-description px-5 py-2">
                <h2 className="cart-item-title">{item.title}</h2>
                <span className="cart-item-price">${item.price}</span>
              </div>
              <div className="cart-count px-5 py-2">
                <span className="cart-item-count d-flex flex-column align-items-center"><strong>Cantidad:</strong> {item.count}</span>
              </div>
              <div className="cart-price px-5 py-2">
                <span className="cart-item-count d-flex flex-column align-items-center"> ${item.count * item.price}</span>
              </div>
            </div>
    </article>
  )
}

export default CartItem;