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

    width: 550px;
    height: 190px;
  }

  .content {
    overflow-x: hidden;
    scrollbar-color: grey transparent;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    width: 100%;
    height: 100%;

    .text {
      justify-content: center;

      .nome {
        color: var(--Branco, #fff);
        font-family: "Century Gothic";
        font-size: 20px;
        line-height: normal;
        margin-bottom: 10px;
      }

      .stars {
        margin-bottom: 30px;
      }

      .depoimento {
        font-size: 16px;
        text-align: left;
        justify-content: left;
      }
    }
  }

  //tablet
  @media (max-width: 991px) {
    .gradient {
      padding: 10px;
      width: 317px;
      height: 190px;
    }

    .content {
      padding: 10px;

      .text {
        .nome {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .stars {
          margin-bottom: 20px;
        }

        .depoimento {
          font-size: 14px;
        }
      }
    }
  }
  //mobile
  @media (max-width: 767px) { .gradient {
      padding: 1px;
      width: 317px;
      height: 190px;
    }

    .content {
      padding: 10px;

      .text {
        .nome {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .stars {
          margin-bottom: 20px;
        }


      }
    }
  }
`;
