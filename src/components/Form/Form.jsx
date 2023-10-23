import React from 'react';
import styled from 'styled-components';
import './Form.css';

// Styled components para desktop

const FormContentDesk= styled.form`
display: flex;
flex-direction: column;
gap: 15px;
margin-right: 60px;
`;
const NomeDesk = styled.div`
input{
  width: 400px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}

`;
const EmailDesk = styled.div`
input{
  width: 400px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}
`;
const AssuntoDesk = styled.div`
input{
  width: 400px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}
`;
const MenssagemDesk =styled.div`
input{
  width: 400px;
  height: 100px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}

`;
const BtnDesk = styled.div`
button{
  width: 200px;
  height: 40px;
  background-color: #00522E;
  color: #fffff9;
  border-radius: 20px;
  cursor: pointer;

}
`
// Styled components para mobile

const FormContentMob= styled.form`
display: flex;
flex-direction: column;
gap: 15px;
margin-right: 60px;
`;
const NomeMob = styled.div`
input{
  width: 200px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}

`;
const EmailMob = styled.div`
input{
  width: 200px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}
`;
const AssuntoMob = styled.div`
input{
  width: 200px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}
`;
const MenssagemMob =styled.div`
input{
  width: 200px;
  height: 100px;
}
input:hover{
  background-color: #808000;
  opacity: 0.4;
}

`;
const BtnMob = styled.div`
button{
  width: 200px;
  height: 40px;
  background-color: #00522E;
  color: #fffff9;
  border-radius: 20px;
  cursor: pointer;

}
`

function FormMob() {
  return (
    <>
    <FormContentMob>
      <NomeMob>
        {/* <label>Nome</label> */}
        
        <input type="input" name="nome" placeholder='NOME'/>
      </NomeMob>
      <EmailMob>
        {/* <label>Nome</label> */}
        
        <input type="email" name="email" placeholder='E-MAIL'/>
      </EmailMob>
      <AssuntoMob>
        {/* <label>Nome</label> */}
        
        <input type="input" name="assunto" placeholder='ASSUNTO'/>
      </AssuntoMob>
      <MenssagemMob>
        {/* <label>Nome</label> */}
        
        <input type="input" name="menssagem" placeholder='MENSSAGEM'/>
      </MenssagemMob><br/>
      <BtnMob>
      <button>Enviar</button>
      </BtnMob>
    </FormContentMob>
    
    </>
  );
}


function FormDesk() {
  return (
    <>
    <FormContentDesk>
      <NomeDesk>
        {/* <label>Nome</label> */}
        
        <input type="input" name="nome" placeholder='NOME'/>
      </NomeDesk>
      <EmailDesk>
        {/* <label>Nome</label> */}
        
        <input type="email" name="email" placeholder='E-MAIL'/>
      </EmailDesk>
      <AssuntoDesk>
        {/* <label>Nome</label> */}
        
        <input type="input" name="assunto" placeholder='ASSUNTO'/>
      </AssuntoDesk>
      <MenssagemDesk>
        {/* <label>Nome</label> */}
        
        <input type="input" name="menssagem" placeholder='MENSSAGEM'/>
      </MenssagemDesk><br/>
      <BtnDesk>
      <button>Enviar</button>
      </BtnDesk>
    </FormContentDesk>
    
    </>
  );
}



export const FormResponsivo = () => {
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
  <FormMob />
  </>
  :
  <>
  <FormDesk />
  </>
  ;
}

export default FormResponsivo;