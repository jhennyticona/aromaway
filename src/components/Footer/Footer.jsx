import React from 'react';
import styled from 'styled-components';
import AromaWay from '../../assets/img/aromaway-logo.png';

const Footer = () => {

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
    margin-top: 150px;
    
  `;

  const Column = styled.div`
    flex: 1;
    padding: 0px;
  `;

  const LinksColumn = styled(Column)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: none;
    
    h6{
      color: #00522E;
      margin-left:20px;
      margin-top: 100px;
    }
    a{
      text-decoration: none;
      color: #00522E;
      ont-family: Poppins, Montserrat, Montserrat Classic;
    }
    hr{
      width: 200px;
      margin-top: -20px;
    }
  `;
 
  
  const Rights = styled.span`
  text-align: center;
  margin-left: 450px;
  color: #00522E;
  font-family: Poppins, Montserrat, Montserrat Classic;
  
  a{
    text-decoration: none;
      color: #00522E;
      font-family: Poppins, Montserrat, Montserrat Classic;
      
  }
  `;

  return (
    <div>
      <FooterContainer>
        <LogoImage src={AromaWay} alt="Logo" />

        <LinksColumn>
          <h6>Desenvolvedores</h6>
          <hr/>
          <ul>
            <li>
              <a href={AmandhaIn} target="_blank" rel="noopener noreferrer">
                Amandha Carvalho
              </a>
            </li>
            <li>
              <a href={JhennyIn} target="_blank" rel="noopener noreferrer">
                Jhenny Ticona de Castro
              </a>
            </li>
          </ul>
        </LinksColumn>

        <LinksColumn>
          <h6>Site</h6>
          <hr/>
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
            
          </ul>
        </LinksColumn>
      </FooterContainer>
      <div />
      <Rights>© 2023 <a href={AromaWaysite} className="hover:underline">AromaWay</a>. Todos os Direitos Reservados.</Rights>
    </div>
  );
};

export default Footer;
