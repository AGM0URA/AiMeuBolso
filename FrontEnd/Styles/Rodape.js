import styled from "styled-components";
import { Cor } from "./ConfigGlobal.js";

export const ContainerRodape = styled.div`
    background-color: ${Cor.Cores.VerdeEscuro};
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
