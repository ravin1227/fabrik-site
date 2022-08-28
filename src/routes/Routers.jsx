import React from 'react'
import Home from '../pages/Home';
import Conatact from '../pages/Contact';
import Create from '../pages/Create';
import Market from '../pages/Market';
import { Routes, Route, Navigate} from 'react-router-dom';
import View from '../pages/View';
import ViewById from '../pages/ViewById';

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to = '/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/market' element={<Market />} />
      <Route path='/create' element={<Create />} />
      <Route path='/contact' element={<Conatact />} />
      <Route path='/view' element={<View />} />
      <Route path='/viewById/:id' element={<ViewById/>} />
    </Routes>
  )
}
