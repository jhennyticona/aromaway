import React from "react";
import styled from "styled-components";
import "./Sobre.css";
import sobreimagem from "../../assets/img/loja.jpg";
import ImgLinkedin from "../../assets/img/linkedin.png";
const SectionTi = styled.h3`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
  "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: left;
  color: #5eb229;
  font-size: 30px;
`;

const SectionP = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-align: justify;
  font-weight: 400;
  line-height: 36px;
`;
const SobreImg = styled.img`
  width: 400px;
  height: 300px;
  
`;
const SectionP2 = styled.p`
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-align: justify;
  font-weight: 400;
  line-height: 36px;
`;
const SectionTitleTit = styled.h1`
  text-align: center;
  color: #5eb229;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 50px;
`;
const SobreImgLinkedin = styled.img`
  width: 30px;
  height: 30px;
`;
const participantes = [
  {
    nome: "Amandha Carvalho",
    imagem: "https://avatars.githubusercontent.com/u/148123992?v=4",
    Lhref: "https://www.linkedin.com/in/amandha-carvalho-ab1a94281/",
  },
  {
    nome: "Jhenny Ticona de Castro",
    sobre: "./SectionJ",
    imagem: "https://avatars.githubusercontent.com/u/102036237?v=4",
    Lhref: "https://www.linkedin.com/in/jhennyticona/",
  },
];
function Section() {
  return (
    <>
      <div className="category" id="Category">
        <div className="categoryWrap">
          <SectionTitleTit>Bem Vindo ao AromaWay!</SectionTitleTit>
        </div>
      </div>
      <div className="section">
        <div className="sectionWrap">
          <div className="sectionContent">
            <div className="sectionTextImage">
              <div className="sectionText-p">
                <SectionP>
                  Descubra o mundo da harmonia e bem-estar na AromaWay, onde nós
                  celebramos a beleza e o poder dos óleos essenciais, velas
                  aromáticas e aromatizadores de ambiente. Somos apaixonados por
                  criar produtos que transformam o seu espaço em um refúgio de
                  serenidade, oferecendo uma ampla seleção de óleos essenciais
                  puros, cuidadosamente extraídos de fontes botânicas de
                  qualidade. Nossas velas aromáticas artesanais, feitas com cera
                  de alta qualidade e fragrâncias naturais, proporcionam uma
                  atmosfera acolhedora e relaxante em qualquer lugar. Além
                  disso, os nossos aromatizadores de ambiente são projetados
                  para tornar a sua casa ou escritório um oásis de
                  tranquilidade. Explore a nossa coleção e descubra como podemos
                  ajudá-lo a criar um ambiente perfeito para o seu bem-estar
                  físico e emocional. Junte-se a nós na jornada da aromaterapia
                  e do equilíbrio.
                </SectionP>
              </div>
              <div>
                <SobreImg src={sobreimagem} alt="Imagem que mostra a loja"></SobreImg>
              </div>
            </div>
            <div className="sectionText-p">
              <SectionTi>Conheça a nossa Equipe!</SectionTi>
              <SectionP2>
                <div className="participant-images">
                  {participantes.map((participante, index) => (
                    <div key={index}>
                      <img
                        src={participante.imagem}
                        alt={participante.nome}
                        width="180px"
                        height="180px"
                      />
                      <p>{participante.nome}</p>
                      <a href={participante.Lhref} target="_blank" rel="noopener noreferrer">
        <SobreImgLinkedin src={ImgLinkedin} alt="Logo do LinkedIn" />
      </a>
                    </div>
                  ))}
                </div>
              </SectionP2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
