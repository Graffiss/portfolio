import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 100px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled.input`
  background-color: rgba(219, 51, 64, 0.8);
  height: 55px;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 300;
  padding-left: 20px;

  ::placeholder {
    color: white;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: rgba(219, 51, 64, 0.8);
  height: 30vh;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 300;
  padding-left: 20px;
  padding-top: 20px;

  ::placeholder {
    color: white;
  }
`;

const ContactView = () => (
  <StyledWrapper>
    <Formik
      initialValues={{ email: '', title: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Pole wymagane';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Nieprawidłowy adres email';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <StyledInput as={Field} type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <StyledInput as={Field} type="text" name="title" placeholder="Tytuł wiadomości" />
          <ErrorMessage name="text" component="div" />
          <StyledTextarea as="textarea" name="message" placeholder="Wpisz treść wiadomości..." />
          <ErrorMessage name="content" component="div" />
          <Button type="submit" disabled={isSubmitting}>
            wyślij
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default ContactView;
