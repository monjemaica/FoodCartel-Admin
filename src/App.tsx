import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import SidebarMenu from './components/SidebarMenu'
import { Home } from './pages/Home';
import { Orders } from './pages/Orders';
import { Reservations } from './pages/Reservations';
import { Login } from './pages/Login';
import { PrivateRoute } from './hooks/PrivateRoute';
import { useState } from 'react';

function App() {


  return (
    <>

      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarMenu />}>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reservations" element={<Reservations />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
