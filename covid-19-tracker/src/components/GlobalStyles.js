import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        overflow-x: none;
        
    }
    h1{
        font-size: 3rem;
        font-weight: lighter;
        color: #333;
    }
    h4{
        font-size: 1.7rem;
        color: #333;
    }
    p{
        font-size: 1.5rem;
    }
   
    input{
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
`;

export default GlobalStyles;
