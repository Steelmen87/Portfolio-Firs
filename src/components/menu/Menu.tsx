import React from 'react';
import styled from "styled-components";

export type PropsMenu = {
    items: {
        id: string
        href: string
        text: string
    }[]
}

export const Menu = ({items}: PropsMenu) => {
    return (
        <StyledMenu>
            <ul>
                {items.map(item => <li key={item.id}><a href={item.href}>{item.text}</a></li>)}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }
`

