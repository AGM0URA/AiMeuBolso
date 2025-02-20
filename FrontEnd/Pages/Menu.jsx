import React from "react";
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
    TituloDosBotoes
    
 } from "../Styles/Menu.js";
import { ConfigResponsivo } from "../Styles/ConfigGlobal.js";


const MenuPage = () => {
    return (
        <>
        <MenuContainer>
            <TituloH1>Ai Meu Bolso</TituloH1>
            <ContainerSaldoEmConta>
                <TituloSaldoEmConta>Saldo em conta</TituloSaldoEmConta>
                <ValorSaldoEmConta>R$1000</ValorSaldoEmConta>
            </ContainerSaldoEmConta>
            <ContainerEntradaESaida>
                <BotaoEntrada>
                    <TituloDosBotoes>Nova entrada</TituloDosBotoes>
                </BotaoEntrada>
                <BotaoSaida>
                    <TituloDosBotoes>Nova saída</TituloDosBotoes>
                </BotaoSaida>
            </ContainerEntradaESaida>
        </MenuContainer>
        </>
    );
};

export default MenuPage;
