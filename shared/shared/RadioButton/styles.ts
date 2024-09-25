import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;

  input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 18px;
    height: 18px;
    border: 1.76px solid var(--color-blue-primary);
    border-radius: 50%;
    display: grid;
    transform: translateY(-1.2px);
    place-content: center;
  }
  input[type="radio"]::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-blue-primary);
  }
  input[type="radio"]:checked::before {
    transform: scale(1);
  }
`;
