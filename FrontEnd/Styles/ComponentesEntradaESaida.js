import styled from "styled-components";
import { Cor } from "./ConfigGlobal";

export const NovaEntradaESaidaContainer = styled.div`
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
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 15px;

    @media (min-width: 768px) {
        font-size: 2.5rem;
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
    margin-top: 50px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const TituloInput = styled.h1`
    display: flex;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-size:25px ;
    font-weight: 600; 
    font-style: normal; 
    color:${Cor.Cores.VerdeEscuro};
    margin-left: 20px;
    margin-top: 30px;


    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const InputContainer = styled.div`
@media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

export const Input = styled.input`
    height:${(props) => props.$width || "40px"};
    width: 310px;
    background-color:${Cor.Cores.VerdeClarinho};
    margin-left: 15px;
    border-radius: 30px;
    border: none;
    padding: 10px 15px;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

`;

export const Textarea = styled.textarea`
    width: 310px;
    height: 100px;
    background-color: ${Cor.Cores.VerdeClarinho};
    margin-top: 10px;
    margin-left: 15px;
    margin-bottom: 20px;
    border-radius: 30px;
    border: none;
    resize: none;
    padding: 10px 15px;
    font-size: 16px;
    font-family: "Inter", sans-serif;


    &::placeholder {
        
        font-style: italic;
    }

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;


export const BotaoSalvar = styled.button`
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