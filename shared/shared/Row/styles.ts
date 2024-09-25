import styled from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    $alignItems?: string;
    $backgroundColor?: string;
    $padding?: string;
    $paddingMobile?: string; //When paddingMobile is not defined it will use padding if it's available
    $justifyContent?: string;
    $flexWrap?: string;
    $flexGrow?: string;
    $flex?: string;
    $flexMobile?: string; //When flexMobile is not defined it will use flex if it's available
    $gap?: string;
    $gapMobile?: string; //When gapMobile is not defined it will use gap if it's available
    $width?: string;
    $height?: string;
    $margin?: string;
    $marginMobile?: string; //When marginMobile is not defined it will use margin if it's available
    $maxWidth?: string;
    $minWidth?: string;
    $minWidthMobile?: string;
    $minHeight?: string;
}
export const Container = styled.div<Props>`
  padding: ${(props: Props) => (props.$paddingMobile || props.$padding || "0px")};
  display: flex;
  flex-direction: row;
  align-items: ${(props: Props) => (props.$alignItems || "flex-start")};
  justify-content: ${(props: Props) =>
    props.$justifyContent || "flex-start"};
  flex-wrap: ${(props: Props) => (props.$flexWrap || "wrap")};
  flex-grow: ${(props: Props) => (props.$flexGrow || "0")};
  flex: ${(props: Props) => (props.$flexMobile || props.$flex || "0")};
  gap: ${(props: Props) => (props.$gapMobile || props.$gap || "1.6px")};
  width: ${(props: Props) => (props.$width || "auto")};
  height: ${(props: Props) => (props.$height || "auto")};
  margin: ${(props: Props) => (props.$marginMobile || props.$margin || "0")};
  min-width: ${(props: Props) => (props.$minWidthMobile || props.$minWidth || "auto")};;
  min-height: ${(props: Props) => (props.$minHeight || "auto")};
  max-width: ${(props: Props) => (props.$maxWidth || "none")};
  
    @media (min-width: 720px) {
      padding: ${(props: Props) => (props.$padding || "0px")};
      flex: ${(props: Props) => (props.$flex || "0")};
      gap: ${(props: Props) => (props.$gap || "1.6px")};
      margin: ${(props: Props) => (props.$margin || "0")};
      min-width: ${(props: Props) => (props.$minWidth || "auto")};
    }
`;
