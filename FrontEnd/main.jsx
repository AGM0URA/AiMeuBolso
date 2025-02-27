import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.jsx";
import { Cor } from "./Styles/ConfigGlobal.js";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider theme={Cor}>
            <App />
        </ThemeProvider>
    </StrictMode>
);
