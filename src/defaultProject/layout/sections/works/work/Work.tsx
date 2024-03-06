import React from 'react';
import styled, {useTheme} from "styled-components";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

export type WorkPropsType = {
    id?: string
    type:'react'|'spa'|'landing'
    title: string
    text: string
    img: string
    link1: string
    link2: string
}
export const Work = (props: WorkPropsType) => {
    const theme = useTheme()
    return (
        <StyledWork theme={theme}>
            <ImageWrapper>
                <Image src={props.img} alt=""/>
                <Button>
                    View Project
                </Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={props.link1}>demo</Link>
                <Link href={props.link2}>code</Link>
            </Description>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: ${props => props.theme.colors.secondaryBg};
    /*width: 330px;
    flex-grow: 1;*/

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

   

    @media ${props => props.theme.media.desktop} {
        /*max-width: 540px;*/
    }
`
const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -40%);
        //animation
        transition: ${props => props.theme.animations.transition};
        &::before {
            height: 100%;
            width: 100%;
            z-index: -1;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .3);
        backdrop-filter: blur(2px);
        opacity: 0;
        //animation
        transition: ${props => props.theme.animations.transition};
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
           
        }
    }
    @media ${props=>props.theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }

`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Text = styled.p`
    margin: 14px 0 10px;
`
const Title = styled.h3`
`
const Description = styled.div`
    padding: 25px 20px;

`