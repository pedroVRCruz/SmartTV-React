import styled from "styled-components";
import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    $alignItems?: string;
    $padding?: string;
    $paddingMobile?: string; //When paddingMobile is not defined it will use padding if it's available
    $justifyContent?: string;
    $flexWrap?: string;
    $flex?: string;
    $gap?: string;
    $gapMobile?: string; //When gapMobile is not defined it will use gap if it's available
    $width?: string;
    $height?: string;
    $margin?: string;
    $marginMobile?: string; //When marginMobile is not defined it will use margin if it's available
    $maxWidth?: string;
    $minWidth?: string;
    $minHeight?: string;
    $overflowY?: string;
}

export const Container = styled.div<Props>`
  padding: ${(props) => (props.$paddingMobile || props.$padding || "0px")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$alignItems || "flex-start")};
  justify-content: ${(props) =>
    props.$justifyContent || "flex-start"};
  flex-wrap: ${(props) => (props.$flexWrap || "wrap")};
  flex: ${(props) => (props.$flex || "0")};
  gap: ${(props) => (props.$gapMobile || props.$gap || "1.6px")};
  width: ${(props) => (props.$width || "auto")};
  height: ${(props) => (props.$height || "auto")};
  margin: ${(props) => (props.$marginMobile || props.$margin || "0")};
  max-width: ${(props) => (props.$maxWidth || "auto")};
  min-width: ${(props) => (props.$minWidth || "auto")};
  min-height: ${(props) => (props.$minHeight || "auto")};
  overflow-y: ${(props) => (props.$overflowY || "unset")};
  
    @media (min-width: 720px) {
      gap: ${(props) => (props.$gap || "1.6px")};
      padding: ${(props) => (props.$padding || "0px")};
      margin: ${(props) => (props.$margin || "0")};
    }
`;
