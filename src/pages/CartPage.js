import React from 'react';
import CartListItem from '../components/CartListItem/CartListItem';

function CartPage() {
  return (
    <main className="display-page d-flex flex-column align-items-center my-5">
            <h1>Tu carrito de compras</h1>
            <CartListItem />
    </main>
  )
}

export default CartPage;