import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type propsType = {
    img: string
    title: string
    text: string
}
export const Work = ({img, title, text}: propsType) => {
    return (
        <StyledWork>
            <StyledImage>
                <Image src={img} alt={"project"}/>
            </StyledImage>
            <StyledContent>
                <Title>{title}</Title>
                <Text>{text}</Text>
                <Button/>
            </StyledContent>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    border-radius: 24px;
    background-color: #fff;
    max-width: 992px;
    width: 100%;

    display: flex;
    flex-direction: row-reverse;
`
const StyledImage = styled.div`
    display: flex;
    width: 50%;
`
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    gap:24px ;
    width: 100%;
    
`
const Image = styled.img`
    width: 100%;
    height: 524px;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;
    object-fit: cover;


`
const Title = styled.h2`
    font-size: 40px;
    font-weight: 700;
    line-height: 150%;
    text-align: left;
`
const Text = styled.p`
    max-width: 400px;
    width: 100%;
    color: ${theme.colors.fontP};

    font-size: 18px;
    font-weight: 400;
    line-height: 150%; 
    text-align: left;
`
const Button = styled.button`

`