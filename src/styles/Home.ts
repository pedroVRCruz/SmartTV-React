import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white-secundary);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: calc(100dvh - 50px);

  .button {
    display: flex;
    width: 550px;
    height: 100px;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    background: var(--Azul-claro, #23a4dd);
    margin-top: 70px;
  }

  a {
    :hover {
      background-color: var(--Azul-escuro, #1c465f);
    }
  }

  .about {
    max-width: 1150px;
    text-align: left;
    margin-top: 130px;
    margin-bottom: 130px;

    .title {
      color: var(--Azul-claro, #23a4dd);
      font-size: 32px;
    }
    .text {
      font-size: 20px;
    }
  }
  .nossaestrutura {
    display: flex;
    flex-direction: row;
    max-width: 1150px;
    .content {
      text-align: left;
      .title {
        color: var(--Azul-claro, #23a4dd);
        font-size: 32px;
      }
      .text {
        font-size: 20px;
      }
    }
  }

  @media (min-width: 720px) {
    width: 100vw;
    height: calc(100dvh - 70px);
    background-color: var(--color-white-secundary);
  }
`;
