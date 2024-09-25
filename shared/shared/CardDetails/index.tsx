import { ReactNode } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import { Row } from "../Row";
import { useTranslation } from "react-i18next";

export interface Props {
  children: ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
  actions?: ("close" | "save" | "delete")[];
  width?: string;
  height?: string;
  closeFunction?: () => void;
  saveFunction?: () => void;
  deleteFunction?: () => void;
  bodyPadding?: string;
  bodyPaddingMobile?: string;
  footerPadding?: string;
  footerPaddingMobile?: string;
  isLoading?: boolean;
  spinIcon?: string;
  closeIcon?: string;
}

export const CardDetails = ({
  children,
  actions,
  borderRadius,
  backgroundColor,
  width,
  height,
  closeFunction,
  saveFunction,
  deleteFunction,
  bodyPadding,
  footerPadding,
  bodyPaddingMobile,
  footerPaddingMobile,
  isLoading,
  spinIcon,
  closeIcon,
}: Props) => {
  const { t } = useTranslation();
  return (
    <Container
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      bodyPadding={bodyPadding}
      footerPadding={footerPadding}
      $bodyPaddingMobile={bodyPaddingMobile}
      $footerPaddingMobile={footerPaddingMobile}
    >
      {actions && actions.indexOf("close") != -1 && (
        <div className={"closeButton"} onClick={closeFunction}>
          <img src={closeIcon} alt={""} />
        </div>
      )}
      <div className={"bodyClass"}>{children}</div>
      <div className={"footerClass"}>
        <Row justifyContent={"flex-end"} gap={"20px"}>
          {actions && actions.indexOf("delete") != -1 && (
            <Button
              variant={"red"}
              margin={"0"}
              functionButton={deleteFunction}
            >
              {t("Delete")}
            </Button>
          )}
          {actions && actions.indexOf("save") != -1 && (
            <Button
              variant={"green-dark"}
              margin={"0"}
              functionButton={() => {
                saveFunction();
              }}
              isLoading={isLoading}
              spinIcon={spinIcon}
            >
              {t("Save")}
            </Button>
          )}
        </Row>
      </div>
    </Container>
  );
};
