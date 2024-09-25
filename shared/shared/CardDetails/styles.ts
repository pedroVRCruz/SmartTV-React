import styled from "styled-components";
export interface Props{
  backgroundColor: string;
  width: string;
  height:string
  borderRadius:string;
  $bodyPaddingMobile: string;
  bodyPadding:string;
  $footerPaddingMobile:string;
  footerPadding:string;

}
export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  background-color: ${(props) => props.backgroundColor || "var(--color-white-primary)"};
  
  flex-direction: column;
  height: 100%; 
  width: 100%; 
  overflow-x: hidden;
  overflow-y: auto;
  
  @media (min-width: 720px) {
    border: 1px solid #F4F4F5;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    max-width: ${(props) => props.width || "943px"};
    border-radius: ${(props) =>    props.borderRadius || "6px"};
    height: ${(props) => props.height || "828px"};
    overflow: hidden;
  }
  .closeButton{
    width: 24px;
    height: 24px;
    position: absolute;
    right: 0;
    top: 0;
    padding-right: 7px;
    padding-top: 12px;
    cursor: pointer;
  }
  
  .bodyClass{
    flex: 1;
    padding: ${(props) => props.$bodyPaddingMobile || props.bodyPadding || "36px 0 0 0"};
    @media (min-width: 720px) {
      padding: ${(props) => props.bodyPadding || "36px 0 0 0"};
    }
  }
  
  .footerClass{
    padding: ${(props) => props.$footerPaddingMobile || props.footerPadding || "10px 10px"};
    @media (min-width: 720px) {
        padding: ${(props) => props.footerPadding || "10px 10px"};
    }
    
  }
  
`;
