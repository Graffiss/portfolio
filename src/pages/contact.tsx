import Form from "components/organisms/form/form.component"
import { StyledWrapper } from "components/pages/contact/contact.styled"
import { handleSubmit } from "helpers/send-form"

const ContactPage = () => (
  <StyledWrapper>
    <Form submit={handleSubmit} />
  </StyledWrapper>
)

export default ContactPage
