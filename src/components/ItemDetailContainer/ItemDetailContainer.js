import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import ClipLoader from 'react-spinners/ClipLoader';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../data/fireBaseConfig';

function ItemDetailContainer({id}) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

    const getProductFromDB = async () => {
      const docRef = doc(db, "productos" , id);
      const docSnaptshot = await getDoc(docRef);
          let product = docSnaptshot.data();
          product.id = docSnaptshot.id;
          return product;
    }

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000)
    }, []);

  useEffect(() => {
    getProductFromDB()
          .then((res) => {
              setProduct(res);
          })
  }, [id]);

  return (
    <section className='d-flex justify-content-center align-items-center'>
      {product ? 
      <ItemDetail 
        item={product} 
      /> 
      : 
      <ClipLoader 
        size={40} 
        color={'#000'} 
        loading={loading} 
      />}
    </section>
  )
}

export default ItemDetailContainer;