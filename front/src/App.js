import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcom from './component/welcome/Welcom';
import Register from './component/register/Register';
import Login from './component/login/Login';
import ForgetPass from './component/ForgetPass/ForgertPass';
import Home from './component/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcom />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget-pass' element={<ForgetPass />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
