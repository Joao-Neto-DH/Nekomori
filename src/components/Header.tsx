import { Link } from "react-router-dom";
import styled from "styled-components";
import mediaQuery from "../util/mediaQuery";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => (
    <header className={className}>
        <Logo/>

        <div>
            <Link to={"/"}>
                <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
            </Link>
            <SearchForm className="search-form"/>
            <Profile/>
        </div>
    </header>
);

const Header = styled(HeaderUnstyled)`

    display: flex;
    justify-content: space-between;
    background-color: transparent;
    border-bottom: 1px solid #3b3b45;
    padding-top: 10px;
    padding-bottom: 10px;

    & > div{
        width: 100%;
        display: flex;
        padding: 0 10px;
        align-items: center;

        & > a{
            margin-right: auto;
        }

        .search-form{
            display: none;
        }
    }
    
    @media screen and (min-width: ${mediaQuery.smallTablet}px){
        & > div{
            & > a{
                margin-right: 0;
            }
            .search-form{
                display: flex;
            }
        }
    }

    @media screen and (min-width: ${mediaQuery.tablet}px){
        padding-top: 0;
        padding-bottom: 0;
    }
`;

export default Header;