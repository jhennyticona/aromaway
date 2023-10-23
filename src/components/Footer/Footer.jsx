import React from "react";
import styled from "styled-components";
import AromaWay from "../../assets/img/aromaway-logo.png";

const Footer = () => {
  const AromaWaysite = "/";
  const JhennyIn = "https://www.linkedin.com/in/jhennyticona/";
  const AmandhaIn = "https://www.linkedin.com/in/amandha-carvalho-ab1a94281/";

  const FooterContainer = styled.div`
    background-color: #fffff9;
    color: #00522e;
    text-align: center;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 20px;
    align-items: flex-start;
  `;

  const LogoColumn = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const Logo = styled.img`
    width: 160px;
    height: auto;
  `;

  const Column = styled.div`
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  const MenuHeader = styled.h3`
    color: #00522e;
  `;

  const MenuList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
  `;

  const MenuItem = styled.li`
    a {
      text-decoration: none;
      color: #84817a;
      font-family: Poppins, Montserrat, Montserrat Classic;
    }
  `;

  const Rights = styled.p`
    grid-column: 1 / -1;
    text-align: center;
    color: #84817a;
    a {
      text-decoration: none;
      color: #00522e;
      font-family: Poppins, Montserrat, Montserrat Classic;
      font-size: 18px;
    }
  `;

  return (
    <FooterContainer>
      <LogoColumn>
        <a href="./">
          <Logo src={AromaWay} alt="Logo" />
        </a>
      </LogoColumn>
      <Column>
        <MenuHeader>Mapa do Site</MenuHeader>
        <MenuList>
          <MenuItem>
            <a href={AromaWaysite} rel="noopener noreferrer">
              Home
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/Sobre" rel="noopener noreferrer">
              Sobre
            </a>
          </MenuItem>
          <MenuItem>
            <a href="/Loja" rel="noopener noreferrer">
              Loja
            </a>
          </MenuItem>
        </MenuList>
      </Column>
      <Column>
        <MenuHeader>Institucional</MenuHeader>
        <MenuList>
          <MenuItem>
            <a href={AromaWaysite}>Política de Privacidade</a>
          </MenuItem>
          <MenuItem>
            <a href={AromaWaysite}>Troca e Devoluções</a>
          </MenuItem>
        </MenuList>
      </Column>
      <Column>
        <MenuHeader>Desenvolvedores</MenuHeader>
        <MenuList>
          <MenuItem>
            <a href={AmandhaIn} target="_blank" rel="noopener noreferrer">
              Amandha Carvalho
            </a>
          </MenuItem>
          <MenuItem>
            <a href={JhennyIn} target="_blank" rel="noopener noreferrer">
              Jhenny Ticona de Castro
            </a>
          </MenuItem>
        </MenuList>
      </Column>

      <Rights>
        © 2023 <a href="./">AromaWay.</a> Todos os Direitos Reservados.
      </Rights>
    </FooterContainer>
  );
};

export default Footer;
