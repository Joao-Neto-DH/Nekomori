// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useOpenClose } from "../hooks/useOpenClose";
import mediaQuery from "../util/mediaQuery";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => {
    const [isOpened, toggleShowState] = useOpenClose(true);

    return (
        <header className={className}>
            <Logo/>

            <div>
                <Link to={"/"}>
                    <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
                </Link>
                <SearchForm className={`${isOpened ? "" : "closed"}`}/>
                <Profile isSearchBarVisible={isOpened as boolean} toggleSearchBarVisible={toggleShowState as ()=>void} />
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
            width: 75%;
        }
    }
    
    @media screen and (min-width: ${mediaQuery.smallTablet}px){
        & > div{
            & > a{
                margin-right: 0;
            }
            & > form{
                display: flex;
                position: relative;
                max-width: 40vw;
            }
        }
    }

    @media screen and (min-width: ${mediaQuery.tablet}px){
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export default Header;