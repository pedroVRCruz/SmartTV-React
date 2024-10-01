import styled from "styled-components";

export const Container = styled.header`
  height: 80px;

  .box {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    width: 48px;
    height: 48px;
    margin-left: 60px;
    align-self: center;
  }

  .menu {
    display: flex;
    flex-direction: row;
    gap: 60px;
    font-size: 20px;
    color: #ffffff;
    align-items: center;
    margin-right: 60px;
  }

  .gradient {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.1) 6%,
      rgba(104, 104, 104, 0.1) 100%
    );
    border-radius: 0px 0px 20px 20px;
  }

  .mobilemenu {
    display: none;
  }

  @media (max-width: 767px) {
    .logo{
      display:flex;
      align-items: center;
      img{
        height: 28px;
        width: 40.75px;
      }
    }
    .menu {
      display: none;
    }

    .mobilemenu {
      display: flex;
      align-items: center;
      padding-right: 70px;

      button {
        background-color: transparent;
        padding: 0;
        border: none;
        display: flex;
        align-items: center;
      }

      img {
        width: 30px;
        height: 30px;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        top: 60px;
        right: 70px;
        min-width: 181px;
        height: 171px;
        padding: 30px;
        z-index: 1;
        border-radius: 30px 0px 30px 30px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
        white-space: nowrap;

        .text {
          font-size: 14px;
          font-weight: 700;
          color: #2f2f31;
        }
        .text:hover{
          color:#23A4DD;
        }

        a {
          text-decoration: none;
        }
      }
      .dropdown-content {
        display: flex;
      }
    }
  }
`;
