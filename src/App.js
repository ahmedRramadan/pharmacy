import React from 'react';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom'
import Home from './components/Home';
import Admin from './components/Admin';
function App() {


  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
