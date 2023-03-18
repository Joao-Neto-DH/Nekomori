// import './input.css';

import Button from "./components/Button";
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

              <form action="/search" method="get">
                  <input type="text" name="search" id="search" placeholder="Buscar por animes" required/>
                  <button type="submit" aria-label="pesquisar" className="ri-search-line"></button>
              </form>

              <div className="profile">
                  <button className="ri-alarm-fill" aria-label="agenda"></button>
                  <button className="ri-notification-2-fill" aria-label="notificações"></button>
                  <button className="user" title="joão neto" aria-label="perfil">
                      <div className="user-img">
                          <img src="/naruto.jpg" alt="joão neto"/>
                      </div>
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
      <Button gender="primary">Hola</Button>
      <Button gender="secondary">Hola</Button>
    </>
  )
}

export default App
