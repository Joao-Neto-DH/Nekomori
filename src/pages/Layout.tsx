import { Outlet } from "react-router-dom"
import Header, { GlobalStyle } from "../components/Header"
import MainArea from "../components/Container"
import Navigation from "../components/Navigation"

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