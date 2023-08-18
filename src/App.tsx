import { FormEvent } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import './App.css'
import SidebarMenu from './components/SidebarMenu'
import { AddFoodForm } from './components/AddFoodForm';
import { ModalForm } from './components/ModalForm';
import { UpdateMemberForm } from './components/UpdateFoodForm';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Orders } from './pages/Orders';
import { Reservations } from './pages/Reservations';
import { Customers } from './pages/Customers';
import { Login } from './pages/Login';

import { paginate } from './utils/paginate';

import { PrivateRoute } from './hooks/PrivateRoute';
import useFoods from './hooks/useFoods';

function App() {
  const addModal = useDisclosure()
  const editModal = useDisclosure()

  const { foods, setFoods, selectedFood, setSelectedFood, currentPage, pageSize, setCurrentPage } = useFoods();

  const foodData = paginate(foods, currentPage, pageSize)

  const addHandler = (e: FormEvent) => {
    e.preventDefault();
    addModal.onOpen();
  }

  const updateHandler = (e: FormEvent, food: any) => {
    e.preventDefault();
    editModal.onOpen();
    setSelectedFood(food);
  }

  const handleOnChange = (page: any) => {
    setCurrentPage(page);
  }
  
  // if(!foodData) return null;

  return (
    <>
      <ModalForm isOpen={editModal.isOpen} onClose={editModal.onClose} modalHeader='Edit Item' modalBody={<UpdateMemberForm foods={foodData} setFoods={setFoods} selectedFood={selectedFood} setSelectedFood={setSelectedFood} onClose={editModal.onClose}></UpdateMemberForm>}></ModalForm>
      <ModalForm isOpen={addModal.isOpen} onClose={addModal.onClose} modalHeader='Add Item' modalBody={<AddFoodForm foods={foods} setFoods={setFoods} onClose={addModal.onClose}/>}></ModalForm>
      <Routes>
        {/* <Route element={<PrivateRoute onLogggedIn={isLoggedIn}/>}> */}
        <Route element={<PrivateRoute />}>
          <Route element={<SidebarMenu />}>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu foodData={foodData} onAddHandler={addHandler} updateHandler={updateHandler} onPageChange={handleOnChange} currentPage={currentPage} totalItems={foods.length} pageSize={pageSize}/>} />
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