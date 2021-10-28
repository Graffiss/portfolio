import { FC } from "react"
import { ThemeProvider } from "styled-components"
import HamburgerMenu from "../components/molecules/hamburger-menu/hamburger-menu.component"
import GlobalStyle from "../theme/global-style"
import { useUI } from "../context/ui.context"
import { darkTheme, lightTheme } from "../theme/theme"
import StyledGridTemplate from "../templates/styled-grid.template/styled-grid.template"
import { MainLayout } from "./layout.styled"

const MainTemplate: FC = ({ children }) => {
  const { displayBurgerMenu, nightMode } = useUI()
  const themeMode = nightMode === false ? lightTheme : darkTheme

  return (
    <MainLayout>
      <ThemeProvider theme={themeMode}>
        {children}
        {displayBurgerMenu && <HamburgerMenu />}
        <GlobalStyle />
        <StyledGridTemplate />
      </ThemeProvider>
    </MainLayout>
  )
}

export default MainTemplate
