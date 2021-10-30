import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from "react-router-dom"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import Header from "./header.component"

const render = () => {
  return renderWithTheme(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
}

test("render Header", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("Header renders logo as H3 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h3")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent("A-Bogdol")
})

test("Header renders link to homepage", () => {
  const { container } = render()
  const link = container.querySelector("a")

  expect(link).toHaveTextContent("A-Bogdol")
  expect(link).toHaveAttribute("href", "/")
})
