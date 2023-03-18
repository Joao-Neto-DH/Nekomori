import Header, { GlobalStyle } from "./components/Header";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <>
          <Logo className="active" gender="primary" as="a" href="/">
              <span className="ri-home-fill"></span>
          </Logo>

          <div>
              <img src="/nekomori-logo.png" width="150" alt="anime nekomori"/>
    	        {/* Formulário de pesquisa */}
              <form action="/search" method="GET">
                  <input type="text" name="search" id="search" placeholder="Buscar por animes" required/>
                  <button type="submit" aria-label="pesquisar" className="ri-search-line"></button>
              </form>
              {/* Perfil */}
              <div className="profile">
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
              </div>
          </div>
        </>
      </Header>
    </>
  )
}

export default App
