import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
  functionButton?: () => void;
  $margin?: string;
  color?: string;
  $colorHover?: string;
  $colorText?: string;
  $width?:string;
  $height?:string;
  $borderRadius?:string;
}

export const Container = styled.button<ButtonProps>`
  color: var(--color-white-primary);
  display: inline-block;
  border-radius: ${(props) => props.$borderRadius || "6px"};
  margin: ${(props) => (props.$margin || "4.8px")};
  transition: 0.5s all;
  font-size: 14px;
  padding: 3px 16px;
  border: none;
  line-height: 24px;
  font-weight: 500;
  font-family: "Inter";
  cursor: pointer;
  background: ${(props) => props.color};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  &:hover {
    background: ${(props) => props.$colorHover};
    color: ${(props) => props.$colorText};
  }
`;
