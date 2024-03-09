import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContact>
            <SectionTitle title={"Contact Me"}/>
            <StyledForm>
                <Field/>
                <Field/>
                <Field as={"textarea"}/>
                <Button type={"submit"}>Send</Button>
            </StyledForm>
        </StyledContact>
    );
};
const StyledContact = styled.section`
   /* min-height: 50vh;*/
    background-color: #f1b088;
`
const StyledForm = styled.form`
    margin: 0 auto;
    
    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const Field = styled.input`

`
 