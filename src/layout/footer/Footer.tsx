import React from 'react';
import styled, {useTheme} from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Common";


const iconSocial = ['instagram', 'linkedIn', 'telegram', 'vk']
export const Footer = () => {
    const theme = useTheme()
    return (
        <StyledFooter theme={theme}>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Konstantin</Name>

                <SocialList>
                    {iconSocial.map((icon, index) => (<SocialItem key={index}>
                        <SocialLink>
                            <Icon
                                height={"21"}
                                width={"21"}
                                viewBox={"0 0 21 21"}
                                iconId={icon}/>
                        </SocialLink>
                    </SocialItem>))}
                </SocialList>
                <Copyright>
                    © 2024 Konstantin Petrov, All Rights Reserved.
                </Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})} /*font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;*/
    letter-spacing: 3px;

`
const SocialList = styled.ul`
    display: flex;

    gap: 20px;
    margin: 30px 0;

`
const SocialLink = styled.a`
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;

    //animation
    transition: ${props => props.theme.animations.transition};
    
    color: ${props => props.theme.colors.accent};

    &:hover {
        color: ${props => props.theme.colors.primaryBg};
        transform: translateY(-4px);

    }
`

const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    opacity: 0.5;
`

const SocialItem = styled.li`

`