import { ReactNode, useEffect } from "react";
import { ButtonIcon } from "../ButtonIcon";
import { Container, OutSideClick } from "./styles";
import { getProps } from "./lib";

export interface Props {
  title?: string;
  functionCloseModal?: () => void;
  children: ReactNode;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  closeIcon?: string;
  mobileFullScreen?: boolean;
}

export function ModalGeneric({
  title,
  functionCloseModal,
  children,
  top,
  bottom,
  right,
  left,
  closeIcon,
  mobileFullScreen,
}: Props) {
  const propsCSS = {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
    title: title,
  };
  const onEscape = (e: any) => {
    if (e.key === "Escape") {
      functionCloseModal();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onEscape);
  }, []);
  return (
    <>
      <OutSideClick onClick={functionCloseModal}></OutSideClick>
      <Container
        $top={top}
        $bottom={bottom}
        $right={right}
        $left={left}
        $position={getProps(propsCSS).position}
        $width={getProps(propsCSS).width}
        $height={getProps(propsCSS).height}
        $mobileFullScreen={mobileFullScreen ? mobileFullScreen : false}
        $title={getProps(propsCSS).title}
      >
        <section className="modalHeader">
          <h2 className="modalTitle">{title}</h2>
          <div className="closeButton">
            <ButtonIcon
              img={closeIcon}
              functionButtonIcon={functionCloseModal}
            ></ButtonIcon>
          </div>
        </section>
        <section className="modalBody">{children}</section>
      </Container>
    </>
  );
}
