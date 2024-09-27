import "./styles/App.css";
import { Container } from "./styles/Home";
import { Col } from "../shared/shared/Col";
import { FraseIA } from "../components/FraseIA";
import { Row } from "../shared/shared/Row";
import { Header } from "../components/Header";
// import { Footer } from "../components/Footer";
import { CardProblemas } from "../components/CardProblemas";
import { CardDepoiments } from "../components/CardDepoiments";
import { CardContato } from "../components/CardContato";
import { CarrosselProblemas } from "../components/CarrosselProblemas";
import { CarrosselDepoimentos } from "../components/CarrosselDepoimentos";
import "@mantine/carousel/styles.css";

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
          <img src="src/assets/Marcas.svg"></img> {/*chamar como componente?*/}
          <a target="blank" href="https://google.com">
            <div className="button">Fale conosco</div>
          </a>
        </Col>
        <div className="carroselProblemas">
          <div className="titulo">Qual o problema da sua TV?</div>
          <CarrosselProblemas />
        </div>

        <div className="buscaentrega">
          <div className="visible">
            <div className="passo1">
              <div className="text">
                Nosso serviço de busca e entrega foi pensado para sua total
                comodidade.
              </div>
              <div className="image">
                <img src="src/assets/passo1.svg"></img>
              </div>
            </div>
            <div className="passo2">
              <div className="image">
                <img src="src/assets/passo2.svg"></img>
              </div>
              <div className="text">Oferecemos um serviço ágil e seguro, </div>
            </div>
            <div className="passo3">
              <div className="text">
                entregando seu aparelho onde você precisar.
              </div>
              <div className="image">
                <img src="src/assets/passo3.svg"></img>
              </div>
            </div>
          </div>
        </div>

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
          <div className="visible">
            <div className="images">
              <img src="src/assets/NE1.svg" />
              <img src="src/assets/NE2.svg" />
              <img src="src/assets/NE3.svg" />
              <img src="src/assets/NE4.svg" />
              <img src="src/assets/NE5.svg" />
              <img src="src/assets/NE1.svg" />
              <img src="src/assets/NE2.svg" />
              <img src="src/assets/NE3.svg" />
              <img src="src/assets/NE4.svg" />
              <img src="src/assets/NE5.svg" />
            </div>
          </div>
        </div>
        <CarrosselDepoimentos />
        <div className="contato">
          <CardContato
            titulo="Descarte"
            descricao="Se sua TV não tiver conserto ou se você quiser se livrar dela, traga pra gente! Ficaremos felizes em cuidar do descarte de forma responsável para você!"
            imagem="src/assets/descarte.svg"
          />
          <CardContato
            titulo="Contatos"
            descricao="Sua TV apresentou algum problema? Fique tranquilo! Envie uma mensagem para nossa equipe técnica pelo WhatsApp e resolvemos para você rapidamente. Nos siga no instagram e venha nos visitar!"
            imagem="src/assets/contato.svg"
          />
        </div>
      </Container>
      {/* <Footer/> */}
    </>
  );
}

export default App;
