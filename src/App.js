import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/login/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact  path='/' element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
