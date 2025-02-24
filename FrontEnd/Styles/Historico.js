import styled from "styled-components";
import { Cor } from "./ConfigGlobal";


export const HistoricoContainer = styled.div`
    background-color: ${Cor.Cores.Branco};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const SetaVoltar = styled.div`
    background-color: ${Cor.Cores.Branco};
    width: 20px;
    height: 20px;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 15px;
    margin-bottom:50px;
 

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

`;export const TituloH1 = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:25px ;
    font-weight: 900; 
    font-style: normal; 
    color:${Cor.Cores.VerdeEscuro};
    margin-top: 20px;
    margin-bottom: 50px;
    align-self:center;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const BotaoMeses = styled.button`
    display:flex;
    background-color: ${Cor.Cores.VerdeEscuro};
    color:${Cor.Cores.Branco};
    width:340px;
    height:50px;
    margin-left: 18px;
    border-radius:50px ;
    display: flex;
    border: none;
    align-items:center;
    flex-direction:column;
    font-size:30px;
    padding: 8px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;


export const ListaDeMeses = styled.ul`
    list-style: none;
    padding: 0;
    display: ${({ show }) => (show ? "block" : "none")};
    margin: 0 auto;
    margin-top: 10px;
    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

`;

export const MesesDaLista = styled.li`
    background:${Cor.Cores.VerdeClarinho};
    width:310px;
    padding: 10px;
    margin: 5px;
    border-radius: 35px;
    text-align: center;
    font-size: 25px;
    color:${Cor.Cores.VerdeEscuro};


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

`;