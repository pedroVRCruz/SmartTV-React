import { Container } from "./styles";

interface Props {
    name: string;
    text: string;
    value?: string;
    $checked?: boolean;

}
export function RadioButton({name, text, value, $checked }: Props) {
  return (
    <Container>
      <input type="radio" name={name} value={value ? value : text} checked={$checked} readOnly/>
      {text}
    </Container>
  );
}
