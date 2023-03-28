// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../util/mediaQuery";

const LogoUnstyled: React.FC<{className?: string}> = ({className}) => (
    <NavLink to={"/"} aria-label="home" className={props=> `${className} ${props.isActive && "active"} ri-home-fill brand`}/>
);

const Logo = styled(LogoUnstyled)`
    display: none;

    @media screen and (min-width: ${mediaQuery.tablet}px) {
        display: inline-block;
        border: none;
        color: rgb(${props => props.theme.colors.text});
        background-color: transparent;
        border-radius: ${props => props.theme.borderRadius};
        cursor: pointer;
        display: inline-block;
        text-decoration: none;
        padding: 30px 20px;
        background-color: #1f2531;
        position: relative;

        &.active::after{
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
`;

export default Logo;