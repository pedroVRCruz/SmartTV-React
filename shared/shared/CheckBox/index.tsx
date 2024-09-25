import { BsCheck } from "react-icons/bs";
import { Container } from "./styles";

interface Props {
    onChange: () => void;
    isChecked: boolean;
}
export function Checkbox({ onChange, isChecked }: Props) {
  return (
    <Container>
      <input className={"checkInput"} type="checkbox" defaultChecked={isChecked} />
      <span className={"customCheckbox"} onClick={onChange}>{isChecked ? <BsCheck className={"checkIcon"} /> : null}</span>
    </Container>
  );
}
