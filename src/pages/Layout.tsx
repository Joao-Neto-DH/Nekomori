import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Container from "../components/Container"
import GlobalStyle from "../components/GlobalStyle"
import InternetConnection from "../components/InternetConnection"

const Layout: React.FC<{}> = () => {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Container>
          <Outlet/>
        </Container>
        <InternetConnection />
      </>
    )
  }

  export default Layout;