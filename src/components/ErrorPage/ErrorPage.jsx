import React from 'react';
import styled from 'styled-components';
import HeaderResponsivo from '../Header/HeaderResp';
import Error from '../../assets/img/errordog.gif';


//Styled components Desktop//

const HeroSectionDesk = styled.section`
  
    height: 54rem;
    width: 100%;
    background: #808000;
`;
const HeroContentDesk = styled.div`
    display: flex; 
    flex-direction: column;
    width: 120rem;
    height: 40rem;
    text-align: center;
    
  
    
`;
const HeroTextoDesk = styled.div`
   display: flex;
  flex-direction: column;
    text-align: center;
  

`;

const Hero404Desk = styled.p`
    display: flex;
    align-items:center;
    justify-content: center;
    color: #00522E;
    text-align: center;
    font-family: Playfair Display;
    font-size: 96px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    margin-left: -700px;
`

const HeroTitleDesk = styled.h1`

    color: #FFF;
    font-family: Playfair Display;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; 
    width: 1199px;

`;

const HeroParagrafoDesk = styled.p`

    color: #fff;
    font-family: Playfair Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 1199px;
`;
const AssetsDesk = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
`;
const HeroButtonDesk = styled.button`
    background-color: #00522E;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 24px;
    width: 179px;
    height: 66px;
    margin-top:-350px;
    margin-left:4
    
`;
const HeroImageDesk = styled.div`
   
    margin-left: 150px;
    margin-top: -100px;
    
    img{
        border: 2px solid #808000;
        border-radius: 50px;  
    }  
`;

//styled components Mobile//


const HeroSectionMob = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 360px;
    height: 753px;
    background: var(--Azul-escuro, #041833);
    
`;
const HeroContentMob = styled.div`
    width: 328px;
    height: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  
    
`;
const HeroTextoMob = styled.div`
    display: flex;
    gap: 3.2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
    margin-top: 550px;
    width: 288px;

`;
const Hero404Mob = styled.p`
    color: #1875E8;
    text-align: center;
    font-family: Playfair Display;
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
    width: 156px;
`

const HeroTitleMob = styled.h1`

    color: #FFF;
    text-align: center;
    font-family: Playfair Display;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 328;

`;

const HeroParagrafoMob = styled.p`

    color: #fff;
    text-align: center;
    font-family: Raleway;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 328px;
`;
const AssetsMob = styled.div`
    Display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: column-wrap;
    gap: 10px;
`;
const HeroButtonMob = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 24px;
    width: 156px;
    height: 66px;
    margin-top: -150px;
    margin-left: 120px;
    
`;
const HeroImageMob = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    img{
    display: flex;
    flex-flow: column wrap;
    align-items: baseline;
    margin-top: 400px;
    margin-left: -250px;
    

    }
  
`;


const HeroError = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 620;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Retorna uma função de effect que remove o event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width < breakpoint ?
        <HeroSectionMob>

            <HeroContentMob>
                <HeroTextoMob>
                    <Hero404Mob>404</Hero404Mob>
                    <HeroTitleMob>Ops! Página não econtrada.</HeroTitleMob>
                    <HeroParagrafoMob>Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página ou volte para a página inicial.</HeroParagrafoMob>
                    
                </HeroTextoMob><br />

            </HeroContentMob>
            <AssetsMob>
                <HeroButtonMob>Voltar</HeroButtonMob>
                <HeroImageMob>
                    <img width="377px" height="419px" alt="error" src={Error} />
                </HeroImageMob>
            </AssetsMob>
        </HeroSectionMob>
        :
        <HeroSectionDesk>
            <HeroContentDesk>
                <HeroTextoDesk>
                    <Hero404Desk>404</Hero404Desk>
                    <HeroTitleDesk>Ops! Página não econtrada.</HeroTitleDesk>
                    <HeroParagrafoDesk>Tem certeza de que era isso que você estava procurando? Aguarde uns instantes e recarregue a página ou volte para a página inicial.</HeroParagrafoDesk>

                </HeroTextoDesk><br />
            </HeroContentDesk>
            <AssetsDesk>
                <HeroButtonDesk>Voltar</HeroButtonDesk>
                <HeroImageDesk>
                    <img alt="error" src={Error} />
                </HeroImageDesk>
            </AssetsDesk>
        </HeroSectionDesk>
        ;
}






export function ErrorPage() {
    return (
        <>
            <div>
                <HeaderResponsivo />
                <HeroError />
            </div>
        </>
    );
}

export default ErrorPage;