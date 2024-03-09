import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";


const itemsMenu = ["About", "Projects", "Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu itemsMenu={itemsMenu}/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`