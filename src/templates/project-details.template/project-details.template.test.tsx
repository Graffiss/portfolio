import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../test-utils/render-with-theme"
import ProjectDetailsTemplate from "./project-details.template"

const props = {
  image: "",
  title: "Project",
  desc: "Description of Project 1",
  stack: [],
  github: "https://github.com",
  demo: "https://abogdol.pl",
}

const render = () => {
  return renderWithTheme(<ProjectDetailsTemplate {...props} />)
}

test("render ProjectDetailsTemplate", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("ProjectDetailsTemplate renders image inside img tag", () => {
  const { container } = render()
  const image = container.querySelector("img")

  expect(image).toBeInTheDocument()
  expect(image).toHaveAttribute("alt", props.title)
  expect(image).toHaveAttribute("src", props.image)
})

test("ProjectDetailsTemplate renders title inside H1 tag", () => {
  const { container } = render()
  const heading = container.querySelector("h1")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent(props.title)
})

test("ProjectDetailsTemplate renders description inside p tag", () => {
  const { container } = render()
  const heading = container.querySelector("p")

  expect(heading).toBeInTheDocument()
  expect(heading).toHaveTextContent(props.desc)
})

test("ProjectDetailsTemplate renders buttons correctly", () => {
  const { queryByText } = render()
  const githubButton = queryByText("Github")
  const demoButton = queryByText("Demo")

  expect(githubButton).toBeInTheDocument()
  expect(demoButton).toBeInTheDocument()
})

test("ProjectDetailsTemplate renders buttons as links", () => {
  const { container } = render()
  const links = container.querySelectorAll("a")

  expect(links[0]).toHaveAttribute("href", props.github)
  expect(links[1]).toHaveAttribute("href", props.demo)
})
