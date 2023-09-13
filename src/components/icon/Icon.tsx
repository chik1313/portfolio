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
        <svg width={width} height={height} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={ `${iconSprite}#${iconId}` }/>
        </svg>
        );
};

