import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Home from './pages/home'
import Dashboard from './pages/dashboard';
import ItemDetail from './components/itemDetail';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import {useSelector} from 'react-redux';
import GoogleLogin from './components/googleLogin';


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated)

  // if (isAuthenticated){
  // const user_name = useSelector((state)=> state.auth.credentials.given_name );
  // if (user_name){console.log('hello' + user_name)};
  // }

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={GoogleLogin}></Route>
          <Route path='/dashboard/user' element={<Dashboard user_class={'user'}  />}/>
          <Route path='/dashboard/admin' element={<Dashboard user_class={"admin"} />} />
          <Route path='/dashboard/scan/:item_id' element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  );
  // const PrivateRoute = ({ element: Com, isAuthenticated}) => {
  //   return(
  //   <Route path={isAuthenticated && '/dashboard'} element= {
  //         <Component />

  //     }
  //   />
  //   );
  //   };

}

export default App;
