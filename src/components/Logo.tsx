import styled from "styled-components";
import Button from "./Button";

const Logo = styled.a`
    border: none;
    color: rgb(${props => props.theme.text});
    background-color: transparent;
    border-radius: ${props => props.theme.borderRadius};
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    padding: 30px 20px;
    background-color: #1f2531;
`;

export default Logo;