/* eslint-disable @next/next/no-img-element */

import { Container, OutSideClick } from "./styles";
import { Button } from "../Button";
import { buttonColor } from "../Button/lib";
import { iconPosition } from "./lib";

interface Props {
  textMessage: string;
  textButton1: string;
  textButton2?: string;
  onClick1: (e: any) => void;
  onClick2?: (e: any) => void;
  messageIcon: string;
  confirmationButtonColor?: buttonColor;
  iconPosition?: iconPosition;
}

export function ModalMessage({
  textMessage,
  onClick1,
  onClick2,
  textButton1,
  textButton2,
  messageIcon,
  confirmationButtonColor,
  iconPosition,
}: Props) {
  return (
    <>
      <OutSideClick onClick={onClick1}></OutSideClick>
      <Container $position={iconPosition}>
        <section className={"icontext"}>
          <img className="iconImg" src={messageIcon} alt="okIcon" />
          <h1 className="iconMessage">{textMessage}</h1>
        </section>
        <div className="buttonDiv">
          {textButton2 && onClick2 ? (
            <Button
              variant={confirmationButtonColor}
              typeOfButton="submit"
              functionButton={onClick2}
              width="130px"
              height="30px"
            >
              {" "}
              <h1 className="buttonText">{textButton2}</h1>
            </Button>
          ) : (
            ""
          )}
          <Button
            variant="gray-alternative"
            typeOfButton="submit"
            functionButton={onClick1}
            width="130px"
            height="30px"
          >
            {" "}
            <h1 className="buttonText">{textButton1}</h1>
          </Button>
        </div>
      </Container>
    </>
  );
}
