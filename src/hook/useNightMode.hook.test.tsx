import "@testing-library/jest-dom/extend-expect"
// import { fireEvent, waitFor } from "@testing-library/react"
import { renderWithTheme } from "../test-utils/render-with-theme"
import { useNightMode } from "./useNightMode.hook"

const Example = () => {
  const [nightMode, toggleTheme] = useNightMode()

  return (
    <div>
      <div>
        {nightMode ? <p>Night mode is ON!</p> : <p>Night mode is OFF</p>}
      </div>
      <button onClick={() => toggleTheme}>Toggle</button>
    </div>
  )
}

const render = () => {
  return renderWithTheme(<Example />)
}

test("render Example", () => {
  const { container } = render()
  expect(container).toBeInTheDocument()
})

test("Night mode is OFF as default", () => {
  const { getByText } = render()
  expect(getByText(/off/i)).toBeInTheDocument()
})

// test("Night mode is ON after toggling button", () => {
//   const { getByText } = render()
//   expect(getByText(/off/i)).toBeInTheDocument()

//   waitFor(() => {
//     fireEvent.click(getByText("Toggle"))
//   })
//   expect(getByText(/on/i)).toBeInTheDocument()
// })
