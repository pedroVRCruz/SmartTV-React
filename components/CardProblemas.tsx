import { Container } from "../src/styles/CardProblemas";

interface CardProblemasProps {
  titulo: string;
  descricao: string;
  imagem: string;
}

export const CardProblemas = ({ titulo, descricao, imagem }: CardProblemasProps) => {
  return (
    <Container>
      <div className="gradient">
        <div className="content">
          <div className="text">
            <div className="titulo">{titulo}</div>
            <div className="desc">{descricao}</div>
          </div>
          <div className="image">
            <img src={imagem} alt={titulo} />
          </div>
        </div>
      </div>
    </Container>
  );
};