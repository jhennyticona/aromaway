import React from "react";
import styled from "styled-components";
import imgrefil from "../../assets/img/refillavanda.jpg"
import imgvelas from "../../assets/img/velas.jpg"
import imgtro from "../../assets/img/essencia400.jpg"
import imgkit from "../../assets/img/kit.jpg"
import imghome from "../../assets/img/home.jpg"
import imgessencia from "../../assets/img/essencia.jpg"
import imgagua from "../../assets/img/agua.jpg"
import imglavanda from "../../assets/img/difusor.jpg"
import imgbaby from "../../assets/img/baby.jpg"
import imgvaretas from "../../assets/img/varetas.jpg"
import { Link } from 'react-router-dom';
import "./Loja.css";

const LojaContainer=styled.div`
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px;
  width: calc(100% - 180px);
`;
const CardsContainer = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
 
`;
const Card=styled.div`
width: 200px;
height: 450px;
  border: 1px solid #ddd;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px #5EB229;
`;
const CardImagem=styled.img`
width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;
const CardContent = styled.div`
  flex-grow: 1; /* Faz com que o conteúdo ocupe todo o espaço disponível */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;
const CardTitulo=styled.h3`
font-size: 16px;
  text-align: center;
  margin: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardDescricao=styled.p`
font-size: 12px;
  text-align: justify;
  margin: 10px 0;
  color:#00522E;
 
`;
const CardPreco=styled.p`
font-size: 16px;
text-align: center;
margin: 10px 0;
color:black;

`;

const Loja = () => {
  //Inicio do estado com uma lista de produtos
  const produtos = [
    {
      id: 1,
      nome: "Refil Lavanda 1L",
      preco: 79.99,
      foto: imgrefil,
      descricao:"Refil de recarga com a nossa fragancia que combate o estresse",
    },
    {
      id: 2,
      nome: "Velas Aromáticas",
      preco: 59.99,
      foto: imgvelas,
      descricao:"Velas artesanais com aromas importadas da França",
   
    },
    {
      id: 3,
      nome: "Difusor Trousseau 400ml",
      preco: 49.99,
      foto: imgtro,
      descricao:"Aromatizador de ambiente com o aroma mais vendido e conhecido",
    },
    {
      id: 4,
      nome: "Kit Lavabo Luxo",
      preco: 129.99,
      foto: imgkit,
      descricao:"Kit para banheiro que contém 1 Frasco para Difusor de Ambiente 250ml e 1 Frasco para Sabonete Líquido 250ml",
    },
    {
      id: 5,
      nome: "Home Spray",
      preco: 29.99,
      foto: imghome,
      descricao:"Basta algumas borrifadas para preencher o ambiente com sensações agradáveis e aromas sofisticados.",
    },
    {
      id: 6,
      nome: "Essência Pura 20ml",
      preco: 29.99,
      foto: imgessencia,
      descricao:"Essência pura para fazer aromatizadores,home spray e difusores.",
    },
    {
      id: 7,
      nome: "Agua de Lençóis 500ml",
      preco: 49.99,
      foto: imgagua,
      descricao:"Cheirinho para você borrifar no seu jogo de cama para garantir limpeza e frescor.",
    },
    {
      id: 8,
      nome: "Difusor 350ml",
      preco: 29.99,
      foto: imglavanda,
      descricao:"Aromatizador de ambiente com varetas.",
    },
    {
      id: 9,
      nome: "Difusor Baby",
      preco: 19.99,
      foto: imgbaby,
      descricao:"Pode ser uma lembrançinha do seu chá de bebé.",
    },
    {
      id: 10,
      nome: "Varetas Decoração",
      preco: 1.99,
      foto: imgvaretas,
      descricao:"Decoração de varetas para dar aquele toque.",
    },
  ];

  return (
   <LojaContainer>
<h1>Conheça Nossos Produtos</h1>
      <p>Explore nossa incrível coleção de produtos, que inclui óleos essenciais puros, velas aromáticas artesanais, difusores de ambiente e muito mais. Cada item foi cuidadosamente selecionado para proporcionar uma experiência única de bem-estar e tranquilidade para você e seu ambiente. </p>
      <p>Nossos produtos são feitos com os melhores ingredientes naturais e fragrâncias exquisitas para criar uma atmosfera relaxante em sua casa ou escritório. A AromaWay é o seu destino para encontrar o equilíbrio perfeito para o seu bem-estar físico e emocional. Explore nossa seleção e descubra como podemos ajudá-lo a criar o ambiente perfeito para você.</p>
    <hr />
    
     <CardsContainer>
        {produtos.map((produto) => (
        <Card key={produto.id}>
          
        <CardImagem src={produto.foto} alt="Descrição da imagem" />
        <CardContent>
          <Link to="/Carrinho">
          <CardTitulo>{produto.nome}
         </CardTitulo>
         </Link>
         <CardDescricao>{produto.descricao}</CardDescricao>
            <CardPreco>Preço: R$ {produto.preco}</CardPreco>
            </CardContent>
            
        </Card>
        ))}
     </CardsContainer>
   </LojaContainer>
      
   
  );
};

export default Loja;
