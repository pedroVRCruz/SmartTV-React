import styled from "styled-components";
import { IconType } from "react-icons/lib";

export interface Props {
  geometry: "square" | "rectangle";
  mainText: string;
  number?: number;
  Icon?: IconType | string;
  fontColor: string;
  onClickFunction?: () => void;
}
export const Container = styled.div<Props>`
  align-items: center;
  background-color: var(--color-white-primary);
  border-radius: 25px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: ${(props) => (props.onClickFunction ? "pointer" : "default")};
  display: flex;
  flex-direction: ${(props) =>
    props.geometry == "rectangle" ? "row" : "column"};
  gap: ${(props) => (props.geometry == "rectangle" ? "" : "4px")};
  height: ${(props) => (props.geometry == "rectangle" ? "77px" : "174px")};
  justify-content: ${(props) =>
    props.geometry == "rectangle" ? "space-around" : "center"};
  text-align: center;
  width: ${(props) => (props.geometry == "rectangle" ? "540px" : "166px")};

  @media (max-width: 720px) {
    height: ${(props) => (props.geometry == "rectangle" ? "77px" : "100px")};
    width: ${(props) => (props.geometry == "rectangle" ? "540px" : "100px")};
  }

  @media (min-width: 720px) {
    .img {
      width: 50px;
      height: 50px;
    }

    .imgSizing {
      height: 57px;
      margin-right: 43px;
    }
  }

  .colored {
    color: ${(props) => props.fontColor};
  }

  .infoText {
    font-size: 50px;
  }

  .mainText {
    font-size: 28px;
    margin-left: ${(props) => (props.geometry == "rectangle" ? "0" : "0")};
    ${(props) => (props.geometry == "rectangle" ? "20px" : "column")};
    text-align: center;

    @media (max-width: 720px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  .biggerText {
    flex: 1;
  }

  .qtyNum {
    width: 93px;
    display: flex;
  }

  .iconStyles {
    width: 50px;
    height: 50px;
    color: ${(props) =>
        props.fontColor == "blue"
            ? "var(--color-blue-primary)"
            : "var(--color-gray-alternative) !important"};
    @media (max-width: 720px) {
      width: 30px;
      height: 30px;
    }
  }
`;
