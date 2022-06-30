import './App.css';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBarBoots from './components/NavBar/NavBarBoots';
import Home from './pages/Home';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import ProductsList from './pages/ProductsList';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <header className="App-header">
        <NavBarBoots />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:category' element={<ProductsList />} />
        <Route path='/product' element={<ProductsList />} />
        <Route exact path='/products/:id' element={<Detail />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/contacto' element={<ContactPage />} />
      </Routes>
      </BrowserRouter>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
