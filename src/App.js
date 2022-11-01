import React from 'react';
import Main from './components/Main';
import './components/style.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account';
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
