import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import ProjectCard from "./project-card.component"

const props = {
  id: 1,
  title: "Project title",
  image: "some image",
}

const render = () => {
  return renderWithTheme(<ProjectCard {...props} />)
}

test("render ProjectCard", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("ProjectCard button is rendered correctly", () => {
  const { container } = render()
  const button = container.querySelector("button")
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent("Check it out")
})

test("ProjectCard renders title inside H1 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h1")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent(props.title)
})

test("ProjectCard renders image inside img tag", () => {
  const { container } = render()
  const image = container.querySelector("img")

  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("src", props.image)
  expect(image).toHaveAttribute("alt", props.title)
})
