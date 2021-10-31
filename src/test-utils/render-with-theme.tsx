import {
  Queries,
  render,
  RenderOptions,
  RenderResult,
} from "@testing-library/react"
import React from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "../theme/theme"

// @ts-ignore
export function renderWithTheme(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): RenderResult
// @ts-ignore
export function renderWithTheme<Q extends Queries>(
  ui: React.ReactElement,
  options: RenderOptions<Q>
): RenderResult<Q> {
  // @ts-ignore
  return render<Q>(
    <ThemeProvider theme={lightTheme}>{ui}</ThemeProvider>,
    options
  )
}
