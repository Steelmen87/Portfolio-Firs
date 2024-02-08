import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work, WorkPropsType} from "./work/Work";
import imgWork from './../../../assets/images/NetWork.png'
import second from './../../../assets/images/Second.png'
import {Container} from "../../../components/Container";

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
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu items={items}/>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    {itemWorks.map((work) => (
                        <Work
                            img={work.img}
                            title={work.title}
                            text={work.text}
                            link1={work.link1}
                            link2={work.link2} key={work.id}/>))}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`

`

