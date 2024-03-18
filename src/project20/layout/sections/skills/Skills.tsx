import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";

export const Skills = () => {
    type itemsSkillType = {
        id: string
        skill: string
    }
    const itemsSkill: itemsSkillType[] = [
        {id: "0", skill: "js"},
        {id: "1", skill: "vsCode"},
        {id: "2", skill: "css"},
        {id: "3", skill: "w"},
        {id: "4", skill: "git"},
        {id: "5", skill: "sass"},
        {id: "6", skill: "man"},
        {id: "7", skill: "react"},
        {id: "8", skill: "boot"},
        {id: "9", skill: "cat"},
    ]
    return (
        <StyledSkills>
            <Container>
                <SectionTitle title={"Skills"}/>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} gap={"100px"} align={"center"}>
                    {itemsSkill.map((item) => <Skill key={item.id} iconId={item.skill}/>)}
                </FlexWrapper>
            </Container>

        </StyledSkills>
    );
};
const StyledSkills = styled.section`
    min-height: 33vh;
    border: 1px solid red;

`