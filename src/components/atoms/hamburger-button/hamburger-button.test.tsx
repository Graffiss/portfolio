import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import HamburgerButton from "./hamburger-button.component"

const render = () => {
  return renderWithTheme(<HamburgerButton />)
}

test("render HamburgerButton", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("HamburgerButton have three span tags", () => {
  const { container } = render()
  const spans = container.querySelectorAll("span")
  expect(spans).toHaveLength(3)
})
