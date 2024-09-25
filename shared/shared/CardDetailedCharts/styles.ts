import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background-color: var(--color-white-primary);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 5px;
  margin: 0;
  max-height: calc(100dvh - 48px);
  width: 100dvw;
  height: 100%;

  @media (min-width: 720px) {
    max-height: 100dvh;
    width: calc(100dvw - 110px);
    border-radius: 25px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }

  .close {
    width: calc(100dvw - 10px);
    height: 32px;
    position: absolute;
    display: flex;
    align-items: start;
    justify-content: flex-end;
    margin-top:10px;
    margin-right: 20px;
    @media (min-width: 720px) {
      margin-top: 20px;
      width: calc(100dvw - 120px);
    }
  }
  
  .contentStyle {
    display: flex;
    flex: 1;
    width: 100%;
    align-items: center;
  }

  .titleStyle {
    margin-top: 16px;
    color: #024089;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-transform: capitalize;

    @media (min-width: 720px) {
      margin-top: 10px;
      margin-bottom: 30px;
      font-size: 30px;
      line-height: 36px; 
    }
  }
`;
