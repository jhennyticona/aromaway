import styled from 'styled-components';
import loading from '../../assets/img/spinner.gif'
import Inicio from '../Inicio/Inicio';
import './Loader.css';


const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`


export function Loading(){


    return(
        <>
        <Loader>
        <div>
         <h1>Carregando...</h1>   
        </div>
        <div> 
            <img alt="loading" src={loading}/>
        </div>
        </Loader>
        </>
    );
}


