import styled from "styled-components";

interface props {
  $position:string;
}

export const OutSideClick = styled.div`
    width: 100dvw;
    height: 100dvh;
    top: 0;
    right: 0;
    position: absolute;
    z-index: 1001;
`

export const Container = styled.div<props>`
  top: calc(50% - 204px / 2);
  left: calc(50% - 95dvw / 2);
  width: 95dvw;
  height: 204px;
  padding: 20px 20px 20px 20px;
  background-color: var(--color-white-primary);
  border-radius: 9px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 500000000;

  @media (min-width: 720px) {
    width: 353px;
    height: 204px;
    left: calc(50% - 420px / 2);
    padding: 40px 20px 20px 20px;
  }

  .icontext {
    display: flex;
    flex-direction:${(props) => props.$position === "top"? "column": "row" };
    flex: 1;
    align-items: center;
    gap: 10px;
    margin-top: 0;
    max-height: 124px;
    max-width: 313px;
  }
  .iconImg {
    padding-bottom: ${(props) => props.$position === "top"? '0': '14.4px'};
  }
  .iconMessage {
    font-size: 18px;
    padding-bottom: 24.5px;
    color: var(--color-black-primary);
  }
  

  .buttonDiv {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 30px;
    gap: 20px;

    
  }
    
  .buttonText {
    font-size: 14px;
    font-family: "Inter";
    color: var(--color-white-primary);
  }
    
  
`;
