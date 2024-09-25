// import Logo from "../src/assets/LogoSmartTV.svg";
import { Container } from "../src/styles/Header";

export function Header() {
  // você pode passar constantes e funções aqui, se necessário

  return (
    <Container>
      <div className="box">
        <div className="logo"></div>
        <div className="menu">
          <div>Serviços</div>
          <div>Sobre nós</div>
          <div>Contato</div>
        </div>
      </div>
    </Container>
  );
}
