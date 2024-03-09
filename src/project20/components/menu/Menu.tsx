import React from 'react';
import styled from "styled-components";

type propsType = {
    itemsMenu: string[]
}
export const Menu = ({itemsMenu}: propsType) => {
    return (
        <StyledMenu>
            <ul>
                {itemsMenu.map((item, index) =>
                    (<li key={index}><a href="#">{item}</a></li>))}
            </ul>
        </StyledMenu>
    );
};
const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
    }
`