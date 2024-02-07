import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Konstantin</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    //TODO add component SocialItem and - to map
                </SocialList>
                <Copyright>
                    © 2023 Konstantin Petrov, All Rights Reserved.
                </Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: #fddea4;
    min-height: 20vh;
`
const Name = styled.span``
const SocialList = styled.ul`
    display: flex;
    gap: 30px;

`
const SocialLink = styled.a``

const Copyright = styled.small``

const SocialItem = styled.li`

`