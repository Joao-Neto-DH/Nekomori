import styled from "styled-components";

const SearchForm = styled.form`
    margin: 0 auto;
    width: 40vw;
    display: flex;
    align-items: stretch;
    background: #1f232e;
    border-radius: 4px;
    overflow: hidden;

    *{
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
    button{
        padding: 10px;
    }
`;

export default SearchForm;