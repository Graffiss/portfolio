import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import StackPage from "pages/stack"

const render = () => {
  return renderWithTheme(<StackPage />)
}

test("render StackPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})
