import NavBar from './Components/Navbar_and_card/Navbar';
import './App.css';
import React from 'react';
import TheGeneric from './Components/Navbar_and_card/TheGenerics';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Components/Store/cart-provider';


function App() {
  const[cart, setCart]=useState(false);
  const cartOpen=()=>{
    setCart(true);
  }

  const cartClose=()=>{
    setCart(false);
  } 
  return (
    <CartProvider>
      {cart &&<Cart onclose={cartClose}/>}
      <NavBar onOpen={cartOpen}/>
      <TheGeneric/>
      <Products onOpen={cartOpen}/>
      <footer>
        <Footer/>
      </footer>
    </CartProvider>
  );
}

export default App;
