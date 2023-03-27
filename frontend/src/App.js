import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home'
import DashboardUser from './pages/dashboardUser';
import DashboardAdmin from './pages/dashboardAdmin';
import ControlledTabsInv from './components/inv';
import Users from './components/users';
import AdminInventory from './pages/admin_inv';
import AdminUsers from './pages/admin_user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/user/dashboard' element={<DashboardUser />} />
          <Route path='/admin/dashboard/scan' element={<DashboardAdmin />} />
          <Route path='/admin/dashboard/inventory' element={<AdminInventory />} />
          <Route path='/admin/dashboard/users' element={<AdminUsers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
