import React, { useEffect } from 'react';
import { MainNav } from './components/navBar';
import { useAuth0 } from "@auth0/auth0-react"
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import YourOrders from './components/YourOrders'
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { useNavigate } from 'react-router-dom';


function App() {
  const { isLoading, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoading && !isAuthenticated){
      navigate('/login')
    }
  }, [isLoading, isAuthenticated, navigate])

  return (
    <>
      <MainNav />
      <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/login/home' element={<Home/>}></Route>
          <Route path='/login/cart' element={<Cart/>}></Route>
          <Route path='/login/product' element={<Product/>}></Route>
          <Route path='/login/user-profile' element={<UserProfile/>}></Route>
          <Route path='/login/your-orders' element={<YourOrders/>}></Route>
      </Routes>
    </>
  );
}

export default App;
