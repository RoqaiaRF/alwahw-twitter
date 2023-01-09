import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Pages/Auth/Signin'
import Signup from './Pages/Auth/Signup'
import Products from './Pages/Products'
import Error404 from './Pages/Error404'
import Container from './Components/Container'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Favorites from './Pages/Favorites'
// import Footer  from './Components/Footer'
import WhatssappIcon from "./Components/WhatssappIcon";
import TiktokPixel from 'tiktok-pixel';
import SnapchatPixel from 'react-snapchat-pixel';
 
 

function App() {


  const options = {
    debug: true, // enable logs
  };
  
  TiktokPixel.init('CEAV0TRC77U8BHMEUCPG', options);
  TiktokPixel.pageView(); // For tracking page view



//snapchat pixel

  const userIdentification = { user_email: 'alwahw.info@gmail.com' }; // optional
  const userIdentification_new_account = { user_email: 'alwahw2.store@gmail.com' }; // optional

  const optionsSnap = {
      debug: false, 		// enable logs
  };
  SnapchatPixel.init('3f06e1ed-4709-4cdb-b6a1-76a79f7f34ed', userIdentification, optionsSnap);
   
  SnapchatPixel.pageView(); 					// For tracking page view
  
  SnapchatPixel.init('950cc468-bee3-4504-9366-9863c8645cba', userIdentification_new_account, optionsSnap);
   
  SnapchatPixel.pageView(); 					// For tracking page view
  
  
  return (
    <>
    <div className="container mx-auto">
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" exact element={<Products />} />
          <Route path="/:category_id" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </div>
    <div>
    <WhatssappIcon/>
    {/* <Footer /> */}
    </div>
    </>
  )
}

export default App