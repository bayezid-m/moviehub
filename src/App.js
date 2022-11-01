import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Account from './Components/Account';
import { Accordion } from 'react-bootstrap';

function App() {
  return (
    <>
    <AuthContextProvider>
    <BrowserRouter>
          <NavBar/>
          <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
         
          </Routes>
         
         
          </BrowserRouter>
    </AuthContextProvider>
          
  
    </>
  );
}

export default App;
