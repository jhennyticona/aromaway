import React from "react";
import Slideshow from "../Carousel/testecarrossel";
import HeaderResponsivo from "../Header/HeaderResp";
import Card01 from '../../assets/img/1.png'
import Card02 from '../../assets/img/2.png'
import Card03 from '../../assets/img/3.png'
import CardResponsivo from "../Card/Card";
import separador from '../../assets/img/leaf_line.png'
import  { ContatoResponsivo } from "../../components/Contato/Contato";

function Inicio() {
  const images = [Card01, Card02, Card03];

  return (
    <>
    <HeaderResponsivo />
    <Slideshow images={images} />
    <img  width="100%" height="50%" alt="separador" src={separador} />
    <CardResponsivo />
    <ContatoResponsivo />
   
   
    </>
  );
}

export default Inicio;
