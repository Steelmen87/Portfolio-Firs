import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
type propsType = {
    iconId:string
}
export const Skill = ({iconId}:propsType) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId} width={"114"} height={"101"} viewBox={"0 0 114 101"}/>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16.6%;
    background-color: #fff;
    margin: 10px;
`