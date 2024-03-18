import React from 'react';
import styled from "styled-components";
type propsSectionTitle = {
    title:string
}
export const SectionTitle = ({title}:propsSectionTitle) => {
    return (
        <StyledSectionTitle>
            {title}
        </StyledSectionTitle>
    );
};
const StyledSectionTitle = styled.h2`
    text-align: center;
    height: 76px;

    color: ${props => props.theme.colors.font};
    font-family: "Inter", sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    margin-bottom: 90px;
    position: relative;
    border: 1px solid red;

    &::before {
        content: "";
        display: inline-block;
        width: 100px;
        height: 4px;
        border-radius: 2px;
        background-color: ${props => props.theme.colors.accent};

        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
`