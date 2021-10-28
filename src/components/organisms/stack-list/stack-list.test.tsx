import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import StackList from "./stack-list.component"
import { stack } from "./stack-list.constant"

const render = () => {
  return renderWithTheme(<StackList />)
}

test("render StackList", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("StackList is rendered with buttons", () => {
  const { container } = render()
  expect(container.querySelector("button")).toBeInTheDocument()
})

test("StackList include 10 elements", () => {
  const { container } = render()
  const stackButtons = container.querySelectorAll("button")
  expect(stackButtons).toHaveLength(10)
})

test("StackList renders with correct data-content", () => {
  const { container } = render()
  const stackButtons = container.querySelectorAll("button")

  expect(stackButtons[0]).toHaveAttribute("data-content", stack[0].name)
})
