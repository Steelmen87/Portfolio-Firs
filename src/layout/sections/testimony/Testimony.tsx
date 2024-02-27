import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/Skill/Skill";
import {Container} from "../../../components/Container";

export const Testimony = () => {
    return (
        <StyledTestimony id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"}>
                    <IconWrapper>
                        <Icon iconId={"quote"} viewBox={"0 0 50 30"}/>
                    </IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    position: relative;
    background-color: #9ab9fc;
    min-height: 50vh;

    ${IconWrapper} {
        margin: 30px 0 72px;
    }

`