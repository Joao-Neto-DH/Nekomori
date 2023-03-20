import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 8px;
        height: 8px;
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 12px;
        background-color: #171a22;
    }
    body{
        margin: 0;
        background-color: ${props => props.theme.colors.main};
    }

    *{
        scroll-behavior: smooth;
        color: rgb(${props => props.theme.colors.text});
        font-size: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-decoration: none;
    }

    .btn, button {
        border: none;
        color: rgb(${props => props.theme.colors.text});
        background-color: transparent;
        border-radius: ${props => props.theme.borderRadius};
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
    }
`;

export default GlobalStyle;