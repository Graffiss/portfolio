import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import AboutPage from "pages/about"

const render = () => {
  return renderWithTheme(<AboutPage />)
}

test("render AboutPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("AboutPage renders title with my name inside H2 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h2")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent("Andrzej")
})

test("AboutPage renders image inside img tag", () => {
  const { container } = render()
  const image = container.querySelector("img")

  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("alt", "Andrzej Bogdoł")
})

test("AboutPage renders paragraph with my carrer story", () => {
  const { container } = render()
  const heading = container.querySelector("p")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent("Web Analyst")
})
