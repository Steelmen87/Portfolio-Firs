import React from 'react';
import styled, {useTheme} from "styled-components";
import {Link} from "react-scroll";
import {Menu} from "../menu/Menu";

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
            <Menu items={items}/>
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
