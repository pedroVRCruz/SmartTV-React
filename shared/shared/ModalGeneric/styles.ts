import styled from "styled-components";

export interface Props {
  $position: string;
  $top?: string;
  $bottom?: string;
  $right?: string;
  $left?: string;
  $width?: string;
  $height?: string;
  $mobileFullScreen?: boolean;
  $title:boolean;
}

export const OutSideClick = styled.div`
    width: 100dvw;
    height: 100dvh;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 1001;
`;

export const Container = styled.div<Props>`
  background-color: var(--color-white-primary);
  border-radius: 6px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.$mobileFullScreen? "100%" :props.$height==="fit-content"? "auto":props.$height};
   width: ${(props) => props.$mobileFullScreen? "100%" :props.$width==="fit-content"? "auto":props.$width};
  position: ${(props) =>props.$position};
  top: ${(props) => props.$mobileFullScreen? 0: props.$top};
  right: ${(props) => props.$mobileFullScreen? 0:props.$right};
  bottom: ${(props) => props.$mobileFullScreen? 0:props.$bottom};
  left: ${(props) => props.$mobileFullScreen? 0:props.$left};
  z-index: 100000;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  @media (min-width: 720px) {
    position: ${(props) => props.$position};
    top: ${(props) => props.$top};
    right: ${(props) => props.$right};
    bottom: ${(props) => props.$bottom};
    left: ${(props) => props.$left};
    height: ${(props) => props.$height};
    width: ${(props) => props.$width};
    justify-content: center;
    align-items: center;
    
  
  }
  .modalHeader {
    display:grid;
    max-height: 35px;
  }
  .modalTitle{
      font-size: 20px;
      font-weight: 400;
      align-self: center;
      justify-self: center;
      margin-bottom:26px;
      color: var(--color-blue-primary);
      @media (min-width: 720px) {
        font-size: 30px;
      }
  }
  .modalBody {
    display: grid;
    height: 100%;
    align-items: start;
  }
  .closeButton{
    position: absolute;
    right:15px;
    top: 15px;
  }
`;
