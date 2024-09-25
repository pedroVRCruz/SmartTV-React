import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  $backgroundColor?: string;
  $padding?: string;
  $borderRadius?: string;
  $borderRadiusMobile?: string;
  $justifyContent?: string;
  $flexWrap?: string;
  $flexDirection?: string;
  $flex?: string;
  $width?: string;
  $widthMobile?: string;
  $height?: string;
  $heightMobile?: string;
  $margin?: string;
  $minWidth?: string;
  $minWidthMobile?: string;
  $minHeight?: string;
  $minHeightMobile?: string;
  $title: string;
  $titleColor?: string;
  $titleSize?: string;
}

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.$backgroundColor || "var(--color-white-primary)"};
  border-radius: ${(props) =>
    props.$borderRadiusMobile || props.$borderRadius || "25px"};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  padding: ${(props) => props.$padding || "5px"};
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "5px"};
  justify-content: ${(props) => props.$justifyContent || "flex-start"};
  flex-wrap: ${(props) => props.$flexWrap || "wrap"};
  flex: ${(props) => props.$flex || "0"};
  margin: ${(props) => props.$margin || "0"};
  min-width: ${(props) => props.$minWidthMobile || props.$minWidth || "355px"};
  min-height: ${(props) =>
    props.$minHeightMobile || props.$minHeight || "170px"};
  width: ${(props) => props.$widthMobile || props.$width || "100dvw"};
  height: ${(props) => props.$heightMobile || props.$height || "170px"};

  @media (min-width: 720px) {
    min-width: ${(props) => props.$minWidth || "530px"};
    min-height: ${(props) => props.$minHeight || "250px"};
    padding: ${(props) => props.$padding || "10px"};
    width: ${(props) => props.$width || "530px"};
    height: ${(props) => props.$height || "250px"};
  }

  .contentStyle {
    position: relative;
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
  }

  .titleStyle {
    color: ${(props) => props.$titleColor || "var(--color-gray-alternative)"};
    font-size: ${(props) => props.$titleSize || "16px"};
    text-align: center;
    font-weight: 500;
    line-height: 20px;

    @media (min-width: 720px) {
      font-size: ${(props) => props.$titleSize || "20px"};
    }
  }
`;
