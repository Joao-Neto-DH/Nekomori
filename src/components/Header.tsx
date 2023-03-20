import styled from "styled-components";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => (
    <header className={className}>
        <Logo className="brand active" href="/">
            <span className="ri-home-fill"></span>
        </Logo>

        <div>
            <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
            <SearchForm/>
            <Profile/>
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