import React, { useState, useEffect } from "react";

import styled from "styled-components";



const SlideShow = styled.div`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

`
const Cards = styled.div`
margin-left:30px;
margin-right: 30px;
`

function Slideshow({ images }) {
  const [atual, setAtual] = useState(0);

  const proximo = () => {
    setAtual((anterior) => (anterior + 1) % images.length);
  };

  const anterior = () => {
    setAtual((anterior) => (anterior - 1 + images.length) % images.length);
  };

  // Function to automatically switch to the next slide
  const autoSwitchSlide = () => {
    setAtual((anterior) => (anterior + 1) % images.length);
  };

  // Set the interval to automatically switch slides every 5 seconds (adjust as needed)
  useEffect(() => {
    const intervalo = setInterval(autoSwitchSlide, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      // Clean up the interval when the component unmounts
      clearInterval(intervalo);
    };
  }, []);

  return (
    <SlideShow>
      {/* <button onClick={anterior}>Voltar</button> */}
      <Cards>
      <img
        src={images[atual]}
        alt={`Slide ${atual}`}
        className="fade" 
        width="80%"
        height="50%"
        
      />
      </Cards>
      {/* <button onClick={proximo}>Avançar</button> */}
      </SlideShow>
  );
}

export default Slideshow;
