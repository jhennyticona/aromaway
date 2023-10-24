import React from "react";
import styled from "styled-components";
import "./Header.css";
import logo from "../../assets/img/aromaway-logo.png";
import { Link } from "react-router-dom";

//Styled components desktop

const HeaderTitleDesk = styled.div`
  font-size: 6.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 112px;
  flex-shrink: 0;
  height: 150px;
`;
const LogoDesk = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const NavDesk = styled.nav`
    ul{
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        margin-right: 80px;
    }    
                
    li{
            display: flex;
            align-items: center;
            margin-left: 2rem;
            
    }
        a{
            color: #00522E;
            font-family: Poppins, Montserrat, Montserrat Classic;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
            text-align: center;
        }
    }
`;
const LineDesk = styled.hr`
  margin-left: 30px;
  margin-right: 30px;
`;

//styled components mobile

const HeaderTitleMob = styled.div`
  color: #00522e;
  font-family: Poppins, Montserrat, Montserrat Classic;
  font-size: 6.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 360px;
  height: 72px;
`;
const LogoMob = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
`;

const NavMob = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
  }

  li {
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }

  a {
    color: #00522e;
    font-family: Poppins, Montserrat, Montserrat Classic;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: none;
    text-align: left;
  }
`;

const LineMob = styled.hr`
  margin-left: 10px;
  margin-right: 10px;
`;

export const HeaderResponsivo = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Retorna uma função de effect que remove o event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? (
    <>
      <HeaderTitleMob>
        <LogoMob>
          <img width="130px" height="130px" alt="logo" src={logo} />
        </LogoMob>
        <NavMob>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="./Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="./Loja">Loja</Link>
            </li>
            <li>
              <Link to="./Contato">Contato</Link>
            </li>
            <li>
              <Link to="/Carrinho">Meu Carrinho</Link>
            </li>
          </ul>
        </NavMob>
      </HeaderTitleMob>
      <LineMob />
    </>
  ) : (
    <>
      <HeaderTitleDesk>
        <LogoDesk>
          <img width="180px" height="180px" alt="logo" src={logo} />
        </LogoDesk>
        <NavDesk>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="./Sobre">Sobre</Link>
            </li>
            <li>
              <Link to="./Loja">Loja</Link>
            </li>
            <li>
              <Link to="./Contato">Contato</Link>
            </li>
            <li>
         <Link to="/Carrinho">Meu Carrinho</Link>
   </li>
          </ul>
        </NavDesk>
      </HeaderTitleDesk>
      <LineDesk />
    </>
  );
};

export default HeaderResponsivo;
