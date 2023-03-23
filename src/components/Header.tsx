import styled from "styled-components";
import Logo from "./Logo";
import Profile from "./Profile";
import SearchForm from "./SearchForm";

const HeaderUnstyled: React.FC<{className?: string}> = ({className}) => (
    <header className={className}>
        <Logo/>

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

    & > div{
        width: 100%;
        display: flex;
        padding: 0 20px;
        align-items: center;
    }
`;

export default Header;