import { ReactNode } from "react";
import { Container } from "./styles";
import { buttonIconColor, getButtonIconColor } from "./lib";

interface Props {
  functionButtonIcon?: () => void;
  label?: string;
  children?: ReactNode;
  img?: string;
  color?: buttonIconColor;
}

export function ButtonIcon({
  functionButtonIcon,
  label,
  children,
  img,
  color
}: Props) {
  return (
    <Container
      onClick={functionButtonIcon}
      disabled={!functionButtonIcon}
      $color={getButtonIconColor(color)}
    >
      {img ? <img src={img} alt="Icon" /> : children}
      <h3 className={"label"}>{label}</h3>
    </Container>
  );
}
