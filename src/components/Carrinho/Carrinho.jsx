import styled from "styled-components";
import { useState } from "react";
import React from "react";
import Kit from "../../assets/img/kit.jpg";
import Kit2 from "../../assets/img/kit-figo.webp";
import Kit3 from "../../assets/img/kit-aroma.webp";
import Kit4 from "../../assets/img/refillavanda.jpg";

function Carrinho(){
    return(
        <>
       
        <Produto />
        <Avaliacao />
      
        </>
    )
}

const ContentCarrinho = styled.div`
display: flex;
flex-direction:row;
align-items: center;
margin-left: 20px;
`
const Cards = styled.div`
display: flex; 
align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 100px;
gap: 10px;
`
const Foco = styled.div`
display: flex;
align-items: center;
`
const Oferta = styled.div`
display: flex
flex-direction: column
`
const Lista = styled.div`
select{
    width:200px;
    height: 30px;
    margin-bottom:10px;
}
button{
    width:200px;
    height: 40px;
    background-color: #00522E;
  color: #fffff9;
  border-radius: 20px;
  cursor: pointer;
}
`

function Produto (){

        return(
        <>
        <ContentCarrinho>
        <Cards>
            <img width="100px" height="100px"src={Kit}/>
            <img width="100px" height="100px"src={Kit2}/>
            <img width="100px" height="100px"src={Kit3}/>
            <img width="100px" height="100px"src={Kit4}/>
            
        </Cards>
        <Foco>
        <img src={Kit3}/>
        </Foco>
        <Oferta>
            <h1>Kit Aromatizador de Ambiente</h1>
            <h3>R$145,00</h3>
            <p>
                2x de R$72,50 sem juros
                5% de desconto pagando com PIX                
            </p>
            <h6>Ver mais detalhes</h6>
        <Lista>
            <label>Essência</label><br/>
            <select>
                <option>Lavanda</option>
                <option>Figo</option>
                <option>Bamboo</option>
                <option>Alecrim</option>
            </select><br/>
            <button>Comprar</button>
        </Lista>
        </Oferta>
        </ContentCarrinho>
        </>
    )
}


const ContentAva = styled.div`
text-align: left;
margin-left: 100px;
margin-bottom: 200px;
textarea{
    width: 300px;
    height: 30px;
    border: 2px solid #808000;
}
button{
    width:200px;
    height: 40px;
    background-color: #00522E;
  color: #fffff9;
  border-radius: 20px;
  cursor: pointer;
}


`
function Avaliacao(){
    const[comentario, setcomentario] =  useState("")
    const[Comentarios,setcomentarios ] = useState([])
    const onClickHandler = () => {
      setcomentarios((Comentarios) => [...Comentarios,comentario])
    }
    const onChangeHandler = (a) =>{
      setcomentario(a.target.value)
    }
  
    return (
    <div className="container-principal" >
      {Comentarios.map((texto) => (
         <div className="caixa-texto">{texto}</div>
  
      ))}
      <ContentAva className="container-flex">
       
        <h3 className="titulo-comentario">Avalie-nos</h3>
        <textarea className="caixa-input" value={comentario} onChange={onChangeHandler} /><br />
        <button onClick={onClickHandler} className="botao-comentario">Enviar</button>
      </ContentAva>
    </div>
    )
  }
  
  

export default Carrinho;