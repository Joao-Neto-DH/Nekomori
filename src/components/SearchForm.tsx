import styled from "styled-components";

const SearchFormUnstyled: React.FC<{className?: string}> = ({className}) => (
    <form className={className} action="/search" method="get">
        <input type="text" name="search" id="search" placeholder="Buscar por animes" required/>
        <button type="submit" aria-label="pesquisar" className="ri-search-line"></button>
    </form>
);

const SearchForm = styled(SearchFormUnstyled)`
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