import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
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
            <Pagination>
                <span></span>
                <span></span>
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
    margin: 10px 0;
`
const Name = styled.div`

`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #f60ecf;
        border-radius: 5px;
    }
`