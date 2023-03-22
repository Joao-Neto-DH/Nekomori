import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationUnstyled: React.FC<{className?: string}> = ({className}) => (
    <nav className={className}>
        <ul>
            <li><NavLink to={"/"} className={props=>`${props.isActive && "active"} ri-play-fill btn`}><span aria-label="player">Reprodutor</span></NavLink></li>
            <li><NavLink to={"/"} className={props=>`${props.isActive && "active"} ri-chat-3-fill btn`}><span aria-label="bate-papo">Bate-Papo</span></NavLink></li>
            <li><NavLink to={"/"} className={props=>`${props.isActive && "active"} ri-newspaper-fill btn`}><span aria-label="notícias">Notícias</span></NavLink></li>
        </ul>
    </nav>
);

const Navigation = styled(NavigationUnstyled)`
    
    background-color: ${props => props.theme.colors.secondary};
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
        border-radius: ${props => props.theme.borderRadius};
        z-index: 1000;
        font-size: 0.75rem;
        opacity: 0;
        
        transform: translate(-100%,-50%);
        background-color: ${props => props.theme.colors.secondary};
        box-shadow: 0 0 8px rgba(0, 0, 0, .3);
        transition: .3s;
    }
    span::before, span::after{
        content: '';
        border: 12px solid transparent;
        border-right-color: ${props => props.theme.colors.secondary};
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
        opacity: 0.6;
    }
    li:hover > a, a.active{
        opacity: 1;
    }
    .active::after{
        content: '';
        height: 60%;
        width: 6px;
        display: inline-block;
        background-color: #2daff2;
        border-bottom-right-radius: ${props => props.theme.borderRadius};
        border-top-right-radius: ${props => props.theme.borderRadius};
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%,-50%);
    }
`;

export default Navigation;