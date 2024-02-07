import React from 'react';
import styled, {useTheme} from "styled-components";
import photo from './../../../assets/images/Photo.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    const theme = useTheme()
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} theme={theme}>
                    <div>
                        <SmallText> Hi There </SmallText>
                        <Name> I am <span>Petrov Konstantin</span></Name>
                        <MainTitle> A Web Developer </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: "";
        width: 320px;
        height: 450px;
        border: 5px solid ${props => props.theme.colors.accent};

        position: absolute;
        top: -24px;
        left: 20px;
        z-index: -1;
    }
`
const Photo = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    letter-spacing: 0;



`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 10px 0;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${props => props.theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;

`