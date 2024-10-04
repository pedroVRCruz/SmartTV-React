import { Container } from "../src/styles/Footer";
// import { FacebookSolidTrue } from "../../icons/FacebookSolidTrue";
// import { GeoWhite } from "../GeoWhite";
// import { InstagramWhite } from "../InstagramWhite";
// import "./style.css";

export function Footer() {
  return (
    <Container>
      <div className="c-footer">
      <div className="todos-os-direitos" />
      <div className="overlap">
        <div className="footer-superior">
          <div className="container-logo">
            <div className="logo-smatrt-TV">
              <div className="elementos-logo">
                <div className="div">
                  <img className="elementos" alt="Elementos" src="/img/elementos.svg" />
                  <img className="img" alt="Elementos" src="/img/elementos-1.svg" />
                  <img className="elementos-2" alt="Elementos" src="/img/elementos-2.svg" />
                </div>
              </div>
            </div>
            <div className="text-wrapper">SMART TV</div>
          </div>
          <img className="element" alt="Element" src="/img/element.svg" />
          <div className="frame">
            <div className="frame-2">
            <img src="/src/assets/whats.svg" />
            </div>
            <div className="frame-2">
            <img src="/src/assets/whats.svg" />

            </div>
            <div className="frame-2">
            <img src="/src/assets/whats.svg" />
            </div>
          </div>
        </div>
        <img className="linhasuprod" alt="Linhasuprod" src="/img/linhasuprod.svg" />
      </div>
    </div>
    </Container>
  );
}
