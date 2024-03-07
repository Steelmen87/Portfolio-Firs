import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle title={"Skills"}/>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"react"}/>
            </FlexWrapper>
        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    background-color: #f5dada;
    min-height: 100vh;
`