import "@testing-library/jest-dom/extend-expect"
import { fireEvent, waitFor } from "@testing-library/dom"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import Form from "./form.component"

const onSubmit = jest.fn()

const render = () => {
  return renderWithTheme(<Form submit={onSubmit} />)
}

test("render Form", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("renders email input field", () => {
  const { getByText, getByTestId } = render()
  const emailLabel = getByText("Email address")
  const emailInput = getByTestId("email")

  expect(emailLabel).toBeInTheDocument()
  expect(emailInput).toHaveAttribute("type", "email")
  expect(emailInput).toHaveAttribute("name", "email")
})

test("renders title input field", () => {
  const { getByText, getByTestId } = render()
  const titleLabel = getByText("Message title")
  const titleInput = getByTestId("title")

  expect(titleLabel).toBeInTheDocument()
  expect(titleInput).toHaveAttribute("type", "text")
  expect(titleInput).toHaveAttribute("name", "title")
})

test("renders message input field", () => {
  const { getByText, getByTestId } = render()
  const messageLabel = getByText("Your message")
  const messageInput = getByTestId("message")

  expect(messageLabel).toBeInTheDocument()
  expect(messageInput).toHaveAttribute("name", "message")
})

test("Form button is rendered correctly", () => {
  const { container } = render()
  const button = container.querySelector("button")

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Send")
  expect(button).toHaveAttribute("type", "submit")
})

test("doesn't send data on submit if inputs are not fulfilled", async () => {
  const { getByTestId } = render()
  const submitButton = getByTestId("submit-button")

  fireEvent.click(submitButton)
  await waitFor(() => expect(onSubmit).not.toBeCalled())
})

// test("form is successfully submited after fulfilling fields", async () => {
//   const { getByTestId } = render()

//   const submitButton = getByTestId("submit-button")
//   const emailInput = getByTestId("email")
//   const titleInput = getByTestId("title")
//   const messageInput = getByTestId("message")

//   await waitFor(() => {
//     fireEvent.change(emailInput, {
//       target: {
//         value: "andrzej@abogdol.pl",
//       },
//     })
//   })

//   await waitFor(() => {
//     fireEvent.change(titleInput, {
//       target: {
//         value: "Oferta pracy",
//       },
//     })
//   })

//   await waitFor(() => {
//     fireEvent.change(messageInput, {
//       target: {
//         value: "Dołącz do nas!",
//       },
//     })
//   })

//   fireEvent.click(submitButton)

//   await waitFor(() => expect(onSubmit).toBeCalled())
// })
