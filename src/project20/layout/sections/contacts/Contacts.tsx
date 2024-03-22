import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container/Container";

export const Contacts = () => {
    type fieldType = {
        name: string
        id: string
        height?: string
        textarea?: boolean
    }
    const fields: fieldType[] = [
        {name: "name", id: "0"},
        {name: "email", id: "1"},
        {name: "message", id: "2", height: "160px", textarea: true},
    ]
    return (
        <StyledContact>
            <Container>
                <SectionTitle title={"Contact Me"}/>
                <StyledForm>
                    {fields.map((field) => (
                        <FieldComponent
                            textarea={field.textarea}
                            key={field.id}
                            name={field.name}
                            height={field.height || "40px"}/>))}
                    <Button type={"submit"}>Send</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};
const StyledForm = styled.form`
    margin: 0 auto;

    max-width: 400px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 54px;
    border: 1px red solid;
    ${Button}{
    align-self: flex-end;
}
`
const StyledContact = styled.section`
    /* min-height: 50vh;*/
    //background-color: #f1b088;

`


type propsTypeField = {
    name: string
    height?: string
    textarea?: boolean
}
export const FieldComponent = ({name, height, textarea}: propsTypeField) => {
    return (
        <StyledField>
            <label htmlFor={name}>{name}</label>
            {textarea ? <FieldTextArea id={name} /> : <Field id={name} height={height}/>}
        </StyledField>
    )
}

const StyledField = styled.div`
    position: relative;
    width: 100%;

    & label {
        color: ${props => props.theme.colors.font};
        font-size: 16px;
        font-weight: 600;

        position: absolute;
        left: 0;
        top: -28px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid rgb(232, 236, 244);
    border-radius: 8px;
    height: ${props => props.height};

    background-color: rgb(255, 255, 255);
    font-family: "Inter", sans-serif;
    color: rgb(130, 130, 130);
    font-size: 18px;
    font-weight: 400;
    &:focus-visible{
        outline: 1px solid;
    }
`
const FieldTextArea = styled.textarea`
    width: 100% !important;
    border: 1px solid rgb(232, 236, 244);
    border-radius: 8px;

    background-color: rgb(255, 255, 255);
    font-family: "Inter", sans-serif;
    color: rgb(130, 130, 130);
    font-size: 18px;
    font-weight: 400;
    height: 160px;
    
    resize: none;
    &:focus-visible{
        outline: 1px solid;
    }
`