import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import MainArea from "../components/Container"
import GlobalStyle from "../components/GlobalStyle"

const Layout: React.FC<{}> = () => {
    return (
      <>
        <GlobalStyle />
        <Header />
        <MainArea>
          <Outlet/>
        </MainArea>
      </>
    )
  }

  export default Layout;