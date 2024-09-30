import { Container } from "../src/styles/Header";

export function Header() {
  return (
    <Container>
      <div className="gradient">
        <div className="box">
          <div className="logo">
            <img src="../src/assets/LogoSmartTV.svg" />
          </div>
          <div className="menu">
            <a href="#services">
              <div className="text">Serviços</div>
            </a>
            <a href="#about">
              <div className="text">Sobre nós</div>
            </a>
            <a href="#contact">
              <div className="text">Contato</div>
            </a>
          </div>
          <div className="mobilemenu">
            <div className="dropdown">
              <button>
                <img src="../src/assets/dropdown.svg" />
                <div className="dropdown-content">
                  <a href="#services">
                    <div className="text">Serviços</div>
                  </a>
                  <a href="#about">
                    <div className="text">Sobre nós</div>
                  </a>
                  <a href="#contact">
                    <div className="text">Contato</div>
                  </a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
