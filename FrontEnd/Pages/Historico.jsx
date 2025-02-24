import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import{
    HistoricoContainer,
    SetaVoltar,
    TituloH1,
    BotaoMeses,
    ListaDeMeses,
    MesesDaLista
} from "../Styles/Historico.js"
import { Cor } from "../Styles/ConfigGlobal.js";
import { GoArrowLeft } from "react-icons/go";

const HistoricoPage = () =>{
    const Navegar = useNavigate();
    const [showList, setShowList] = useState(false);
    return(
        <>
        <HistoricoContainer>
        <SetaVoltar onClick={() => Navegar("/")}><GoArrowLeft size={50} color={Cor.Cores.VerdeEscuro}></GoArrowLeft></SetaVoltar>
        <TituloH1>Registros dos meses</TituloH1>
        <BotaoMeses onClick={() => setShowList(!showList)}>Escolha o mês</BotaoMeses>
        <ListaDeMeses show={showList}>
           <MesesDaLista>Janeiro</MesesDaLista> 
           <MesesDaLista>Fevereiro</MesesDaLista> 
           <MesesDaLista>Março</MesesDaLista> 
           <MesesDaLista>Abril</MesesDaLista> 
           <MesesDaLista>Maio</MesesDaLista> 
           <MesesDaLista>Junho</MesesDaLista> 
           <MesesDaLista>Julho</MesesDaLista> 
           <MesesDaLista>Agosto</MesesDaLista> 
           <MesesDaLista>Setembro</MesesDaLista> 
           <MesesDaLista>Outubro</MesesDaLista> 
           <MesesDaLista>Novembro</MesesDaLista> 
           <MesesDaLista>Dezembro</MesesDaLista> 
        </ListaDeMeses>
        </HistoricoContainer>
        </>
    )


}


export default HistoricoPage