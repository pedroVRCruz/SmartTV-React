import styled from "styled-components";

export const Container = styled.footer`
  .superior {
    height: 120px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left {
      display: flex;
      .logocontainer {
        font-family: Centaur;
        letter-spacing: 2.4px;
        font-size: 30px;
        display: flex;
        flex-direction: row;
        gap: 70px;
        min-width: 409px;
        background: var(--Azul-escuro, #1c465f);
        justify-content: center;
        align-items: center;
      }

      .triangulo {
        width: 0;
        height: 0;
        border-right: 186px solid transparent;
        border-bottom: 120px solid #1c465e;
      }
      img {
        height: 50px;
        width: 50px;
      }
    }

    .redessociais {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      max-width: 400px;
      align-items: center;
      padding-right: 195px;
    }
  }

  .inferior {
    display: flex;
    height: 80px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    align-self: stretch;
    width: 100%;

    background: var(--Azul-escuro, #1c465f);
  }
  //tablet
  @media (max-width: 991px) {
    .superior {
      height: 70px;
      .left {
        .logocontainer {
          min-width: 270px;
          flex-direction: row-gap;
          img {
            width: 36px;
            height: 36px;
          }

          .triangulo {
            width: 0;
            height: 0;
            border-right: 105px solid transparent;
            border-bottom: 120px solid #1c465e;
          }
          .text {
            font-size: 20px;
          }
        }
      }
    }
    .redessociais {
      padding-right: 95px !important;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  //mobile
  @media (max-width: 767px) {
    .superior {
      height: 70px;
      .left {
        .logocontainer {
          flex-direction: column;
          gap: 0px;
          min-width: 137px;
          img {
            width: 28px;
            height: 28px;
          }
          .text {
            font-size: 12px;
          }
        }

        .triangulo {
          width: 0;
          height: 0;
          border-right: 100px solid transparent;
          border-bottom: 100px solid #1c465e;
        }
      }
    }

    .redessociais {
      max-width: 185px;
      padding-right: 26px !important;
      gap: 20px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
