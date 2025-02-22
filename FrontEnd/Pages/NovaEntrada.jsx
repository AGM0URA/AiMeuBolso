import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
    NovaEntradaContainer,
    TituloH1,
    TituloInput,
    SetaVoltar,
    InputContainer,
    Input,
    Textarea,
    BotaoSalvar
} from "../Styles/NovaEntrada";

const PaginaNovaEntrada = () => {
    const Navegar = useNavigate();
    return (
       <NovaEntradaContainer>
        {/*Seta temporaria, aprender a botar icon ainda*/}
        <SetaVoltar onClick={() => Navegar("/")}>⬅️</SetaVoltar>
        <TituloH1>Registre aqui a entrada</TituloH1>
        
        <InputContainer>
        <TituloInput>Valor</TituloInput>
        <Input type="number"></Input>
        <TituloInput >Data</TituloInput>
        <Input type="date" ></Input>
        <TituloInput >Descrição</TituloInput>
        <Textarea type="text"></Textarea>
        <BotaoSalvar>Salvar</BotaoSalvar>

        </InputContainer>
       </NovaEntradaContainer>
    );
};

export default PaginaNovaEntrada;