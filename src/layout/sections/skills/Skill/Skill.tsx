import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
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
                <SkillTitle>{title}</SkillTitle>
                <SkillText>{skillText}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    width: 330px;
    flex-grow: 1;
    max-width: 400px;
    padding: 52px 20px 62px;
    @media ${props => props.theme.media.mobile} {
        padding: 12px 0 112px;
    }
`
export const IconWrapper = styled.div`
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
    margin: 70px 0 15px;
    text-transform: uppercase;

`
const SkillText = styled.p`
    text-align: center;
`
