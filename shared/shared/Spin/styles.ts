import styled, { keyframes } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const Container = styled.div`
  display: flex;
  justify-content: center;

  .spinImage {
    animation: ${rotate} 2s linear infinite;
  }

  .spinContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;
