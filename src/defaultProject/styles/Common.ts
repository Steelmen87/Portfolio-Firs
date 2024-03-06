import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmax: number
    Fmin: number
}
export const font = ({color, weight, lineHeight, family, Fmin, Fmax}: FontPropsType) => `
    font-family:${family || "Poppins"};
    font-weight: ${weight || 400};
    color:${color || theme.colors.font};
    line-height:${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`