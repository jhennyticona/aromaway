import React from 'react';
import styled from 'styled-components';
import background from '../../assets/img/background.png';
import card1 from '../../assets/img/card1.jpg';
import card2 from '../../assets/img/card2.jpg';
import card3 from '../../assets/img/card3.jpg';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: url(${background});
  background-size: cover;
  background-position: center;
  gap: 20px;
  text-align: center;
  font-family: 'Poppins', 'Montserrat', 'Montserrat Classic';
  color: #00522E;

  @media (min-width: 500px) {
    flex-direction: row;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    font-size: 16px;
  }

  button{
    width: 200px;
    height: 40px;
    background-color: #00522E;
    color: #fffff9;
    border-radius: 20px;
    cursor: pointer;
  }
  button:hover {
    background-color: #5EB229; /* Altera a cor de fundo quando o mouse está sobre o botão */
    cursor:pointer;
  }
`

const CardImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  img {
    width: 200px;
    height: 150px;
    border: 2px solid #808000;
    border-radius: 10px;
  }
`;

function Card() {
  return (
    <CardContainer>
      <CardText>
        <p>
        Descubra o poder transformador dos óleos essenciais em nossa landing page dedicada a essas preciosas essências naturais. Nossos óleos essenciais são extraídos de fontes botânicas de alta qualidade e oferecem uma variedade de benefícios, desde alívio do estresse até a promoção de um sono tranquilo.</p>
        <p> Explore nossa gama de óleos essenciais puros e aprenda como incorporá-los em sua rotina diária para promover o bem-estar físico e emocional. Experimente a aromaterapia como nunca antes e descubra como esses óleos podem fazer a diferença em sua vida. Junte-se a nós nessa jornada de equilíbrio e harmonia.
        </p>
        <Link to="/Loja"> {/* Adicione o Link aqui */}
       <button>
        Loja
       </button>
       </Link>
      </CardText>
      <CardImages>
        <img src={card1} alt="Imagem 1" />
        <img src={card2} alt="Imagem 2" />
        <img src={card3} alt="Imagem 3" />
      </CardImages>
    </CardContainer>
  );
}

export default Card;
