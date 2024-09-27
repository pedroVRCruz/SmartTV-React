import { Container } from "../src/styles/Header";

export function Header() {


  return (
    <Container>
      <div className="gradient">
        <div className="box">
          <div className="logo">
            <img src="../src/assets/LogoSmartTV.svg"/>
          </div>
          <div className="menu">
            <div className="text">Serviços</div>
            <div className="text">Sobre nós</div>
            <div className="text">Contato</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
