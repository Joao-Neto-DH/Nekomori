import styled from "styled-components";

const Button = styled.button<{ gender: "primary" | "secondary" }>`
    border: none;
    color: rgb(206, 210, 211);
    background-color: transparent;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
`;

export default Button;