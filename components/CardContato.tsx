import { Container } from "../src/styles/CardDContato";

interface CardContatoProps {
  titulo: string;
  descricao: string;
  imagem: string;
}

export const CardContato = ({  titulo,  descricao,  imagem,}: CardContatoProps) => {
  return (
    <Container>
      <div className="gradient">
        <div className="content">
          <div className="text">
            <div className="titulo">{titulo}</div>
            <div className="desc">{descricao}</div>
          </div>
          <div className="image">
            <img src={imagem} />
          </div>
        </div>
      </div>
    </Container>
  );
};
