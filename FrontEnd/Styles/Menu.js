import React from "react";
import Styled from "styled-components"

export const MenuContainer = styled.div`
    background-color:#fff;
    width: 100%; 
    height: 80px;
    position: sticky; 
    top: 0; 
    display:flex;
    align-items: center;
    justify-content: space-between; 

    @media (min-width: 768px) {
        height: 70px;
    }
`