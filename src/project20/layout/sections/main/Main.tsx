import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container";
import photo from "../../../assets/images/bg_Photo.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap-reverse"}>
                    <BlockInfo>
                        <MainTitle>Web Developer</MainTitle>
                        <Name>Hello, my name is Petrov Konstantin</Name>
                        <ShotText>Short text with details about you, what you do
                            or your professional career. You can add more
                            information on the about page.
                        </ShotText>
                        <StyledButtonBlock>
                            <button>Projects</button>
                            <button>LinkedIn</button>
                        </StyledButtonBlock>
                    </BlockInfo>
                        <Photo src={photo} alt="photo"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const Photo = styled.img`
    /*width: 390px;*/
    height: 620px;
    object-fit: cover;
    /*border: 1px solid red;*/
 
    position: relative;
    top: -1px;
    left: 16px;
`
const BlockInfo = styled.div`
    max-width: 570px;
    width: 100%;
   /* border: 1px solid red;*/
`
const StyledMain = styled.div`
    min-height: 50vh;
    display: flex;
    margin-bottom: 144px;

`
const MainTitle = styled.h1`
    color: ${props => props.theme.colors.accent};
    font-weight: 700;
    font-size: 20px;
`

const Name = styled.h2`
    display: inline-block;
    margin-top: 12px;
    font-weight: 700;
    font-size: 64px;
    letter-spacing: 0;
    /*border: 1px solid red;*/
`
const ShotText = styled.span`
    font-size: 24px;
    font-weight: 400;
    display: inline-block;
    margin: 32px 0;
`
const StyledButtonBlock = styled.div`
    display: flex;
    border: 1px solid red;
    button + button {
        padding-left: 12px;
    }
`

