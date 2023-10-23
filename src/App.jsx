import React from "react";
import Inicio from "./components/Inicio/Inicio";
import { Loading } from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./components/sobre/Sobre"
import Loja from "./components/loja/Loja"
function App(){
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //Simular um atraso de carregamento da página
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);


  return(
    <div>
      {isLoading ?(<Loading />
      ): (
        <>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Loja" element={<Loja />} />
      </Routes>
    </BrowserRouter>
        </>
      ) }
          
    </div>
  );
}
export default App;

