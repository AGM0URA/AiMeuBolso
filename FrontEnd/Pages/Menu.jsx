import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import 
{ 
    MenuContainer,
    TituloH1,
    ContainerSaldoEmConta,
    TituloSaldoEmConta,
    ValorSaldoEmConta,
    ContainerEntradaESaida,
    BotaoEntrada,
    BotaoSaida,
    TituloDosBotoes,
    Historico,
    TituloHistorico
    
 } from "../Styles/Menu.js";
import { ConfigResponsivo } from "../Styles/ConfigGlobal.js";



const MenuPage = () => {
    const Navegar = useNavigate();
    return (
        <>
        <MenuContainer>
            <TituloH1>Ai Meu Bolso</TituloH1>
            <ContainerSaldoEmConta>
                <TituloSaldoEmConta>Saldo em conta</TituloSaldoEmConta>
                <ValorSaldoEmConta>R$1000</ValorSaldoEmConta>
            </ContainerSaldoEmConta>
            <ContainerEntradaESaida>
                <BotaoEntrada onClick={() => Navegar("/NovaEntrada")}>
                    <TituloDosBotoes>Nova entrada</TituloDosBotoes>
                </BotaoEntrada>
                <BotaoSaida>
                    <TituloDosBotoes onClick={()=> Navegar("/NovaSaida")}>Nova saída</TituloDosBotoes>
                </BotaoSaida>
            </ContainerEntradaESaida>
            <Historico onClick={()=> Navegar("/Historico")}>
                <TituloHistorico>Veja Aqui o Historico</TituloHistorico>
            </Historico>
        </MenuContainer>
        </>
    );
};

export default MenuPage;
