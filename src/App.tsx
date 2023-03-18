import Header, { GlobalStyle } from "./components/Header";
import Logo from "./components/Logo";
import MainArea from "./components/MainArea";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <>
          <Logo className="brand active" gender="primary" as="a" href="/">
              <span className="ri-home-fill"></span>
          </Logo>

          <div>
              <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
    	        {/* Formulário de pesquisa */}
              <SearchForm action="/search" method="GET">
                  <input type="text" name="search" id="search" placeholder="Buscar por animes" required/>
                  <button type="submit" aria-label="pesquisar" className="ri-search-line"></button>
              </SearchForm>
              {/* Perfil */}
              <Profile>
                  <button className="ri-alarm-fill" aria-label="agenda"></button>
                  <button className="ri-notification-2-fill" aria-label="notificações"></button>
                  <button className="user" title="joão neto" aria-label="perfil">
                      <div className="user-img">
                          <img src="/naruto.jpg" alt="joão neto"/>
                      </div>
                      {/* Opções de usuário */}
                      <ul>
                          <li><a href="#">Perfil</a></li>
                          <li><a href="#">Definições</a></li>
                          <li><a href="#">Favoritos</a></li>
                          <li><a href="#">Sair</a></li>
                      </ul>
                  </button>
              </Profile>
          </div>
        </>
      </Header>
      <MainArea>
        <Navigation>
          <nav>
            <ul>
                <li className="active"><a href={"/"} className="ri-play-fill btn"><span aria-label="player">Reprodutor</span></a></li>
                <li className=""><a href={"/"} className="ri-chat-3-fill btn"><span aria-label="bate-papo">Bate-Papo</span></a></li>
                <li className=""><a href={"/"} className="ri-newspaper-fill btn"><span aria-label="notícias">Notícias</span></a></li>
            </ul>
          </nav>
        </Navigation>
      </MainArea>
    </>
  )
}

export default App
