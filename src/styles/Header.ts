import styled from "styled-components";

export const Container = styled.header`
  height: 80px;
  /* width 100%; */

.box{
  display: flex;
  justify-content:space-between;
  height:100%;
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
    color: #FFFFFF;
    align-items: center;
    margin-right:60px;
  }
  .gradient{
    width:100%;
    height:100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.10) 6%, rgba(104, 104, 104, 0.10) 100%);
    border-radius: 0px 0px 20px 20px;

  }
`;
