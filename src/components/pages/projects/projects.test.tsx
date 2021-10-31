import "@testing-library/jest-dom/extend-expect"
import { renderWithTheme } from "../../../test-utils/render-with-theme"
import ProjectsPage from "pages/projects"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { initialState } from "reducers/root.reducer"
import { MemoryRouter } from "react-router-dom"

const mockStore = configureStore()

const render = () => {
  const store = mockStore(initialState)

  return renderWithTheme(
    <Provider store={store}>
      <MemoryRouter>
        <ProjectsPage />
      </MemoryRouter>
    </Provider>
  )
}

test("render ProjectsPage", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("ProjectsPage renders paragraph with other projects", () => {
  const { container } = render()
  const link = container.querySelector("p")

  expect(link).toHaveTextContent("Other projects:")
})

test("ProjectsPage renders link to Github", () => {
  const { container } = render()
  const link = container.querySelector("a")

  expect(link).toHaveTextContent("Github")
  expect(link).toHaveAttribute("href", "https://github.com/Graffiss")
})
