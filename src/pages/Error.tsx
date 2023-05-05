import { Outlet, useRouteError } from "react-router";
import Container from "../components/Container";
import GlobalStyle from "../components/GlobalStyle";
import Header from "../components/Header";
import InternetConnection from "../components/InternetConnection";
import MenuContext from "../util/MenuContext";
import { useOpenClose } from "../hooks/useOpenClose";
import styled from "styled-components";

function Error() {
    const menu = useOpenClose();
    const error: any = useRouteError();

    return ( 
        <>
            <GlobalStyle />
            <MenuContext.Provider value={{menu}}>
            <Header />
            <Container>
                <>
                    <ImageContainer />
                    <p style={{
                        fontSize: "24px",
                        fontWeight:"bold",
                        textAlign:"center"
                    }}>{error.data}</p>
                </>
            </Container>
            </MenuContext.Provider>
            <InternetConnection />
        </>
     );
}
    
const ImageContainer = styled(
    ({className}: {className?:string})=>(
        <div className={className}>
            <img src="/Nekomori/404.svg" alt="not found error" />
        </div>
    )
)`
text-align: center;
padding-top: 30px;
img{
    max-width: 400px;
}
`;

export default Error;