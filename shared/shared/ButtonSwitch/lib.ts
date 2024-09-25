export type switchColor = "gray" | "blue" | "red";

export function getSwitchColor(color: switchColor){
    const colors: Record<switchColor, string> = {
        "gray" :  "#71717A",
        "blue" :  "#024089",
        "red" :  "#ff0000",
    }
    return colors[color];
}