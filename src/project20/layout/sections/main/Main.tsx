import React from 'react';
import styled from "styled-components";
import photo from "./../../../assets/images/Photo.png"
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <MainTitle>Web Developer</MainTitle>
                    <div>
                        <Name>Hello,  my name is Petrov Konstantin</Name>
                        <span>Short text with details about you, what you do
                        or your professional career. You can add more
                        information on the about page.</span>
                    </div>
                    <StyledButtonBlock>
                        <button>Projects</button>
                        <button>LinkedIn</button>
                    </StyledButtonBlock>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #cccbcb;
`
const MainTitle = styled.h1``
const Name = styled.h2``
const StyledButtonBlock = styled.div`
    display: flex
`

const Photo = styled.img`
    width: 520px;
    height: 430px;
    object-fit: cover;
`