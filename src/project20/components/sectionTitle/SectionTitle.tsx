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
`