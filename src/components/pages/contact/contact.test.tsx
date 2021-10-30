import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import ContactPage from "pages/contact"

const render = () => {
  return renderWithTheme(<ContactPage />)
}

test("render ContactPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("ContactPage renders form correctly", () => {
  const { container } = render()
  const form = container.querySelector("form")

  expect(form).toBeInTheDocument()
})
