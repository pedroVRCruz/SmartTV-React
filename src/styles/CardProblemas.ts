import styled from "styled-components";

export const Container = styled.text`
  .gradient {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 6%,
      rgba(104, 104, 104, 0.1) 100%
    );
    border-radius: 20px;
    display: flex;

    width: 317px;
    height: 430px;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: space-between;

    .text {
      text-align: left;

      .titulo {
        font-size: 20px;
        color: var(--Azul-claro, #23a4dd);
        font-weight: 700;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 16px;
      }
    }
  }
`;
