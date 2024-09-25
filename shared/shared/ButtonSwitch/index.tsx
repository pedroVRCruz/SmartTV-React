import Switch from "react-switch";
import { getSwitchColor, switchColor } from "./lib.ts";

interface Props {
  checked: boolean;
  functionButtonSwitch: () => void;
  id?: string;
  width?: number;
  height?: number;
  handleDiameter?: number;
  color?: switchColor;
}

export function ButtonSwitch({
  id,
  checked,
  functionButtonSwitch,
  color,
  width,
  height,
}: Props) {
  // The switch component only accepts the color in hexadecimal format, so for this one we need to do it like this.
  const colorGreenLight = "#10FF10";
  const colorGray = "#D1D1D1";

  return (
    <Switch
      checked={checked}
      id={id}
      onChange={() => {
        functionButtonSwitch();
      }}
      onColor={colorGreenLight}
      offColor={getSwitchColor(color)}
      offHandleColor={colorGray}
      checkedIcon={false}
      uncheckedIcon={false}
      height={height || 26}
      width={width || 52}
    />
  );
}
