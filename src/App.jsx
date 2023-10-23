import React from "react";
import Inicio from "./components/Inicio/Inicio";
import { Loading } from "./components/Loader/Loader";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sobre from "./components/Sobre/Sobre"
import Loja from "./components/Loja/Loja"
import ContatoResponsivo from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";
import HeaderResponsivo from "./components/Header/HeaderResp";
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
        <HeaderResponsivo/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Loja" element={<Loja />} />
        <Route path="/Contato" element={<ContatoResponsivo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
        </>
      ) }
          
    </div>
  );
}
export default App;

