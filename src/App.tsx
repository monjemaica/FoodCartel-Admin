import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import SidebarMenu from './components/SidebarMenu'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Orders } from './pages/Orders';
import { Reservations } from './pages/Reservations';
import { Customers } from './pages/Customers';
import { Login } from './pages/Login';
import { PrivateRoute } from './hooks/PrivateRoute';

function App() {
  
  return (
    <>

      <Routes>
        {/* <Route element={<PrivateRoute onLogggedIn={isLoggedIn}/>}> */}
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarMenu />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/customers" element={<Customers/>} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
export default App;