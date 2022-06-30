import React from 'react';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import './Home.css';

function Home() {
  return (
    <section className='home-container'>
      <div className='banner d-flex flex-column justify-content-flex-start py-5 px-5'>
        <h1 className='py-5'>PHONIX</h1>
      <div>
        <h4>Precios Accesibles.</h4>
        <h4>Envíos gratis.</h4>
        <h4>Garantía para todos los productos.</h4>
      </div>
      </div>
      <div className='d-flex justify-content-center my-5'>
        <h2>Productos destacados</h2>
      </div>
    <div className='d-flex justify-content-center align-items-center my-5'>
        <ItemListContainer />
    </div>
    </section>
  )
}

export default Home;
