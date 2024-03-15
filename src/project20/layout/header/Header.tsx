import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper";


const itemsMenu = ["About", "Projects", "Contacts"]
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu itemsMenu={itemsMenu}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
     
`
