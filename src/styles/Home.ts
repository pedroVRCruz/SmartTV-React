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

  .carroselProblemas {
    text-align: left;
    margin-top: 130px;

    .titulo {
      color: var(--Branco, #fff);
      font-family: "Century Gothic";
      font-size: 32px;
      font-weight: 700;
      line-height: 46px;
    }

    .visible {
      overflow: hidden;
      height: 430px;
      width: 1150px;
      .slider {
        display: flex;
        flex-direction: row;
        gap: 20px;
      }
    }
  }

  .buscaentrega {
    margin-top: 130px;
    .visible {
      display: flex;
      flex-direction: row;
      gap: 20px;
      height: 241px;

      .passo1 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      .passo2 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }

      .passo3 {
        max-width: 368px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
      }
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

  .depoiments {
    .slider {
      display: flex;
      flex-direction: row;
      gap: 50px;
      margin-top: 130px;
    }
  }

  .contato {
    display: flex;
    flex-direction: row;
    gap: 50px;
    margin-top: 130px;
  }

  @media (min-width: 720px) {
    width: 100vw;
    height: calc(100dvh - 70px);
    background-color: var(--color-white-secundary);
  }
`;
