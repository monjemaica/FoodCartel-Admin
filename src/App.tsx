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
import { ModalForm } from './components/ModalForm';
import { useDisclosure } from '@chakra-ui/react';
import { UpdateMemberForm } from './components/UpdateFoodForm';

function App() {
  const addModal = useDisclosure()
  const editModal = useDisclosure()
  return (
    <>
      <ModalForm isOpen={editModal.isOpen} onClose={editModal.onClose} modalHeader='Edit Item' modalBody={<UpdateMemberForm></UpdateMemberForm>}></ModalForm>
      <Routes>
        {/* <Route element={<PrivateRoute onLogggedIn={isLoggedIn}/>}> */}
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarMenu />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu toggleUpdateModal={editModal.onOpen}/>} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/customers" element={<Customers />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </>
  )
}
export default App;