import React from 'react';
import styled from "styled-components";

export type WorkPropsType = {
    id?:string
    title:string
    text:string
    img:string
    link1:string
    link2:string
}
export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.img} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={props.link1}>demo</Link>
            <Link href={props.link2}>code</Link>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: #feffee;
    max-width: 540px;
    width: 40%;
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const Link = styled.a`
`
const Text = styled.p`
`
const Title = styled.h3`
`