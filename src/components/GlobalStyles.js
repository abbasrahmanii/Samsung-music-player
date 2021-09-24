import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    ul{
        list-style: none;
    }
    a{
        color: #111;
        text-decoration: none;
    }
    input:focus{
        outline: none;
    }
`;

export default GlobalStyles;
