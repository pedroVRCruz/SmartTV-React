import { Container } from "./styles";
import { useEffect, useRef, useState } from "react";

export interface Props {
  tooltiptext: string;
  toolTipIcon: string;
  alignment: "left" | "right";
}
export function ToolTipButton({ tooltiptext, alignment, toolTipIcon }: Props) {
  const [toolTipOpened, setToolTipOpened] = useState<boolean>(false);
  const toolTipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toolTipOpened) {
      toolTipRef.current?.focus();
    }
  }, [toolTipOpened]);

  return (
    <Container $alignment={alignment}>
      <img
        className="tooltipIcon"
        src={toolTipIcon}
        onClick={() => setToolTipOpened(!toolTipOpened)}
        alt={"Tooltip"}
      />
      <div
        tabIndex={0}
        onBlur={() => {
          setToolTipOpened(!toolTipOpened);
        }}
        className={"toolTipStyle"}
        ref={toolTipRef}
        style={{ display: toolTipOpened ? "block" : "none" }}
      >
        <p className={"toolTipTextStyle"}>{tooltiptext}</p>
      </div>
    </Container>
  );
}
