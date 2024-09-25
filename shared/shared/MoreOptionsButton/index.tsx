import { useTranslation } from "react-i18next";
import { Container, MoreOptionsItem } from "./styles";
import { AppContext } from "../../lib/context";
import { useContext } from "react";
import { ColorName, getColorfromGlobal } from "../../util/functions";

export interface infoContent {
  icon: string;
  color: "blue" | "white-secundary" | "gray";
  backgroundColor: "blue-tertiary" | "blue" | "white-secundary";
  function: Function;
  text: string;
  rotation: 90 | 0;
}

export interface Props {
  CloseIcon: any;
  infoContent: infoContent[];
  OpenIcon: any;
  backgroundColor?: ColorName;
}

export function MoreOptionsButton({ CloseIcon, infoContent, OpenIcon, backgroundColor }: Props) {
  const { t } = useTranslation();
  const { isMoreOptionsActive, setIsMoreOptionsActive } =
    useContext(AppContext);

  const background = getColorfromGlobal(backgroundColor);

  return (
    <Container
      $backgroundColor={isMoreOptionsActive ? background : "transparent"}
    >
      {isMoreOptionsActive &&
        infoContent.map((item: infoContent) => {
          const rotation = item.rotation == 90 ? "rotate(90deg)" : "";

          return (
            <>
              <MoreOptionsItem
                $backgroundColor={getColorfromGlobal(item.backgroundColor)}
                $color={getColorfromGlobal(item.color)}
                $transform={rotation}
                onClick={() => {
                  item.function();
                }}
              >
                <img src={item.icon} className="buttonSize" />
              </MoreOptionsItem>
              <h2 className={"legend " + (item.text.length > 6 && "animatedText")}>
                {t(item.text)}
              </h2>
            </>
          );
        })}

      {isMoreOptionsActive ? (
        <img
          src={CloseIcon}
          className="staticIcon buttonSize buttonColor"
          onClick={() => {
            setIsMoreOptionsActive(!isMoreOptionsActive);
          }}
        />
      ) : (
        <img
        src={OpenIcon}
          className="buttonSize buttonColor"
          onClick={() => {
            setIsMoreOptionsActive(!isMoreOptionsActive);
          }}
        />
      )}
    </Container>
  );
}
