import React, { FC } from "react"
import { ThemeProvider } from "styled-components"
import HamburgerMenu from "../../components/organisms/hamburger-menu/hamburger-menu.component"
import { useUI } from "../../context/ui.context"
import { useNightMode } from "../../hook/useNightMode.hook"
import GlobalStyle from "../../theme/global-style"
import { darkTheme, lightTheme } from "../../theme/theme"
import StyledGridTemplate from "../styled-grid.template/styled-grid.template"
import { StyledMainTemplate } from "./main.template.styled"

const MainTemplate: FC = ({ children }) => {
  const [nightMode] = useNightMode()
  const { openBurgerMenu } = useUI()
  const themeMode = nightMode === false ? lightTheme : darkTheme

  return (
    <StyledMainTemplate>
      <ThemeProvider theme={themeMode}>
        {children}
        {openBurgerMenu && <HamburgerMenu />}
        <GlobalStyle />
        <StyledGridTemplate />
      </ThemeProvider>
    </StyledMainTemplate>
  )
}

export default MainTemplate
