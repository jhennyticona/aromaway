import React from 'react';
import styled from 'styled-components';
import AromaWay from '../../assets/img/aromaway-logo.png';

const Footer = () => {
  const githubAromaWay = 'https://github.com/projetodumorro';
  const AromaWaysite = 'https://frontend-ecru-two-98.vercel.app/';
  const JhennyIn = 'https://www.linkedin.com/in/jhennyticona/';
  const AmandhaIn = 'https://www.linkedin.com/in/amandha-carvalho-ab1a94281/';

  const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fffff9;
    background-size: 200px auto;
    color: #fff;
    padding: 0px 0px;
  `;

  const LogoImage = styled.img`
    width: 150px;
    height: auto;
    
  `;

  const Column = styled.div`
    flex: 1;
    padding: 0px;
  `;

  const LinksColumn = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  return (
    <div>
      <FooterContainer>
        <LogoImage src={AromaWay} alt="Logo" />

        <LinksColumn>
          <h6>Desenvolvedores</h6>
          <ul>
            <li>
              <a href={AmandhaIn} target="_blank" rel="noopener noreferrer">
                Amandha Carvalho
              </a>
            </li>
            <li>
              <a href={JhennyIn} target="_blank" rel="noopener noreferrer">
                Jhenny Ticona
              </a>
            </li>
          </ul>
        </LinksColumn>

        <LinksColumn>
          <h6>Site</h6>
          <ul>
            <li>
              <a href={AromaWaysite} rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li>
              <a href="/sobre" rel="noopener noreferrer">
                Sobre
              </a>
            </li>
            <li>
              <a href="/login" rel="noopener noreferrer">
                Login
              </a>
            </li>
          </ul>
        </LinksColumn>
      </FooterContainer>
      <div />
      <span>© 2023 <a href={AromaWaysite} className="hover:underline">AromaWay</a>. All Rights Reserved.</span>
    </div>
  );
};

export default Footer;
