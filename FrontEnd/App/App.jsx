import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "../Pages/Menu";

const AppContainer = styled.div`
    width: 100%;
    max-width: 480px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: #f70000;
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Routes>
                    <Route path="/" element={<MenuPage />} />
                </Routes>
            </AppContainer>
        </BrowserRouter>
    );
};

export default App;
