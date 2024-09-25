import styled from "styled-components";

interface ContainerProps {
  $color: string
}

export const Container = styled.button<ContainerProps>`
  width: auto;
  color: ${(ContainerProps) => ContainerProps.$color};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
  &:disabled {
    color: var(--color-gray-primary);
    cursor: default;
    &:hover {
      background-color: transparent;
    }
  }
  
`;
