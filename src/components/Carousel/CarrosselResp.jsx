import React, { useState, useEffect } from "react";

import styled from "styled-components";


//Styled components para Desktop

const SlideShowDesk = styled.div`

display: flex;
align-items: center;
justify-content: center;
text-align: center;

`
const CardsDesk = styled.div`
width: 100%;
height: 50%;
margin-left:30px;
margin-right: 30px;
`
// Styled components para Mobile

const SlideShowMob = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;

`
const CardsMob = styled.div`
width: 100%;
height: 50%
`

// Função que descreve o funcionamento do slideshow
function Slideshow({ images }) {
    const [atual, setAtual] = useState(0);
    
    const proximo = () => {
        setAtual((anterior) => (anterior + 1) % images.length);
  };

  const anterior = () => {
    setAtual((anterior) => (anterior - 1 + images.length) % images.length);
};

// Função para mudar automaticamente os slides
const autoSwitchSlide = () => {
    setAtual((anterior) => (anterior + 1) % images.length);
};

// Seta o intervalo para automaticamente mudar os slides a cada 5s
useEffect(() => {
    const intervalo = setInterval(autoSwitchSlide, 5000); // 5000 milisegundos = 5 segundos
    
    return () => {
        // Limpa o intervalo
        clearInterval(intervalo);
    };
}, []);

return (
    <>
    <CarrosselResponsivo />
    </>

);
}



export default Slideshow;

const CarrosselResponsivo = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Retorna uma função de effect que remove o event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ?
<SlideShowMob>
  {/* <button onClick={anterior}>Voltar</button> */}
  <CardsMob>
  <img
    src={Slideshow.images[Slideshow.atual]}
    alt={`Slide ${Slideshow.atual}`}
     
    />
  </CardsMob>
  {/* <button onClick={proximo}>Avançar</button> */}
  </SlideShowMob>
  :
  <SlideShowDesk>
  {/* <button onClick={anterior}>Voltar</button> */}
  <CardsDesk>
  <img
    src={Slideshow.images[Slideshow.atual]}
    alt={`Slide ${Slideshow.atual}`}
          
  />
  </CardsDesk>
  {/* <button onClick={proximo}>Avançar</button> */}
  </SlideShowDesk>
  ;
}