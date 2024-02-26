import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work, WorkPropsType} from "./work/Work";
import imgWork from './../../../assets/images/NetWork.png'
import second from './../../../assets/images/Second.png'
import {Container} from "../../../components/Container";

export type StatusType = 'all' | 'landing' | 'react' | 'spa';
export const Works = () => {
    type ItemsType = {
        id: string
        href: string
        text: string
        status: StatusType
    }[]
    const items: ItemsType = [
        {id: '1', href: '#', text: 'All', status: 'all'},
        {id: '2', href: '#', text: 'landing page', status: 'landing'},
        {id: '3', href: '#', text: 'React', status: 'react'},
        {id: '4', href: '#', text: 'spa', status: 'spa'},
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
            id: '1',
            type: "spa"
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
            id: '2',
            type: "react"
        }
    ]
    const [currentFilterStatus, setCurrentFilterStatus] = useState<StatusType>('all')
    let filteredWorks = itemWorks;
    if (currentFilterStatus === 'landing') {
        filteredWorks = itemWorks.filter(work => work.type === 'landing')
    }
    if (currentFilterStatus === 'react') {
        filteredWorks = itemWorks.filter(work => work.type === 'react')
    }
    if (currentFilterStatus === 'spa') {
        filteredWorks = itemWorks.filter(work => work.type === 'spa')
    }
    if (currentFilterStatus === 'all') {
        filteredWorks = itemWorks
    }
    const changeFilter = (status: StatusType) => {
        setCurrentFilterStatus(status)
    }
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    currentFilterStatus={currentFilterStatus}
                    items={items}
                    changeFilter={changeFilter}
                />
                <FlexWrapper justify={'space-between'} align={'flex-start'} wrap={"wrap"}>
                    {filteredWorks.map((work) => (
                        <Work
                            type={work.type}
                            img={work.img}
                            title={work.title}
                            text={work.text}
                            link1={work.link1}
                            link2={work.link2}
                            key={work.id}/>))}
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};
const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

