import React from 'react';
import styled, {useTheme} from "styled-components";
import {Link} from "../../../../components/Link";
import {StatusType} from "../Works";

export type PropsMenu = {
    items: {
        id: string
        href: string
        text: string
        status: StatusType
    }[]
    currentFilterStatus: StatusType
    changeFilter: (status: StatusType) => void
}

export const TabMenu = ({items, changeFilter, currentFilterStatus}: PropsMenu) => {
    const theme = useTheme()
    return (
        <StyledTabMenu>
            <ul>
                {items.map(item => <ListItem key={item.id} theme={theme}>
                    <Link active={currentFilterStatus === item.status} as={"button"}
                          onClick={() => changeFilter(item.status)}>{item.text}</Link>
                </ListItem>)}
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
