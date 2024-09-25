export type buttonIconColor = "gray" | "blue" | "black" | "red";

export function getButtonIconColor(color: buttonIconColor){
    const colors: Record<buttonIconColor, string> = {
        "gray" :  "#71717A",
        "blue" :  "var(--color-blue-primary)",
        "black": "var(--color-black-primary)",
        "red" :  "#ff0000",
    }
    return colors[color] || "var(--color-blue-primary)";
}