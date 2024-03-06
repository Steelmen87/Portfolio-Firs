import React, {useState} from 'react';
import styled, {css, useTheme} from "styled-components";
import {Menu} from "../menu/Menu";

export type ItemType = {
    id: string
    href: string
    text: string
}
export type PropsMenu = {
    items: ItemType[]
}

export const MobileMenu = ({items}: PropsMenu) => {
    const [active, setActive] = useState<boolean>(false)
    const theme = useTheme()

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={active} onClick={() => setActive(!active)}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={active} onClick={() => setActive(false)}>
                <Menu items={items}/>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);

    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%); //animation

    transition: .7s ease-in-out;


    ul {
        display: flex;
        gap: 5px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 1s ease-in-out;

    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 40px;
        }
    `}

`
const StyledMobileMenu = styled.nav`
    display: none;

    @media ${props => props.theme.media.tablet} {
        display: block;
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${props => props.theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `};

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${props => props.theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `};
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${props => props.theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `};
        }

    }

`
