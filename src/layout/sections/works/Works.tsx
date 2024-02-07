import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work, WorkPropsType} from "./work/Work";
import imgWork from './../../../assets/images/NetWork.png'
import second from './../../../assets/images/Second.png'

export const Works = () => {
    const items = [
        {id: '1', href: '#', text: 'All'},
        {id: '2', href: '#', text: 'landing page'},
        {id: '3', href: '#', text: 'React'},
        {id: '4', href: '#', text: 'spa'},
    ]
    const itemWorks: WorkPropsType[] = [
        {
            img: `${imgWork}`,
            link2: '#',
            text: 'Lorem ipsum dolor sit amet,' +
                'consectetur adipisicing elit,' +
                ' sed do eiusmod tempor incididunt ' +
                'ut labore et dolore magna aliqua Ut enim.',
            link1: '#',
            title: 'Social Network',
            id: '1'
        },
        {
            img: `${second}`,
            link2: '#',
            text: 'Lorem ipsum dolor sit amet,' +
                ' consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt ' +
                'ut labore et dolore magna aliqua Ut enim.',
            link1: '#',
            title: 'Counter',
            id: '2'
        }
    ]
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu items={items}/>
            <FlexWrapper justify={'space-around'}>
                {itemWorks.map((work) => (
                    <Work
                        img={work.img}
                        title={work.title}
                        text={work.text}
                        link1={work.link1}
                        link2={work.link2} key={work.id}/>))}
            </FlexWrapper>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #deefff;
`

