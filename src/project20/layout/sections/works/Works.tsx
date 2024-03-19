import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";
import {Work} from "./work/Work";
import social from "./../../../assets/images/NetWork.png"
import second from "./../../../assets/images/Second.png"


const itemsWork = [
    {id: "1", img: `${social}`, title: "Social network", text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."},
    {id: "2", img: `${second}`, title: "Counter", text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."},
    {id: "3", img: `${second}`, title: "Counter", text: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example."},
]
export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle title={"Works"}/>
            <StyleWorksWrapper>
                {itemsWork.map(item => (
                    <Work
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        text={item.text}/>
                ))}
            </StyleWorksWrapper>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    min-height: 100vh;
    /*background-color: #acc3f6;*/
`
const StyleWorksWrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    flex-wrap: wrap;
    width: 100%;

    row-gap: 78px;
`