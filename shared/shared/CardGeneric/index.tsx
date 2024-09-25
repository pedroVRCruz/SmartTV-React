import { IconType } from "react-icons/lib";
import React from "react";
import { Container } from "./style";
import { getColorfromGlobal } from "../../util/functions.ts";

export interface Props {
  geometry: "square" | "rectangle";
  mainText: string;
  number?: number;
  Icon?: IconType | string;
  fontColor: "blue" | "gray-alternative";
  onClickFunction?: () => void;
}

export function CardGeneric({
  geometry,
  mainText,
  number,
  fontColor,
  Icon,
  onClickFunction,
}: Props) {
  return (
    <Container
      geometry={geometry}
      mainText={mainText}
      Icon={Icon}
      onClick={onClickFunction}
      fontColor={getColorfromGlobal(fontColor)}
    >
      {geometry == "rectangle" ? (
        <>
          <div className="biggerText">
            <h2 className={"mainText colored"}>{mainText}</h2>
          </div>

          {number ? (
            <>
              <h1 className="qtyNum infoText colored">{number}</h1>
            </>
          ) : Icon ? (
            <>
              {typeof Icon == "string" ? (
                <div className="imgSizing">
                  <img className={"colored"} src={Icon} alt={""} />
                </div>
              ) : (
                <div className="imgSizing">
                  <Icon />
                </div>
              )}
            </>
          ) : (
            <h1 className="qtyNum infoText colored">{number}</h1>
          )}
        </>
      ) : geometry == "square" ? (
        <>
          {number ? (
            <>
              <h1 className={"infoText colored"}>{number}</h1>
            </>
          ) : Icon ? (
            <>
              {typeof Icon == "string" ? (
                <div className="imgSizing">
                  <img className={"colored"} src={Icon} alt={""} />
                </div>
              ) : (
                <>
                  {React.createElement(Icon, {className:"iconStyles"})} {Icon}
                </>
              )}
            </>
          ) : (
            <h1 className={"infoText colored"}>{number}</h1>
          )}
          <h2 className={"mainText colored"}>{mainText}</h2>
        </>
      ) : (
        ""
      )}
    </Container>
  );
}
