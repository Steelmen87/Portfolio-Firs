import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill/Skill";

const skillsObject = [
    {
        id: 'codeSvg',
        title: 'html5',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        id: 'css',
        title: 'css',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        id: 'figmaSvg',
        title: 'figma',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        id: 'typeScript',
        title: 'typeScript',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        id: 'styledComponent',
        title: 'styledComponent',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }, {
        id: 'react',
        title: 'react',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]
export const Skills = () => {
    const allSkills = skillsObject
        .map(s => <Skill id={s.id} title={s.title} skillText={s.skillText}/>)
    return (
        <StyledSkills>
            <SectionTitle>My skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                {allSkills}
            </FlexWrapper>
        </StyledSkills>
    );
};


export const StyledSkills = styled.section`
    background-color: #545353;
    min-height: 100vh;
`