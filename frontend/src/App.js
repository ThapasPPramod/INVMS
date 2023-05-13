import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import Dashboard from './pages/dashboard';
import DashboardUser from './pages/dashboardUser';
import DashboardAdmin from './pages/dashboardAdmin';
import ControlledTabsInv from './components/inv';
import Users from './components/users';
import AdminInventory from './pages/admin_inv';
import AdminUsers from './pages/admin_user'
import ItemDetail from './components/itemDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard/user' element={<Dashboard user_class={"user"}/>} />
          <Route path='/dashboard/admin' element={<Dashboard user_class={"admin"} />} />
          <Route path='/dashboard/scan/:item_id' element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
