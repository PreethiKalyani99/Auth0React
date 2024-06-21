import React from 'react';
import { MainNav } from './components/navBar';
import { useAuth0 } from "@auth0/auth0-react"
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import YourOrders from './components/YourOrders'
import UserProfile from './components/UserProfile';


function App() {
  const { user, isLoading } = useAuth0()
  console.log(user, isLoading, "app")
  return (
    <>
      <MainNav />
      <Routes>
        {(!isLoading && user) && (
          <>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/user-profile' element={<UserProfile/>}></Route>
            <Route path='/your-orders' element={<YourOrders/>}></Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
