import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter } from "react-router-dom"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import IntroPage from "pages/intro"

const render = () => {
  return renderWithTheme(
    <MemoryRouter>
      <IntroPage />
    </MemoryRouter>
  )
}

test("render IntroPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("IntroPage renders paragraph with letter 'A'", () => {
  const { container } = render()
  const letter = container.querySelector("p")

  expect(letter).toBeInTheDocument()
  expect(letter).toHaveTextContent("A")
})

test("IntroPage renders title with my name inside H1 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h1")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent("Andrzej")
})

test("IntroPage renders title with my job title inside H3 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h3")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent("React")
})

test("IntroPage button is rendered correctly", () => {
  const { container } = render()
  const button = container.querySelector("button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Projects")
})

test("IntroPage renders button as link", () => {
  const { container } = render()
  const link = container.querySelector("a")

  expect(link).toHaveTextContent("Projects")
  expect(link).toHaveAttribute("href", "/projects")
})
