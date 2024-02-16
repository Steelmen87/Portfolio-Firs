import React from 'react';
import styled, {useTheme} from "styled-components";
import {Link} from "../../../../components/Link";

export type PropsMenu = {
    items: {
        id: string
        href: string
        text: string
    }[]
}

export const TabMenu = ({items}: PropsMenu) => {
    const theme = useTheme()
    return (
        <StyledTabMenu>
            <ul>
                {items.map(item => <ListItem key={item.id} theme={theme}><Link href={item.href}>{item.text}</Link></ListItem>)}
            </ul>
        </StyledTabMenu>
    );
};
const StyledTabMenu = styled.nav`
    ul {
        display: flex;
        /*gap: 20px;*/
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        border: 1px solid orangered;
        margin: 0 auto 40px;
    }
`
const ListItem = styled.li`
   
`
