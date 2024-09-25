export type ColorName =
  | "black"
  | "black-secundary"
  | "white"
  | "white-secundary"
  | "white-tertiary"
  | "gray"
  | "gray-secundary"
  | "gray-tertiary"
  | "gray-alternative"
  | "blue"
  | "blue-hover"
  | "hover"
  | "blue-secundary"
  | "blue-tertiary"
  | "blue-quarteary"
  | "yellow"
  | "yellow-secundary"
  | "red"
  | "red-hover"
  | "red-secundary"
  | "red-tertiary"
  | "green-dark"
  | "green-light"
  | "green-light-secundary"
  | "green-light-tertiary"
  | "green-quarteary"
  | "purple"
  | "blue-quinquinary"
  | "representative-orange"
  | "representative-purple"
  | "representative-yellow"
  | "transparent";

// This functions make possible to use the colors from global.css in styled-components with easier names
// Example: getColorfromGlobal("blue") will return "var(--color-blue-primary)"
export function getColorfromGlobal(color: ColorName) {
  const colors: Record<ColorName, string> = {
    "black-secundary" :  "var(--color-black-secundary)",
    "black" :  "var(--color-black-primary)",
    "blue-hover" :  "var(--color-blue-hover)",
    "blue-quarteary" :  "var(--color-blue-quarteary)",
    "blue-quinquinary" :  "var(--color-blue-quinquinary)",
    "blue-secundary" :  "var(--color-blue-secundary)",
    "blue-tertiary" :  "var(--color-blue-tertiary)",
    "blue" :  "var(--color-blue-primary)",
    "gray-alternative" :  "var(--color-gray-alternative)",
    "gray-secundary" :  "var(--color-gray-secundary)",
    "gray-tertiary" :  "var(--color-gray-tertiary)",
    "gray" :  "var(--color-gray-primary)",
    "green-dark" :  "var(--color-green-dark-primary)",
    "green-light-secundary" :  "var(--color-green-light-secundary)",
    "green-light-tertiary" :  "var(--color-green-light-tertiary)",
    "green-light" :  "var(--color-green-light-primary)",
    "green-quarteary" :  "var(--color-green-quarteary)",
    "hover" :  "var(--color-hover-primary)",
    "purple" :  "var(--color-purple-primary)",
    "red-hover" :  "var(--color-red-primary-hover)",
    "red-secundary" :  "var(--color-red-secundary)",
    "red-tertiary" :  "var(--color-red-tertiary)",
    "red" :  "var(--color-red-primary)",
    "representative-orange" :  "var(--representative-orange)",
    "representative-purple" :  "var(--representative-purple-primary)",
    "representative-yellow" :  "var(--representative-yellow)",
    "transparent" :  "transparent",
    "white-secundary" :  "var(--color-white-secundary)",
    "white-tertiary" :  "var(--color-white-tertiary)",
    "white" :  "var(--color-white-primary)",
    "yellow-secundary" :  "var(--color-yellow-secundary)",
    "yellow" :  "var(--color-yellow-primary)",
  };

  return colors[color] || "var(--color-blue-primary)";
}