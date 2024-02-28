import styled, {css} from "styled-components";

export const Link = styled.a<{active?:boolean}>`
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 10px 0;
        position: relative;
        z-index: 0;

        &:hover {
                &::before {
                        height: 10px;
                }
        }

        &::before {
                content: "";
                display: inline-block;
                position: absolute;
                bottom: 5px;
                left: 0;
                right: 0;
                background-color: ${props => props.theme.colors.accent};
                z-index: -1;
                height: 0;
                transition: ${props => props.theme.animations.transition};

                ${props => props.active && css<{ active?: boolean }>`
                        height: 10px;
                `}
        }
`