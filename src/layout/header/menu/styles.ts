import styled from "styled-components";
import {Link} from "react-scroll";

export const ListItem = styled.li`
    position: relative;

`
export const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    /*outline: 1px solid red;*/
    color: ${props => props.theme.colors.accent};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

export const NavLink = styled(Link)`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    /* line-height: 55px;*/
    letter-spacing: 0;
    text-align: center;
    color: transparent;

    &::before {
        content: "";
        display: inline-block;
        height: 3px;
        background-color: ${props => props.theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover,
    &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${props => props.theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }

`
