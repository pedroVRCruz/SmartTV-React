import { Container } from "../src/styles/Footer";

export function Footer() {
  return (
    <Container>
      <div className="superior">
        <div className="left">
          <div className="logocontainer">
            <a href="#">
              <img src="src/assets/LogoSmartTV.svg"></img>
            </a>
            <a href="#">
              <div className="text"> SMART TV</div>
            </a>
          </div>
          <div className="triangulo"></div>
        </div>
        <div className="redessociais">
          <a href="">
            <img src="src/assets/facebook.svg" />
          </a>
          <a href="https://www.instagram.com/assistenciasmarttv?igsh=M3MxcWUzcjFyNXQ1">
            <img src="src/assets/instagram.svg" />
          </a>
          <a href="https://maps.app.goo.gl/c2CLqkXerx5AdKMCA">
            <img src="src/assets/localiza.svg" />
          </a>
        </div>
      </div>

      <div className="inferior">
        Todos os direitos reservados - Smart TV | Criado por Informi
      </div>
    </Container>
  );
}
