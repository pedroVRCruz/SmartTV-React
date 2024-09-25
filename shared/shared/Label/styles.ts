import styled from "styled-components";
interface ContainerProps {
  $isinput: string;
  $color: string;
  $error: boolean;
  $errorText:string;
  $errorTranslate: string;
  // missingDescription: boolean;
}   

export const Container = styled.div<ContainerProps>`

  .errorDiv{
      position: absolute;
  }
  .errorDiv:before {
    display: ${(props) => props.$error? "":"none"};
    top: 38.4px;  
    content: '${(props) => props.$errorTranslate}'; 
    font-weight: bold;
    font-size: 12px;
    color: red;
  }

  .errorDiv:after {
    display: ${(props) => props.$error? "":"none"};
    top: 38.4px;
    left: 35.2px;
    content: '${(props) => props.$errorText}';
    font-size: 12px;
    color: red;
  }
  
  .labelContainer{
    display: grid;
    background-color: transparent;
    width: 100%;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  
  .labelText {
    color: ${(props) => props.$error? 'red': props.$color}; 
    z-index: 1;
    margin-left: 15px;
    background: var(--color-white-primary);
    width: fit-content;
    padding: 0 4px;
    font-size: 14px;
  }
  

  .labelHeader{
    margin-top: ${(props) => (props.$isinput == "1" ? "-8px" : "")};
    grid-column: 1;
    grid-row: 1;
    z-index: 2;
    background-color: transparent;
    height:16px;
  }

  .labelContent{
    grid-column: 1;
    grid-row: 1;
  }
  //Change from select html tag
  .selectStyle {
    -webkit-user-select: none;
    -webkit-touch-callout: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
  }
  //Change from textArea html tag
  .textAreaStyle {
    border-radius: 10px;
    margin-top: -8px;
    padding: 9px 13px 9px 13px;
    resize: none;
    font-family: "Inter";
    font-size: 14px;
    border-color: var(--color-gray-alternative);
    :focus {
      outline: none !important;
    }
  }

  .groupStyles {
    align-items: end;
    width: 100%;
  }

  .headerstyle {
    font-size: 18px;
    font-weight: 500;
    text-transform: none;
    color: var(--color-blue-primary);
    border-bottom: 1px solid var(--color-gray-primary);
    padding-left: 20px;
    width: 100%;
  }
`;
