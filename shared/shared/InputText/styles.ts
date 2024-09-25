import styled from "styled-components";

interface InputProps {
  $iconType?: "right" | "left";
  $visibility: boolean;
  $error: boolean;
}

export const Container = styled.div<InputProps>`
  display: ${(props) => (props.$visibility ? "flex" : "none")};
  background-color: var(--color-white-primary);
  border: 1px solid ;
  border-color: ${(props) => props.$error=== true ?"red": "var(--color-gray-alternative)"   };
  border-radius: 4px; 
  align-items: center;
  overflow: hidden;
  justify-content: ${(props) =>
    props.$iconType === "right" ? "space-between" : "start"};
  
  width: 100%;
  height: 38px;
  padding: 2.4px;

  .icon {
    margin: 0 12px;
    cursor: pointer;
  }

  .inputStyles {
    width: 100%;
    border: none;
    padding: 4.8px;
    outline: none;
    font-size: 20px;
    font-family: "Inter";
    ::placeholder {
      color: var(--color-gray-tertiary);
    }
  }
`;
