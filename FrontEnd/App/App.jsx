import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "../Pages/Menu";
import PaginaNovaEntrada from "../Pages/NovaEntrada";
import PaginaNovaSaida from "../Pages/NovaSaida";
import HistoricoPage from "../Pages/Historico";
import { Cor } from "../Styles/ConfigGlobal";

const AppContainer = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    margin: 0 auto;
    background-color:${Cor.Branco};
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<MenuPage />} />
                    <Route path="/NovaEntrada" element={<PaginaNovaEntrada/>} />
                    <Route path="/NovaSaida"element={<PaginaNovaSaida/>}/>
                    <Route path="/Historico"element={<HistoricoPage/>}/>
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
};

export default App;
