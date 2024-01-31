import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/Photo.png'
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>  Hi There  </span>
                    <Name> Iam Petrov Konstantin </Name>
                    <MainTitle> A Web Developer </MainTitle>
                </div>
                <StyledPhoto src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};
const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fffe7;
`

const StyledPhoto = styled.img`
    width: 300px;
    height: 400px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    line-height: 41px;
    letter-spacing: 0;
    text-align: left;


`

const Name = styled.h2``