import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from "./Slider_Styled"
import "./slider.css"

type SlidePropsType = {
    username: string
    text: string
}

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide>
            <S.Text>{props.text}</S.Text>
            <S.Name>@{props.username}</S.Name>
        </S.Slide>
    )
}

const items = [
    <Slide
        text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
        username={"Ivan Ivan"} />,
        <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,consectetur adipisicing elit."}
        username={"Ivan Ivan"}/>,
        <Slide text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        username={"Ivan Ivan"}/>,
        ];

        export const Slider = () => (
        <S.Slyder>
        <AliceCarousel
        mouseTracking
        items={items}
    />
</S.Slyder>
)
;

