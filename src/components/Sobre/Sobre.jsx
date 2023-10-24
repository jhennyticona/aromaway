import React from "react";
import styled from "styled-components";
import ImgLinkedin from "../../assets/img/linkedin.png";

const SectionTi = styled.h3`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-align: left;
  color: #5eb229;
  font-size: 30px;
`;

const SectionP = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-align: justify;
  font-weight: 400;
  line-height: 36px;
`;


const SectionP2 = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 18px;
  text-align: justify;
  font-weight: 400;
  line-height: 36px;
  display: flex;
  flex-wrap: wrap;
`;

const ParticipantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px; /* Add some spacing between participants */
`;

const SectionTitleTit = styled.h1`
  text-align: center;
  color: #00522e;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const SobreImgLinkedin = styled.img`
  width: 30px;
  height: 30px;
`;

const Sectionn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px; /* Adicione uma margem de 20px em todos os lados da página */
  width: calc(100% - 180px);
`;

const SectionWrap = styled.div`
  width: 120rem;
  display: flex;
  justify-content: center;
`;

const SectionContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  gap: 3.2rem;
`;

const SectionTextP = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  gap: 2.8rem;
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
      <div>
        <SectionTitleTit>Bem Vindo ao AromaWay!</SectionTitleTit>
      </div>

      <Sectionn>
        <SectionWrap>
          <SectionContent>
            <SectionTextP>
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
              <SectionTi>Nosso Time</SectionTi>
              <SectionP2>
                
                {participantes.map((participante, index) => (
                  <ParticipantContainer key={index}>
                    <img
                      src={participante.imagem}
                      alt={participante.nome}
                      width="180px"
                      height="180px"
                    />
                    <p>{participante.nome}</p>
                    <a
                      href={participante.Lhref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SobreImgLinkedin
                        src={ImgLinkedin}
                        alt="Logo do LinkedIn"
                      />
                    </a>
                  </ParticipantContainer>
                ))}
              </SectionP2>
            </SectionTextP>
          </SectionContent>
        </SectionWrap>
      </Sectionn>
    </>
  );
}

export default Section;
