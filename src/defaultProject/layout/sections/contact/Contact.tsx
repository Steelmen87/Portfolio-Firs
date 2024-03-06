import React, {ElementRef, useRef} from 'react';
import styled, {useTheme} from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const theme = useTheme()
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) {
            return
        }
        emailjs
            .sendForm('service_k6x0k3j', 'template_z1oaq2p', form.current, {
                publicKey: 'duVaWpFkMJxoVJZ96',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <StyledContacts id={"contacts"}>
            <Container theme={theme}>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <Field required placeholder={"name"} name={"user_name"}/>
                    <Field required placeholder={"email"} name={"email"}/>
                    <Field required placeholder={"subject"} name={"subject"}/>
                    <Field required placeholder={"message"} as={"textarea"} name={"message"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};
const StyledContacts = styled.section`
    margin-top: -24px;
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    margin: 0 auto;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    background-color: ${props => props.theme.colors.secondaryBg};
    border: 1px solid ${props => props.theme.colors.borderColor};
    padding: 7px 15px;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;

    color: ${props => props.theme.colors.font};

    &::placeholder {
        color: ${props => props.theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${props => props.theme.colors.borderColor};
    }
`

