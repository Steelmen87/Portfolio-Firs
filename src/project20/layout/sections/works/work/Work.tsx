import React from 'react';
import styled from "styled-components";

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
    border: 1px solid;
    background-color: #faf04e;
    max-width: 992px;
    width: 100%;

    display: flex;
    flex-direction: row-reverse;
`
const StyledImage = styled.div`
    
`
const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 496px;
    width: 100%;
`
const Image = styled.img`
    width: 100%;
    height: 524px;
    object-fit: cover;
`
const Title = styled.h2`

`
const Text = styled.p`
    max-width: 400px;
    width: 100%;
`
const Button = styled.button`

`