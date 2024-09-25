import { Container } from "./styles";

export function Spin({Icon}: {Icon}) {
  return (
    <Container>
      <div className="spinContainer">
        <img className="spinImage" src={Icon}  alt={"spin"}/>
      </div>
    </Container>
  );
}
