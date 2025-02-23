import styled from "styled-components";
import { Cor } from "./ConfigGlobal";

export const MenuContainer = styled.div`
    background-color: ${Cor.Cores.Branco};
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    

    @media (min-width: 768px) {
        height: 70px;
    }                                                        
`;

export const TituloH1 = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:25px ;
    font-weight: 900; 
    font-style: normal; 
    color:${Cor.Cores.VerdeEscuro};
    margin-left: 20px;
    margin-top: 5px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ContainerSaldoEmConta = styled.div`
    display:flex;
    background-color: ${Cor.Cores.VerdeEscuro};
    width:355px;
    height:150px;
    margin-left: 10px;
    border-radius:21px ;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const TituloSaldoEmConta = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:15px ;
    font-weight: 400; 
    font-style: normal; 
    color:${Cor.Cores.Branco};
    margin-left: 30px;
    margin-top: 20px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ValorSaldoEmConta = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:40px ;
    font-weight: 900; 
    font-style: normal; 
    color:${Cor.Cores.Branco};
    margin-left: 30px;
    margin-top: 5px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const ContainerEntradaESaida = styled.div`
    display:flex;
    width:365px;
    height:150px;
    margin-top: 20px;
    border-radius:21px ;
    display: flex;
    justify-content: space-between;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const TituloDosBotoes = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:15px ;
    font-weight: 900; 
    font-style: normal; 
    color:${Cor.Cores.Branco};
    margin-left: 30px;
    margin-top: 15px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const BotaoEntrada = styled.button`
    display:flex;
    background-color: ${Cor.Cores.VerdeEscuro};
    width:175px;
    height:175px;
    margin-left: 10px;
    border-radius:21px ;
    display: flex;
    border: none;
    background-image: url("frontEnd/Images/ImgNovaEntrada.png");
    background-size: 110px 110px;
    background-repeat: no-repeat; 
    background-position: center 55px; 

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const BotaoSaida = styled.button`
    display:flex;
    background-color: ${Cor.Cores.VerdeEscuro};
    width:175px;
    height:175px;
    margin-left: 10px;
    border-radius:21px ;
    display: flex;
    border: none;
    background-image: url("frontEnd/Images/ImgNovaSaida.png");
    background-size: 110px 110px;
    background-repeat: no-repeat; 
    background-position: center 55px;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;


export const Historico = styled.button`
display:flex;
background-color: ${Cor.Cores.VerdeEscuro};
width:355px;
height:150px;
margin-left: 11px;
margin-top: 50px;
border: none;
border-radius:21px ;
display: flex;
justify-content: space-between;

@media (min-width: 768px) {
    font-size: 2.5rem;
}
`;


export const TituloHistorico = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:30px ;
    font-weight: 900; 
    font-style: normal; 
    color:${Cor.Cores.Branco};
   


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;


