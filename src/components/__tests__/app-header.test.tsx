import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router"
import AppHeader from "../app-header"

test("AppHeader rendering", () => {
  expect(
    render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>
    )
  ).toMatchSnapshot()
})
