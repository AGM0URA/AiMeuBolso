import { createGlobalStyle } from "styled-components";

export const Cor = {
    Cores: {
      Branco: '#FFFFFF',
      VerdeEscuro: '#64C27B',
      VerdeClarinho: '#D0FDD7', 
      VerdeMedio: '#9BFAB0',
      text: '#333333',
    },
  };


export const ConfigResponsivo = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100vh;
    width: 100vw;
    overflow: hidden; 
    background-color: ${Cor.Cores.Branco};
    font-family: 'Arial', sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Responsividade */
  body {
    font-size: 16px;

    @media (max-width: 1024px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 13px;
    }
  }

  h1 {
    font-size: 2rem;

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
    }
  }

  button {
    padding: 12px 24px;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      padding: 10px 20px;
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      padding: 8px 16px;
      font-size: 0.85rem;
    }
  }
`;

