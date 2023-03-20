import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    body{
        margin: 0;
        background-color: #282c38;
    }

    *{
        scroll-behavior: smooth;
        color: rgb(206, 210, 211);
        font-size: 1rem;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        text-decoration: none;
    }

    .btn, button {
        border: none;
        color: rgb(206, 210, 211);
        background-color: transparent;
        border-radius: 4px;
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
    }
`;


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    border-bottom: 1px solid #3b3b45;

    .brand{
        position: relative;
        
        &.active::before{
            content: '';
            height: 60%;
            width: 6px;
            display: inline-block;
            background-color: #2daff2;
            border-bottom-right-radius: 4px;
            border-top-right-radius: 4px;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
    & > div{
        width: 100%;
        display: flex;
        padding: 0 20px;
        align-items: center;
    }
`;

export default Header;
export { GlobalStyle };