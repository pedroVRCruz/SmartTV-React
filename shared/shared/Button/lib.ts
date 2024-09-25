
export type buttonColor = "red" | "green-dark" | "gray-alternative" | "blue";
export function getHoverColor(color: buttonColor){
    const colors: Record<buttonColor, string> = {
        "red": "var(--color-red-primary-hover)",
        "green-dark": "var(--color-green-light-primary)",
        "gray-alternative": "var(--color-gray-alternative)",
        "blue": "var(--color-hover-primary)"
    }
    return colors[color] || "var(--color-hover-primary)";
}

export function getTextColor(color: buttonColor){
    if(color == "green-dark"){
        return "var(--color-black-primary)"
    } else{
        return ""
    }
}