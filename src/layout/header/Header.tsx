import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu, PropsMenu} from "../../components/menu/Menu";

export const Header = () => {
    const items = [
        {id: '1', href: '#', text: 'Home'},
        {id: '2', href: '#', text: 'Skills'},
        {id: '3', href: '#', text: 'Works'},
        {id: '4', href: '#', text: 'Testimony'},
        {id: '5', href: '#', text: 'Contacts'},]

    return (
        <StyledHeader>
            <Logo/>
            <Menu items={items}/>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    background-color: greenyellow;
    display: flex;
    justify-content: space-between;
`