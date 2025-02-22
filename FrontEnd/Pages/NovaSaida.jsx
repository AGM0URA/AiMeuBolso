import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
    NovaEntradaESaidaContainer,
    TituloH1,
    TituloInput,
    SetaVoltar,
    InputContainer,
    Input,
    Textarea,
    BotaoSalvar
} from "../Styles/ComponentesEntradaESaida.js";



const PaginaNovaSaida = () =>{
    const Navegar = useNavigate();
    return (
       <NovaEntradaESaidaContainer>
        {/*Seta temporaria, aprender a botar icon ainda*/}
        <SetaVoltar onClick={() => Navegar("/")}>⬅️</SetaVoltar>
        <TituloH1>Registre aqui a Saida</TituloH1>
        
        <InputContainer>
        <TituloInput>Valor</TituloInput>
        <Input type="number"></Input>
        <TituloInput >Data</TituloInput>
        <Input type="date" ></Input>
        <TituloInput >Descrição</TituloInput>
        <Textarea type="text"></Textarea>
        <BotaoSalvar>Salvar</BotaoSalvar>

        </InputContainer>
       </NovaEntradaESaidaContainer>
    );
};

export default PaginaNovaSaida