import React, { FC, useState } from "react"
import Button from "../../atoms/button/button.styled"
import HeaderNav from "../../molecules/header-nav/header-nav.component"
import { StyledMenu } from "./hamburger-menu.styled"

const HamburgerMenu: FC = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const toggleBurgerMenu = () => setBurgerMenuOpen(!burgerMenuOpen)

  return (
    <StyledMenu>
      <HeaderNav />
      <Button onClick={toggleBurgerMenu}>Close</Button>
    </StyledMenu>
  )
}

export default HamburgerMenu
