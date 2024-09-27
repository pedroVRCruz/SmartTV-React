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
          <div className="visible">
            <div className="slider">
              <CardProblemas
                titulo="Com som e sem imagem"
                descricao="Pode ser causado por problemas nos barramentos de led, tela LCD/LED, na placa T-con ou na placa-mãe. A verificação e substituição dessas peças é necessária para resolver o problema."
                imagem="src/assets/problema1.svg"
              />
              <CardProblemas
                titulo="TV não liga"
                descricao="Uma falha comum que pode ser causada por problemas na fonte de alimentação ou defeito na placa-central. Requer verificação dos componentes internos e possíveis substituições."
                imagem="src/assets/problema2.svg"
              />
              <CardProblemas
                titulo="Imagem azulada"
                descricao="Possivelmente os LEDs com defeito devido ao desgaste das peças.Nossa empresa realiza a troca completa do kit de LEDs para garantir a durabilidade e o funcionamento adequado do aparelho, evitando problemas futuros que podem ocorrer com a substituição parcial dos componentes."
                imagem="src/assets/problema3.svg"
              />
              <CardProblemas
                titulo="Problemas na Conexão Wi-Fi"
                descricao="Problemas no roteador, configurações de rede incorretas ou falhas no módulo Wi-Fi da TV são as causas mais comuns. Requer verificação da rede e possível substituição do módulo Wi-Fi ou até mesmo placa principal."
                imagem="src/assets/problema4.svg"
              />
              <CardProblemas
                titulo="TV com partes da imagem escura"
                descricao="Esse defeito é mais comum em modelos da Samsung a partir de 2019, geralmente exigindo a troca dos barramentos de LED e do acrílico. Nossa empresa é especialista nesses modelos, garantindo um reparo com qualidade impecável."
                imagem="src/assets/problema5.svg"
              />
              <CardProblemas
                titulo="TV não liga após raio"
                descricao="Geralmente, isso ocorre após uma descarga elétrica que, devido à alta tensão, acaba afetando componentes internos da TV. Nossa equipe realiza uma análise detalhada para identificar a peça danificada e realiza o reparo corretamente."
                imagem="src/assets/problema6.svg"
              />
              <CardProblemas
                titulo="Nenhuma dessas opções?"
                descricao="Caso não saiba exatamente qual é o problema da sua tv, traga que iremos fazer uma avaliação!"
                imagem="src/assets/problema7.svg"
              />
            </div>
          </div>
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
          <div className="images">
            <img src="src/assets/NE1.svg" />
          </div>
        </div>
        <div className="depoiments">
          <div className="visible">
            <div className="slider">
              <CardDepoiments
                nome="André Oliveria Moraes"
                depoimento="Serviço rápido e eficiente. Preço justo. Só tenho elogios."
              />
              <CardDepoiments
                nome="Fernanda Rafaela"
                depoimento="O atendimento e serviços são ótimos, eles explicam certinho o que fizeram no aparelho, são super atenciosos e o preço é justo, sempre recomendo a empresa!"
              />
            </div>
          </div>
        </div>
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
