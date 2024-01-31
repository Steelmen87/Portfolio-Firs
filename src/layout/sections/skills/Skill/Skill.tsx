import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    id: string
    title: string
    skillText: string
}
export const Skill = ({skillText, id, title}: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={id}/>
            <SkillTitle> {title}</SkillTitle>
            <SkillText>{skillText}</SkillText>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    max-width: 400px;
    background-color: rgba(255,255,255,0.56);
    margin: 5px;
`
// TODO: Change Style - StyledSkill

const SkillTitle = styled.h3`
    font-family: Josefin Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: left;

    color: #fff;

`
const SkillText = styled.p`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0;
    text-align: center;

    color: #fff;
`
