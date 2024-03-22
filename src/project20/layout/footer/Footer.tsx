import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper/FlexWrapper";
import footerImg from '../../assets/images/footer/Vector.png'

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Konstantin</Name>
                <SocialList>
                    {/*<SocialItem>
                        <SocialLink>
                            <Icon iconId={"instagram"} height={"21"} width={"21"} viewBox={"0 0 21 21"}/>
                        </SocialLink>
                    </SocialItem>*/}
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"instagram"}/>
                            <Icon iconId={"instagram"}/>
                            <Icon iconId={"instagram"}/>
                            <Icon iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>Konstantin Petrov 2024</Copyright>
            </FlexWrapper>
            <StyledBackgroundImage src={footerImg}/>
        </StyledFooter>
    );
};
const StyledFooter = styled.footer`
    border: 1px solid;
    height: 344px;
    position: relative;

    ${FlexWrapper} {
        padding: 0;
        
        width: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    //todo
    /*Медиа запрос height: 344px; уменьшить для приближения  Konstantin Petrov 2024 к StyledBackgroundImage*/
`
const StyledBackgroundImage = styled.img`
    position: absolute;
    max-height: 344px;
    bottom: 0;
    width: 100%;
`
const Name = styled.span`

`
const SocialList = styled.ul`
    display: flex;
    gap: 30px;
`
const SocialItem = styled.li``
const SocialLink = styled.a``
const Copyright = styled.small``