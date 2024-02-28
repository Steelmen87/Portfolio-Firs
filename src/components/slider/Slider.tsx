import React from 'react';
import styled from "styled-components";
import './../../styles/Slider.css'


import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {theme} from "../../styles/Theme";

const responsive = {
    0: {items: 1},
    568: {items: 2},
    1024: {items: 3},
};
const data: PropsSlide[] = [
    {
        name: '@Petrov Konstantin',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda atque, delectus earum\n' +
            '                        id impedit ipsam minus numquam perferendis quaerat qui sed, sequi soluta? Dolor ipsa nobis\n' +
            '                        pariatur quos unde?'
    },
    {
        name: '@Master',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    },
    {
        name: '@Flamaster',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
    }
]
type PropsSlide = {
    text: string
    name: string
}
const Slide = ({text, name}: PropsSlide) => {
    return (
        <StyleSlide>
            <Text>{text}</Text>
            <Name>{name}</Name>
        </StyleSlide>
    )
}


const items = data.map(sl => (<Slide name={sl.name} text={sl.text}/>))
export const Slider = () => (
    <StyledSlider>
        <AliceCarousel
        mouseTracking
        items={items}
        /* responsive={responsive}*/
        /*  controlsStrategy="alternate"*/
    />
    </StyledSlider>
);


const Text = styled.div`
    margin: 2px 0;
`
const Name = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 0 42px;

`

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.colors.primaryBg};
    /*border: 1px solid;*/
    max-width: 500px;
    width: 100%;
`
const StyleSlide = styled.div`
    text-align: center;
`