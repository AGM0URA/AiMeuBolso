import styled from "styled-components";

export const MenuContainer = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        height: 70px;
    }
`;

export const TituloH1 = styled.h1`
    display: flex;
    font-family: 'League Gothic', sans-serif; 
    font-size: 2rem; 
    color: #2a6c4a; 
    margin-left: 40px;
    padding-top: 12px;

    @media (min-width: 768px) {
        font-size: 2.5rem; 
    }
`
