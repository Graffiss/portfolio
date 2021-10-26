import { FC } from "react"
import { useUI } from "context/ui.context"
import Button from "../../atoms/button/button.styled"
import HeaderNav from "../../molecules/header-nav/header-nav.component"
import { StyledMenu } from "./hamburger-menu.styled"

const HamburgerMenu: FC = () => {
  const { closeBurgerMenu } = useUI()

  return (
    <StyledMenu>
      <HeaderNav />
      <Button onClick={closeBurgerMenu}>Close</Button>
    </StyledMenu>
  )
}

export default HamburgerMenu
