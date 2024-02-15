import React from 'react';
import styled, {useTheme} from "styled-components";

export type PropsMenu = {
    items: {
        id: string
        href: string
        text: string
    }[]
}

export const HeaderMenu = ({items}: PropsMenu) => {
    const theme = useTheme()
    return (
        <StyledHeaderMenu>
            <ul>
                {items.map(item => <ListItem key={item.id}><Link href={item.href}>
                    {item.text}
                    <Mask theme={theme}>
                        <span>
                        {item.text}
                        </span>
                    </Mask>
                    <Mask theme={theme}>
                        <span>
                        {item.text}
                        </span>
                    </Mask>
                </Link>
                </ListItem>)}
            </ul>
        </StyledHeaderMenu>
    );
};
const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

    @media ${props => props.theme.media.tablet} {
        display: none;
    }
`


const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    /* line-height: 55px;*/
    letter-spacing: 0;
    text-align: center;
    color: transparent;

`
const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    /*outline: 1px solid red;*/
    color: ${props => props.theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`
const ListItem = styled.li`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${props => props.theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${props => props.theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`