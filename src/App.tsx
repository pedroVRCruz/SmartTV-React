import "./styles/App.css";
import { Container } from "./styles/Home";
import { Col } from "../shared/shared/Col";
import { FraseIA } from "../components/FraseIA";
import { Row } from "../shared/shared/Row";
import { Header } from "../components/Header";
import { CardProblemas } from "../components/CardProblemas";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Col>
          {/* precisa passar id para frase ia?*/}
          <div id="FraseIA">
            <FraseIA />
          </div>
          <img src="src/assets/Marcas.svg"></img> {/*chamar como componente*/}
          <a target="blank" href="https://google.com">
            <div className="button">Fale conosco</div>
          </a>
        </Col>
        <CardProblemas/>
        <Row>
          <div className="about">
            <div className="title">Sobre nós</div>
            <div className="text">
              Desde 2017, oferecemos aos nossos clientes um serviço de qualidade
              com excelente custo-benefício, sendo um lugar confiável para
              consertar sua TV.
            </div>
            <div className="text">
              Nossa equipe altamente treinada está pronta para oferecer o melhor
              atendimento, tornando sua experiência única e incomparável. Nossas
              lojas são equipadas para proporcionar um serviço de alta
              qualidade, com o máximo cuidado com seu aparelho. Utilizamos
              apenas peças e componentes novos e originais, e revisamos todos os
              aparelhos completamente, garantindo maior durabilidade. Escolher a
              SMART TV é a melhor decisão que você pode tomar!
            </div>
          </div>
        </Row>
        <div className="nossaestrutura">
          <div className="content">
            <div className="title">Nossa Estrutura</div>
            <div className="text">
              Contamos com uma estrutura completa e moderna para oferecer o
              melhor serviço de concerto de TV. Nossas instalações são equipadas
              com tecnologia de ponta e nossos técnicos são altamente
              qualificados, garantindo um atendimento rápido e eficiente.
            </div>
          </div>
          <div className="images">
            <img src="src/assets/NE1.svg"></img>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
