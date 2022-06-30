import React from 'react';
import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({children}) {
  const [cartListItems, setCartListItems] = useState([]);
  const [productsInCart, setProductsInCart] = useState(0);

  const addProductToCart = (product) => {
    let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
    if (!isInCart) {
      return setCartListItems(cartListItems => [...cartListItems, product]);
    }
  }

   const addItem = (item, count) => {
    if (cartListItems.some((el) => el.id === item.id)) {
      const newCart = cartListItems.map((el) => {
        if (el.id === item.id) {
          el.count += count; 
          return el; 
        } else {
          return el;
        }
      });

      setCartListItems(newCart);
    } else {
      let newProduct = { ...item, count };
      setCartListItems([...cartListItems, newProduct]);
    }
  };

  const removeItemById = (id) => {
    const newCartProduct = cartListItems.filter((product) => product.id !== id)
    setCartListItems(newCartProduct);
    const newProductsInCart = newCartProduct.reduce((acc, current) => {
        return acc + current.qtyInCart;
    }, 0)
    setProductsInCart(newProductsInCart);
    productsInCart();
}

  const removeCart = () => {
    setCartListItems([])
    setProductsInCart(0);
}

const totalPrice = cartListItems.reduce((acc, current) => {
  return acc + current.price * current.count
}, 0);

  const data = {
    cartListItems,
    addProductToCart,
    addItem,
    removeItemById,
    removeCart,
    totalPrice
  }
 
  return (
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext;
export { CartProvider }


