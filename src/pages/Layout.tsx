import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Container from "../components/Container"
import GlobalStyle from "../components/GlobalStyle"
import InternetConnection from "../components/InternetConnection"
import MenuContext from "../util/MenuContext"
import { useOpenClose } from "../hooks/useOpenClose"

const Layout: React.FC<{}> = () => {
    const menu = useOpenClose();
    return (
      <>
        <GlobalStyle />
        <MenuContext.Provider value={{menu}}>
          <Header />
          <Container>
            <Outlet/>
          </Container>
        </MenuContext.Provider>
        <InternetConnection />
      </>
    )
  }

  export default Layout;