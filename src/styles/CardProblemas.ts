import styled from "styled-components";

export const Container = styled.text`
  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 6%,
      rgba(104, 104, 104, 0.1) 100%
    );
    border-radius: 20px;
    display: flex;
  }
  .content {
    .titulo {
      font-size: 20px;
      color: var(--Azul-claro, #23a4dd);
      font-weight: 700;
    }
  }
`;
