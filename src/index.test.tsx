import "@testing-library/jest-dom/extend-expect"
import ReactDOM from "react-dom"
import Root from "pages/root"

test("renders Root without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Root />, div)
})
