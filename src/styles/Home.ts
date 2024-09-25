import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--color-white-secundary);
  display: flex;
  flex-direction: column;
  justify-content: start;
  overflow: hidden;
  height: calc(100dvh - 50px);

  @media (min-width: 720px) {
    width: 100vw;
    height: calc(100dvh - 70px);
    background-color: var(--color-white-secundary);
  }
  
  .closeModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  }

  

  .DashboardCardQtyStyle {
    color: var(--color-blue-primary);
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    line-height: 24px;

    @media (min-width: 720px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  .DashboardCardLegendStyle {
    color: var(--color-black-primary);
    font-size: 16px;
    text-align: center;
    white-space: nowrap;

    @media (min-width: 720px) {
      font-size: 20px;
    }
  }

  .DashboardCardIconStyle {
    width: 80px;
    height: 80px;
    @media (min-width: 720px) {
      width: 100px;
      height: 100px;
    }
  }
  .click {
    flex: 2;
    margin-top: -32px;
    cursor: pointer;
    align-self: start;
    z-index: 1009;
    width: 355px;
    height: 170px;
    background-color: transparent;
    position: absolute;
    @media (min-width: 720px) {
      width: 530px;
      height: 250px;
    }
  }

  .icons{
    width: 80px;
    height: 80px;
    @media (min-width: 720px) {
      width: 100px;
      height: 100px;
    }
  }
`;
