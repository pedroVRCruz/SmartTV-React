import { Container } from "../src/styles/CardDContato";

interface CardContatoProps {
  titulo: string;
  descricao: string;
  imagem: string;
  link?: string;
}

export const CardContato = ({
  titulo,
  descricao,
  imagem,
  link,
}: CardContatoProps) => {
  return (
    <Container>
      <div className="gradient">
        <div className="content">
          <div className="text">
            <a target="blank" href={link}>
              <div className="titulo">{titulo}</div>
            </a>
            <a target="blank" href={link}>
              <div className="desc">{descricao}</div>
            </a>
          </div>
          <div className="image">
            <a target="blank" href={link}>
              <img src={imagem} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};
