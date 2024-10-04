import styled from "styled-components";

export const Container = styled.footer`
  .superior {
    height: 120px;
    display: flex;
    flex-direction: row;

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
        height: 52px;
        width: 72px;
      }
    }

    .redessociais {
      gap: clamp( 130px, 10vw , 150px);
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: center;
      /* max-width: 900px; */
      /* padding-right: 190px; */
      /* justify-content: space-around; */
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
            width: 56px;
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
      margin-right: 95px !important;
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
            width: 40.5px;
            height: 28px;
          }
          .text {
            font-size: 12px;
          }
        }
        .triangulo {
          width: 0;
          height: 0;
          border-right: 53px solid transparent;
          border-bottom: 70px solid #1c465e;
        }
      }
    }
    .redessociais {
      /* max-width: 185px; */
      /* padding-right: 26px !important; */
      gap: 30px !important;
      justify-content: space-around !important;

      img {
        width: 24px;
        height: 24px;
      }
    }
    .inferior {
      font-size: 12px;
    }
  }
`;
