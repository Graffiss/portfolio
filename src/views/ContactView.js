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

  label {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
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

  @media (max-width: 768px) {
    width: 340px;
    height: 50px;
    font-size: 16px;
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
  @media (max-width: 768px) {
    width: 340px;
    font-size: 16px;
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
};

const ContactView = () => (
  <StyledWrapper>
    <Formik
      initialValues={{ 'bot-field': '', 'form-name': 'contact', email: '', title: '', message: '' }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Pole wymagane';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Nieprawidłowy adres email';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          .then(() => console.log('Form has been sent'))
          .catch((error) => console.log(error));
        resetForm();
      }}
    >
      {({ values, handleBlur, handleSubmit, handleChange, isSubmitting }) => (
        <StyledForm onSubmit={handleSubmit}>
          <Field type="hidden" name="bot-field" />
          <Field type="hidden" name="form-name" />
          <label htmlFor="email">Email address</label>
          <StyledInput
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
          />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="title">Message title</label>
          <StyledInput
            id="title"
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="title"
            placeholder="Message title"
            value={values.title}
          />
          <ErrorMessage name="text" component="div" />
          <label htmlFor="message">Your message</label>
          <StyledTextarea
            id="message"
            onChange={handleChange}
            onBlur={handleBlur}
            type="textarea"
            name="message"
            placeholder="Type your message here..."
            value={values.message}
          />
          <ErrorMessage name="message" component="div" />
          <Button type="submit" disabled={isSubmitting}>
            Send
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

export default ContactView;
