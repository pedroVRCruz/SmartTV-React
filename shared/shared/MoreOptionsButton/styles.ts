import styled from "styled-components";
export interface Props {
  $backgroundColor: string;
}

export const Container = styled.div<Props>`
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 22.5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  right: 0;
  width: 35px;
  z-index: 10;

  .buttonColor{
    color: var(--color-blue-primary);
  }
  .buttonSize {
    height: 32px;
    width: 32px;
  }


  .legend{
    color: var(--color-blue-primary);
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-top: 2px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    white-space: nowrap;
  }

  .animatedText {
    animation: marquee 3.5s linear infinite;
    display: inline-block;
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export interface ItemProps {
    $backgroundColor: string;
    $color: string;
    $transform: string;
  }

export const MoreOptionsItem = styled.div<ItemProps>`
    align-items: center;
    background-color: ${(props) => props.$backgroundColor};
    border-radius: 50%;
    color: ${(props) => props.$color};
    display: flex;
    height: 32px;
    justify-content: center;
    margin-top: 3px;
    transform: ${(props) => props.$transform};
    width: 32px;
    `;