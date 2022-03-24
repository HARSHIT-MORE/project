import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import {Login} from './Login';
import Registration from "./Registration";
import Navbar from './Navbar';
import Internship from './Internship';
import Donation from './Donation';

function Routing() {
  return (
    <BrowserRouter>
          <Navbar />
           <Routes>
            <Route exact path='/' element={<Home/>}>
            </Route>
            <Route exact path='/about'element={<About/>}></Route>
            <Route exact path='/login'element={<Login />}>
              
            </Route>
            <Route exact path='/registration'element={<Registration />}>
              
            </Route>
            <Route exact path='/donation'element={<Donation/>}>
                
            </Route>
            <Route exact path='/internship'element={<Internship/>}>
                
            </Route>
          </Routes>
        </BrowserRouter>
  )
}

export default Routing