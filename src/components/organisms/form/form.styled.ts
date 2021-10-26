import { Form } from "formik"
import styled from "styled-components"

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledInput = styled.input`
  background-color: rgba(219, 51, 64, 0.8);
  height: 55px;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
  font-family: "Montserrat";
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
`

export const StyledTextarea = styled.textarea`
  background-color: rgba(219, 51, 64, 0.8);
  height: 30vh;
  width: 510px;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;
  font-size: 18px;
  font-family: "Montserrat";
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
`
