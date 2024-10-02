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
    line-height: normal;

    .text {
      text-align: left;
      line-height: normal;

      .titulo {
        font-size: 20px;
        color: var(--Azul-claro, #23a4dd);
        font-weight: 700;
        margin-bottom: 20px;
        line-height: normal;
      }

      .desc {
        font-size: 16px;
        max-width: 277px;
        line-height: normal;
      }
    }
  }

  @media (max-width: 767px) {
    .content {
      .text {
        .titulo {
          font-size: 20px;
        }
        .desc {
          font-size: 14px;
        }
      }
    }
  }
`;
