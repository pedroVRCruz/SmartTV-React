import { ReactNode } from "react";
import { Container } from "../src/styles/CardProblemas";

interface Props {}
export const CardProblemas = ({}: Props) => {
  return (
    <Container>
      <div className="content">
        priemira variante
        <div className="gradient"></div>
        <div className="titulo"> AQUI VAI O TITULO</div>
        <div className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam, at
          beatae. Amet aperiam pariatur iste modi mollitia optio, sint
          reiciendis autem, assumenda ab sed molestiae eum expedita. Quo,
          excepturi repellendus?
        </div>
        <div className="image">imagem aqui</div>
      </div>
    </Container>
  );
};
