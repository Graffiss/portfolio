import { ErrorMessage, Field, Formik } from "formik"
import Button from "components/atoms/button/button.styled"
import { StyledForm, StyledInput, StyledTextarea } from "./form.styled"

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}

const initialValues = {
  "bot-field": "",
  "form-name": "contact",
  email: "",
  title: "",
  message: "",
}

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {
          email: "",
        }
        if (!values.email) {
          errors.email = "Pole wymagane"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Nieprawidłowy adres email"
        }
        return errors
      }}
      onSubmit={(values, { resetForm }) => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ ...values }),
        })
          .then(() => console.log("Form has been sent"))
          .catch((error) => console.log(error))
        resetForm()
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
  )
}

export default Form
