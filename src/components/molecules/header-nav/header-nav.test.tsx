import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from "react-router-dom"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import HeaderNav from "./header-nav.component"

const render = () => {
  return renderWithTheme(
    <MemoryRouter>
      <HeaderNav />
    </MemoryRouter>
  )
}

test("render HeaderNav", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("HeaderNav links are rendered as unordered list", () => {
  const { container } = render()
  expect(container.querySelector("ul")).toBeInTheDocument()
})

test("HeaderNav renders all provided links", () => {
  const { container } = render()
  const links = container.querySelectorAll("li a")

  expect(links[0]).toHaveTextContent("Home")
  expect(links[0]).toHaveAttribute("href", "/")

  expect(links[1]).toHaveTextContent("Projects")
  expect(links[1]).toHaveAttribute("href", "/projects")
})
