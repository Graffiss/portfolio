import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import ProjectDetailsPage from "../../../pages/project-details"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { initialState } from "reducers/root.reducer"
import { MemoryRouter } from "react-router-dom"

const mockStore = configureStore()

const activeItemMock = [
  {
    id: 1,
    image: "",
    title: "Project 1",
    desc: "Project 1",
    stack: [],
    github: "link",
    demo: "demo",
  },
]

const render = () => {
  const store = mockStore(initialState)

  return renderWithTheme(
    <Provider store={store}>
      <MemoryRouter>
        <ProjectDetailsPage activeItem={activeItemMock} />
      </MemoryRouter>
    </Provider>
  )
}

test("render ProjectDetailsPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("ProjectDetailsPage button is rendered correctly", () => {
  const { getByTestId } = render()
  const backButton = getByTestId("back-button")

  expect(backButton).toBeInTheDocument()
  expect(backButton).toHaveTextContent("Back")
  expect(backButton).toHaveAttribute("href", "/projects")
})
