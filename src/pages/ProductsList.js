import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardsList from '../components/Cards/CardsList';
// Firebase
import { collection, getDocs } from 'firebase/firestore';
import db from '../data/fireBaseConfig';


function ProductsList() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  const getProductsFromDB = async () => {
    const productSnapshot = await getDocs(collection(db, 'productos'));
    const productList = productSnapshot.docs.map((doc) => {
      let product = doc.data();
      product.id = doc.id;
      return product;
    });
    return productList;
}

  useEffect( () => {
    getProductsFromDB()
    .then((response) => {
        setProducts(category ? response.filter(product => product.category === category) : response);
    })
}, [category])

  return (
    <section className='products-container my-5'>
        <CardsList products={products}/>
    </section>
  )
}

export default ProductsList;