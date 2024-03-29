import React from 'react';
import styled, {useTheme} from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill/Skill";
import {Container} from "../../../components/Container";
import {Fade} from "react-awesome-reveal";

const skillsObject = [
    {
        id: 'react',
        title: 'react',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        id: 'typeScript',
        title: 'typeScript',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
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
        id: 'styledComponent',
        title: 'styledComponent',
        skillText: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
]
export const Skills = () => {
    const theme = useTheme()
    const allSkills = skillsObject
        .map((s, index) => <Skill key={index} id={s.id} title={s.title} skillText={s.skillText}/>)
    return (
        <StyledSkills id={'skills'}>
            <Container>
                <SectionTitle theme={theme}>My skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-around'}>
                    <Fade cascade damping={0.2}>
                        {allSkills}
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};


export const StyledSkills = styled.section`
    position: relative;
`