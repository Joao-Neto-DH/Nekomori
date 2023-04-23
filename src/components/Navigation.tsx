import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../util/mediaQuery";
import MenuContext from "../util/MenuContext";

const NavigationUnstyled: React.FC<{
    className?: string
}> = ({className}) => {
    const { menu: {toggle, isOpened}} = useContext(MenuContext);

    return (
        <nav className={`${className} ${isOpened ? "opened" : ""}`}>
            <ul>
                <li className="close-menu" role={"button"} onClick={toggle}>
                    <span className="ri-close-line"></span>
                </li>
                <li>
                    <NavLink to={"/"} className={props=>`${props.isActive && "active"} btn`}>
                        <span className="ri-play-fill"></span>
                        <span aria-label="player">Reprodutor</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"} className={props=>`${props.isActive && "active"} btn`}>
                        <span className="ri-chat-3-fill"></span>
                        <span aria-label="bate-papo">Bate-Papo</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"} className={props=>`${props.isActive && "active"} btn`}>
                        <span className="ri-newspaper-fill"></span>
                        <span aria-label="notícias">Notícias</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

const Navigation = styled(NavigationUnstyled)`
    background-color: ${props => props.theme.colors.secondary};
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    transition: left 0.3s;
    overflow-y: auto;
    z-index: 999;
    
    &.opened{
        left: 0 !important;
    }

    ul{
        list-style: none;
        margin: 0;
        padding: 0;

        li{
            position: relative;
    
            &.close-menu{
                text-align: right;
                padding: 10px 6px;
                span{
                    font-size: 1.5rem;
                }
            }
    
            a{
                font-size: 1.25rem;
                padding: 15px 20px;
                opacity: 0.6;
                display: flex;
                flex-direction: row;
                align-items: center;
    
                span:not(:first-child){
                    padding: 8px;
                    font-size: 0.875rem;
                    
                    &::before, &::after{
                        content: '';
                        border: 12px solid transparent;
                        border-right-color: ${props => props.theme.colors.secondary};
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translate(-100%, -50%);
                    }
                }
    
                &.active::after{
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
            }
            &:hover > a, a.active{
                opacity: 1;
            }
        }
    }

    @media screen and (min-width: ${mediaQuery.tablet}px) {
        position: relative;
        left: 0;
        overflow-y: visible;

        li{    
            &.close-menu{
                display: none;
            }
            &:hover span:not(:first-child){
                transform: translate(0, -50%);
                opacity: 1;
            }
            a{
                padding: 30px 20px !important;

                span:not(:first-child){
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
                    
                    &::before, &::after{
                        content: '';
                        border: 12px solid transparent;
                        border-right-color: ${props => props.theme.colors.secondary};
                        position: absolute;
                        left: 0;
                        top: 50%;
                        transform: translate(-100%, -50%);
                    }
                    &::before{
                        border-right-color: rgba(0, 0, 0, .3);
                        filter: blur(1px);
                    }
                }
            }
        }
    } 
`;

export default Navigation;