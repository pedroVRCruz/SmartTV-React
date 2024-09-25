import styled from "styled-components";

export const Container = styled.span`
  margin-top: 0;

  .customCheckbox {
    height: calc(20px - 1px);
    width: calc(20px - 1px);
    border: 1.4px solid var(--color-blue-primary);
    border-radius: 5px;
    color: var(--color-blue-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-white-primary);
  }

  .checkIcon {
    font-size: 16px;
  }

  .checkInput {
    display: none;
  }
`;
