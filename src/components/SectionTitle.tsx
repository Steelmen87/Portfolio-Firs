import styled from "styled-components";

export const SectionTitle = styled.h2`
    position: relative;

    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 5px;

    text-align: center;
    margin-bottom: 90px;

    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${props => props.theme.colors.accent};

        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translateX(-50%);

    }
`