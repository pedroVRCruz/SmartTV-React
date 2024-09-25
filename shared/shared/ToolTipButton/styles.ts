import styled from "styled-components";

interface Props {
  $alignment: "left" | "right";
}

export const Container = styled.div<Props>`
  align-items: center;
  display: flex;
  position: relative;

  .tooltipIcon {
    cursor: pointer;
  }

  .toolTipStyle {
    background-color: var(--color-black-primary);
    border-radius: 4px;
    left: ${(props) => (props.$alignment == "left" ? "-152px" : "20px")};
    position: absolute;
    top: 0;
    width: 145px;
    z-index: 20;

    @media (min-width: 720px) {
      left: 20px;
    }
  }

  .toolTipTextStyle {
    color: #fff;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    padding: 0 10px;
    text-align: center;
    user-select: none;
  }
`;
