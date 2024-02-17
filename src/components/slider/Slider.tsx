import React from 'react';
import styled, {useTheme} from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    const theme = useTheme()
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda atque, delectus earum
                        id impedit ipsam minus numquam perferendis quaerat qui sed, sequi soluta? Dolor ipsa nobis
                        pariatur quos unde?</Text>
                    <Name>@Konstantin Petrov</Name>
                </Slide>
            </FlexWrapper>
            <Pagination theme={theme}>
                <span></span>
                <span className={"active"}></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid;
    max-width: 500px;`
const Slide = styled.div`
    text-align: center;
`
const Text = styled.div`
    margin: -12px 0;
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
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 20px;

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${props => props.theme.colors.accent};
            width: 20px;
        }
    }
`