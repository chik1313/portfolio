import React from 'react';
import iconSprite from '../../assets/images/icon-sprite.svg'

type PropsType = {
    iconId:string
    height?:string
    width?:string
    viewBox?:string
}

export const Icon = ({iconId,height,width,viewBox}:PropsType) => {

    return (
        <svg width={width || '50'} height={height || "50"} viewBox={viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={ `${iconSprite}#${iconId}` }/>
        </svg>
        );
};

