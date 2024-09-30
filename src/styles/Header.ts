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
  //mobile
  @media (max-width: 767px) {
    .menu {
      display: none;
    }
    .mobilemenu {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-right: 70px;
      button {
        background-color: transparent;
        padding-block: 1px;
        padding-inline: 0px;
        border-width: 0px;
        border-style: none;
        border-color: buttonborder;
        border-image: initial;
      }

      
      .dropdown-content {
        color: black;
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 181px;
        padding: 30px;
        z-index: 1;
        border-radius: 30px 0px 30px 30px;
        justify-content: center;
        align-items: center;
        .text{
          margin-bottom: 30px;
        }
      }
      .dropdown:hover .dropdown-content {
        display: block;
      }
    }
  }
`;
