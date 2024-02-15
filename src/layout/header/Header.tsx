import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {
    const items = [
        {id: '1', href: '#', text: 'Home'},
        {id: '2', href: '#', text: 'Skills'},
        {id: '3', href: '#', text: 'Works'},
        {id: '4', href: '#', text: 'Testimony'},
        {id: '5', href: '#', text: 'Contacts'},]

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu items={items}/>
                    <MobileMenu items={items}/>
                </FlexWrapper>

            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    background-color: rgba(31, 31, 32, .9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`