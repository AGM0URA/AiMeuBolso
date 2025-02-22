import React from "react";
import {
    NovaEntradaContainer,
    TituloH1,
    TituloInput,
    SetaVoltar,
    InputContainer,
    Input,
    Textarea
} from "../Styles/NovaEntrada";

const PaginaNovaEntrada = () => {
    return (
       <NovaEntradaContainer>
        <SetaVoltar>⬅️</SetaVoltar>
        <TituloH1>Registre aqui a entrada</TituloH1>
        
        <InputContainer>
        <TituloInput>Valor</TituloInput>
        <Input type="number"></Input>
        <TituloInput >Data</TituloInput>
        <Input type="date" ></Input>
        <TituloInput >Descrição</TituloInput>
        <Textarea type="text"></Textarea>


        </InputContainer>
       </NovaEntradaContainer>
    );
};

export default PaginaNovaEntrada;