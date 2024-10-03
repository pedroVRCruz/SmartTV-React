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
    height: 319px;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    height: 100%;
    padding: 30px;

    .text {
      text-align: left;

      .titulo {
        color: var(--Azul-claro, #23a4dd);
        font-family: "Century Gothic";
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 20px;
      }

      .desc {
        font-size: 20px;
      }
    }
    .image {
      align-self: center;
    }
  }

  //mobile
  @media (max-width: 767px) {
    .gradient {
      width: clamp(317px, 92vw, 500px);
      align-items: center;
      height: clamp(100px, 60vw, 350px);

      padding: 10px;
    }
    .content {
      justify-content: center;
      align-items:center;
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 10px;
      width: clamp(317px, 92vw, 500px);
      height: clamp(100px, 60vw, 400px);


      .text {
        .titulo {
          font-size: clamp(12px, 5vw, 26px);
          margin-bottom: 20px;
        }
        .desc {
          font-size: clamp(10px, 3.5vw, 19px);
        }
      }
      img {
        width: 30vw;
        height: 30vw;
      }
    }
  }
`;
