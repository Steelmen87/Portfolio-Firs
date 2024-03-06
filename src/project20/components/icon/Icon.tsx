import React from 'react';
import iconsSprite from './../../assets/images/icons-svg.svg'

type propsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, width, height, viewBox}: propsType) => {
    return (
        <svg width={width || "50"} height={height || "50"} viewBox={viewBox || "0 0 50 50"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};
