import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";


const itemsMenu = ["About", "Projects", "Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu itemsMenu={itemsMenu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;
    
    padding: 20px 0;
    
`
