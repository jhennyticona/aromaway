//import logo from './logo.svg';
import React from 'react';
import './App.css';

import Sobre from './components/sobre/Sobre';
import Loja from './components/loja/Loja';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
function App() {
  return (
    
    <>
      <div className="App">
        
      <BrowserRouter>
      <Routes>

      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Loja" element={<Loja />} />
      </Routes>
      </BrowserRouter>
      
      </div>
    </>
  );
}

export default App;