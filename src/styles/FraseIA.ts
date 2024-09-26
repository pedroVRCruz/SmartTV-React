import styled from "styled-components";

export const Container = styled.text`
  max-width: 1150px;
  min-height: 511px;
  display: flex;
  font-size: 60px;
  letter-spacing: 4.8px;
  text-align: left;
  margin-top: 60px;
  margin-bottom: 70px;

  animation-name: opacitychange;
  animation-duration: 8s;
  animation-iteration-count: infinite;

  @keyframes opacitychange {
    0% {
      opacity: 0;
    }
    18% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
