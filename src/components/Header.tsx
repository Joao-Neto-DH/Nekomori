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

const Header = styled.header<{}>`
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
    > div{
        width: 100%;
        display: flex;
        padding: 0 20px;
        align-items: center;
    }
    div.profile{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    form{
        margin: 0 auto;
        width: 40vw;
        display: flex;
        align-items: stretch;
        background: #1f232e;
        border-radius: 4px;
        overflow: hidden;
    }
    form *{
        margin: 0;
        border: none;
        background-color: transparent;
    }
    input{
        padding: 12px;
        padding-right: 0;
        width: 100%;
        align-self: stretch;
        outline: none;
    }
    form button{
        padding: 10px;
    }
    .user-img{
        width: 36px;
        height: 36px;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
    }
    .user-img img{
        width: 100%;
    }
    .user{
        position: relative;
    }
    .user:focus ul, .user:focus-within ul{
        opacity: 1;
        transform: translateY(110%);
        visibility: visible;
    }
    .user ul{
        visibility: hidden;
        list-style: none;
        padding: 8px;
        margin: 0;
        background-color: #1f2531;
        box-shadow: 0 2px 10px rgba(0, 0, 0, .3);
        text-align: left;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateY(80%);

        opacity: 0;
        transition: .1s;
        z-index: 10000;
    }
    .user a{
        display: block;
        padding: 8px 16px;
    }
    .user a:hover{
        background-color: #282c38;
    }
`;

export default Header;
export { GlobalStyle };