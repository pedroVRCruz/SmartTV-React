import { Container } from "../src/styles/CardDepoiments";

interface CardDepoimentsProps {
  nome: string;
  depoimento: string;
  imagem?: string;
}

export const CardDepoiments = ({ nome, depoimento, imagem }: CardDepoimentsProps) => {
  return (
    <Container>
      <div className="gradient">
        <div className="content">
          <div className="text">
            <div className="nome">{nome}</div>
            <div className="stars"><img src="../src/assets/Stars.svg"/></div>
            <div className="depoimento">{depoimento}</div>
          </div>
          <div className="images">
            <img src={imagem}  />
          </div>
        </div>
      </div>
    </Container>
  );
};