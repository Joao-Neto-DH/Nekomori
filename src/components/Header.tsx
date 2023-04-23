import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useOpenClose } from "../hooks/useOpenClose";
import mediaQuery from "../util/mediaQuery";
import MenuContext from "../util/MenuContext";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => {
    const search = useOpenClose();
    const { menu: {toggle} } = useContext(MenuContext);

    return (
        <header className={className}>
            <Logo/>
            <button className="ri-menu-line" onClick={toggle}></button>

            <div>
                <Link to={"/"}>
                    <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
                </Link>
                <SearchForm className={`${search.isOpened ? "" : "closed"}`}/>
                <Profile isSearchBarVisible={search.isOpened} toggleSearchBarVisible={search.toggle} />
            </div>
        </header>
    );
}

const Header = styled(HeaderUnstyled)`

    display: flex;
    justify-content: space-between;
    background-color: transparent;
    border-bottom: 1px solid #3b3b45;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;

    & > button {
        padding: 0 20px;
    }

    & > div{
        width: 100%;
        display: flex;
        padding: 0 10px;
        align-items: center;

        & > a{
            margin-right: auto;
        }

        .closed{
            display: none;
        }
        & > form {
            position: absolute;
            width: calc(70% - 30px);
            left: 50px;
        }
    }
    
    @media screen and (min-width: ${mediaQuery.smallTablet}px){
        & > div{
            & > a{
                margin-right: 0;
            }
            & > form{
                display: flex !important;
                position: static;
                max-width: 40vw;
            }
        }
    }

    @media screen and (min-width: ${mediaQuery.tablet}px){
        padding-top: 0;
        padding-bottom: 0;

        & > button {
            display: none;
        }
    }
`;

export default Header;