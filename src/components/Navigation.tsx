import styled from "styled-components";

const Navigation = styled.nav`
    
    background-color: #1f2531;
    height: 100%;
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        position: relative;
    }
    li:hover span{
        transform: translate(0, -50%);
        opacity: 1;
        /* cursor: default; */
    }
    span{
        width: auto;
        top: 50%;
        left: 100%;
        padding: 8px;
        position: absolute;
        border-radius: 4px;
        z-index: 1000;
        font-size: 0.75rem;
        opacity: 0;
        
        transform: translate(-100%,-50%);
        background-color: #1f2531;
        box-shadow: 0 0 8px rgba(0, 0, 0, .3);
        transition: .3s;
    }
    span::before, span::after{
        content: '';
        border: 12px solid transparent;
        border-right-color: #1f2531;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-100%, -50%);
    }
    span::before{
        border-right-color: rgba(0, 0, 0, .3);
        filter: blur(1px);
    }
    a{
        font-size: 1.25rem;
        padding: 30px 18px;
        opacity: .6;
    }
    .brand, .active{
        position: relative;
    }
    li:hover > a, .active > a{
        opacity: 1;
    }
    .active::before{
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
`;

export default Navigation;