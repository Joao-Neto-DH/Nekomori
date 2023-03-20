import styled, { createGlobalStyle } from "styled-components";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

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

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => (
    <header className={className}>
        <Logo className="brand active" href="/">
            <span className="ri-home-fill"></span>
        </Logo>

        <div>
            <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
                {/* Formulário de pesquisa */}
            <SearchForm action="/search" method="GET">
                <input type="text" name="search" id="search" placeholder="Buscar por animes" required/>
                <button type="submit" aria-label="pesquisar" className="ri-search-line"></button>
            </SearchForm>
            {/* Perfil */}
            <Profile>
                <button className="ri-alarm-fill" aria-label="agenda"></button>
                <button className="ri-notification-2-fill" aria-label="notificações"></button>
                <button className="user" title="joão neto" aria-label="perfil">
                    <div className="user-img">
                        <img src="/naruto.jpg" alt="joão neto"/>
                    </div>
                    {/* Opções de usuário */}
                    <ul>
                        <li><a href="#">Perfil</a></li>
                        <li><a href="#">Definições</a></li>
                        <li><a href="#">Favoritos</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>
                </button>
            </Profile>
        </div>
    </header>
);

const Header = styled(HeaderUnstyled)`
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