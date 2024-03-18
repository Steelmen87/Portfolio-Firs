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
        <svg width={width || "119"} height={height || "119"} viewBox={viewBox || "0 0 119 119"} fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};
