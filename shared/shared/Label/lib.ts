import {GroupedOption, SelectOption} from "../../util/interfaces.tsx";
export type labelColor = "gray" | "blue" | "black" | "red";

export function prepareGroupsForSelect(options: Array<SelectOption>){
    const groupedOptions: GroupedOption[] = [];
    options?.map((option) => {
        const group = groupedOptions.find(
            (group) => group.label === option.group,
        );
        if (group) {
            group.options.push(option);
        } else {
            groupedOptions.push({
                label: option.group,
                options: [option],
            });
        }
    });
    return groupedOptions;
}
export function getTextColor(color: labelColor){
    const colors: Record<labelColor, string> = {
        "gray" :  "#71717A",
        "blue" :  "var(--color-blue-primary)",
        "black": "var(--color-black-primary)",
        "red" :  "#ff0000",
    }
    return colors[color] || "var(--color-blue-primary)";
}