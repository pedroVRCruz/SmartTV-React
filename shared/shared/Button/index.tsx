import { ButtonHTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";
import { Spin } from "../Spin";
import { ColorName, getColorfromGlobal } from "../../util/functions.ts";
import { buttonColor, getHoverColor, getTextColor } from "./lib.ts";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
  functionButton?: (e: any) => void;
  margin?: string;
  nameOfButton?: string | undefined;
  typeOfButton?: "button" | "submit" | "reset" | undefined;
  variant?: buttonColor;
  id?: string;
  isLoading?: boolean;
  spinIcon?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

export function Button({
  id,
  children,
  functionButton,
  variant,
  margin,
  typeOfButton,
  nameOfButton,
  disabled,
  isLoading,
  spinIcon,
  width,
  height,
  borderRadius,
}: Props) {
  return (
    <Container
      $borderRadius={borderRadius}
      color={getColorfromGlobal(variant as ColorName)}
      $colorHover={getHoverColor(variant)}
      $colorText={getTextColor(variant)}
      disabled={disabled}
      onClick={functionButton}
      $margin={margin}
      name={nameOfButton}
      type={typeOfButton}
      id={id}
      $width={width}
      $height={height}
    >
      {isLoading ? <Spin Icon={spinIcon} /> : children}
    </Container>
  );
}
