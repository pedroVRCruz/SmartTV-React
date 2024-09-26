import Logo from "../src/assets/LogoSmartTV.svg?react"; 
import { Container } from "../src/styles/Header";

export function Header() {

  // functions and constants ?

  return (
    <Container>
      <div className="gradient">
        <div className="box">
          <div className="logo">
            {/* <Logo/> */}
          </div>
          <div className="menu">
            <div>Serviços</div>
            <div>Sobre nós</div>
            <div>Contato</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
