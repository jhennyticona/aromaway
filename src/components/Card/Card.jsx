import React from 'react';
import './Card.css';
import styled from 'styled-components';
import card1 from '../../assets/img/card1.jpg';
import card2 from '../../assets/img/card2.jpg';
import card3 from '../../assets/img/card3.jpg';
import background from '../../assets/img/background.png'
import { Link } from 'react-router-dom';
//Styled Components para Desktop

const CardContentDesk = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-right: 30px;
  margin-left: 30px;
  height: 400px;
  gap:30px;
  background:url(${background});
  
`
const CardTextoDesk = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  width: 400px;
  margin-left: 80px;
  color: #00522E;
  font-family: Poppins, Montserrat, Montserrat Classic;
 
  p{
    text-align: justify;
  }
  button{
    width: 200px;
    height: 40px;
    background-color: #00522E;
    color: #fffff9;
    border-radius: 20px;
  
  }
`
  
const CardImageDesk = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: left;
  flex-direction: row;
  margin-right: 80px;
  
  border: 2px solid #808000;
  border-radius: 10px;
`

//Styled Components para Mobile

const CardContentMob = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  gap:30px;
  margin-right: 30px;
  margin-left: 30px;
  padding-top: 50px;
  background:url(${background});
`
const CardTextoMob = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  width: 300px;
  
  
  p{
    text-align: justify;
    margin-left: 50px
  }
  button{
    width: 200px;
    height: 40px;
    background-color: #00522E;
    color: #fffff9;
    border-radius: 20px;
    margin-left: 75px;
  
  }
`
const CardImageMob = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  flex-direction: column;
  margin-right: 70px;
  border: 2px solid #808000;
  border-radius: 10px;
  
`
//Função para exibir HTML

function CardMob(){
  return(
  <>
  <CardContentMob>
    <CardTextoMob>
      {/* <h2>Equilíbrio e Harmonia</h2> */}
      <p>Descubra o poder transformador dos óleos essenciais em nossa landing page dedicada a essas preciosas essências naturais. Nossos óleos essenciais são extraídos de fontes botânicas de alta qualidade e oferecem uma variedade de benefícios, desde alívio do estresse até a promoção de um sono tranquilo. Explore nossa gama de óleos essenciais puros e aprenda como incorporá-los em sua rotina diária para promover o bem-estar físico e emocional. Experimente a aromaterapia como nunca antes e descubra como esses óleos podem fazer a diferença em sua vida. Junte-se a nós nessa jornada de equilíbrio e harmonia.</p>
      <Link to="./Loja">
  <button>Compre agora</button>
</Link>
    </CardTextoMob>
    <CardImageMob>
      <img width="150px" height="150px" alt="img1" src={card1} />
      <img width="150px" height="150px" alt="img2" src={card2} />
      <img width="150px" height="150px" alt="img3" src={card3} />
    </CardImageMob>
  </CardContentMob>
  </>
  );
}

function CardDesk(){
  return(
  <>
  <CardContentDesk>
    <CardTextoDesk>
      {/* <h2>Equilíbrio e Harmonia</h2> */}
      <p>Descubra o poder transformador dos óleos essenciais em nossa landing page dedicada a essas preciosas essências naturais. Nossos óleos essenciais são extraídos de fontes botânicas de alta qualidade e oferecem uma variedade de benefícios, desde alívio do estresse até a promoção de um sono tranquilo. Explore nossa gama de óleos essenciais puros e aprenda como incorporá-los em sua rotina diária para promover o bem-estar físico e emocional. Experimente a aromaterapia como nunca antes e descubra como esses óleos podem fazer a diferença em sua vida. Junte-se a nós nessa jornada de equilíbrio e harmonia.</p>
      <Link to="./Loja">
  <button>Compre agora</button>
</Link>
    </CardTextoDesk>
    <CardImageDesk>
      <img width="200px" height="150px" alt="img1" src={card1} />
      <img width="200px" height="150px" alt="img2" src={card2} />
      <img width="200px" height="150px" alt="img3" src={card3} />
    </CardImageDesk>
  </CardContentDesk>
  </>
  );
}




export const CardResponsivo = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);

      // Retorna uma função de effect que remove o event listener
      return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ?
  <>
  <CardMob />
  </>
  :
  <>
  <CardDesk />
  </>
  ;
}

export default CardResponsivo;