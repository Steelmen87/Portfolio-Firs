import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
type propsType = {
    iconId:string
}
export const Skill = ({iconId}:propsType) => {
    return (
        <StyledSkill>
            <Icon iconId={iconId} width={"119"} height={"119"} viewBox={"0 0 119 119"}/>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border: 1px solid red;

   
`