import React from 'react';
import { useEffect, useState } from 'react';
import CardsList from '../Cards/CardsList';
// FireStore
import { collection, getDocs } from 'firebase/firestore';
import db from '../../data/fireBaseConfig';
import './ItemListContainer.css';

function ItemListContainer() {
  const [products, setProducts] = useState([]);

    const getProductsFromDB = async () => {
      const productSnapshot = await getDocs(collection(db, 'productos'));
      const productList = productSnapshot.docs.map((doc) => {
        let product = doc.data();
        product.id = doc.id;
        return product;
      });
      return productList;
  }

    useEffect(() => {
        getProductsFromDB()
        .then((response) => {
            setProducts(response)
        })
    }, [])

  return (
    <div className='container-products'>
      <CardsList products={products} />
    </div>
  )
}

export default ItemListContainer;