import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import Footer from "./footer.component"

const render = () => {
  return renderWithTheme(<Footer />)
}

test("render Footer", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("Footer buttons are rendered as anchor links", () => {
  const { container } = render()
  expect(container.querySelector("a")).toBeInTheDocument()
})

test("Footer renders all provided links", () => {
  const { container } = render()
  const links = container.querySelectorAll("a")

  expect(links[0]).toHaveAttribute("href", "https://github.com/Graffiss")
  expect(links[1]).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/andrzej-bogdo%C5%82/"
  )
})
