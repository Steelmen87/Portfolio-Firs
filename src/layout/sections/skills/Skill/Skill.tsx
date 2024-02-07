import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled, {useTheme} from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    id: string
    title: string
    skillText: string
}
export const Skill = ({skillText, id, title}: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={id}/>
                </IconWrapper>
                <SkillTitle>{title.toUpperCase()}</SkillTitle>
                <SkillText>{skillText}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 380px;
    max-width: 400px;
    padding: 62px 20px 40px;
`
const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        transform: rotate(45deg) translate(-50%, -50%);
        background-color: rgba(255, 255, 255, .1);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;

    }
`

const SkillTitle = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    margin: 70px 0 15px;

`
const SkillText = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
    text-align: center;

    color: #fff;
`
