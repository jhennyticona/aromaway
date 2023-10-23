import React from "react";
import  { FormResponsivo } from "../Form/Form";
import styled from "styled-components";
import SeparadorVert from '../../assets/img/leaf_line_vert.png'

//Styled Components para Desktop

const ContentDesk = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
margin-right: 30px;
margin-left: 30px;
height: 400px;
gap:10px;
`;
const ContatoTextoDesk = styled.div`
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
`;
    
const ContatoFormDesk = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: right;
    margin-top: 100px;
    margin-bottom: 50px;
`;

//Styled components para Mobile

const ContentMob = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
margin-right: 30px;

margin-top: 80px;
height: 400px;
gap:10px;
`;
const ContatoTextoMob = styled.div`
display: flex;
justify-content: flex-start;
align-items: left;
flex-direction: column;
width: 400px;
margin-left: 50px;
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
`;
    
const ContatoFormMob = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: right;
    margin-top: 100px;
    margin-bottom: 50px;
    width: 250px;
    
`;

function ContatoMob(){
    return(
        <>
        <ContentMob>
        <ContatoTextoMob>
            <h1>Contato</h1>
            <h3>Por favor preencha o formulário para nos enviar um email.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut id totam alias mollitia error rem, illum, voluptatem ad quam dolorum odit assumenda nisi quis dolore omnis, esse tempore optio.</p>
            <p><b>E-mail:</b></p>
            <p><b>aromaway@email.com</b></p>
        </ContatoTextoMob>
        <img height="60%" alt="separador" src={SeparadorVert}/>
        <ContatoFormMob>
            <FormResponsivo />
        </ContatoFormMob>
        </ContentMob>

        
        </>
    );
}



function ContatoDesk(){
    return(
        <>
        <ContentDesk>
        <ContatoTextoDesk>
            <h1>Contato</h1>
            <h3>Por favor preencha o formulário para nos enviar um email.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae aut id totam alias mollitia error rem, illum, voluptatem ad quam dolorum odit assumenda nisi quis dolore omnis, esse tempore optio.</p>
            <p><b>E-mail:</b></p>
            <p><b>aromaway@email.com</b></p>
        </ContatoTextoDesk>
        <img height="60%" alt="separador" src={SeparadorVert}/>
        <ContatoFormDesk>
            <FormResponsivo />
        </ContatoFormDesk>
        </ContentDesk>

        
        </>
    );
}

export const ContatoResponsivo = () => {
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
    <ContatoMob />
    </>
    :
    <>
    <ContatoDesk />
    </>
    ;
  }

  export default ContatoResponsivo;