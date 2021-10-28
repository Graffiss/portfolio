import { StyledNavItems } from "components/molecules/header-nav/header-nav.styled"
import { navigation } from "constants/navigation"
import { useUI } from "context/ui.context"
import { FC, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { LinksList, StyledMenu } from "./hamburger-menu.styled"

const HamburgerMenu: FC = () => {
  const { closeBurgerMenu, displayBurgerMenu } = useUI()
  const [openedMenu, setOpenedMenu] = useState(false)

  useEffect(() => {
    displayBurgerMenu ? setOpenedMenu(true) : setOpenedMenu(false)
  }, [displayBurgerMenu])

  return (
    <StyledMenu opened={openedMenu}>
      <LinksList>
        {navigation.map(({ path, displayName }, index) => (
          <li key={index}>
            <StyledNavItems
              as={NavLink}
              to={path}
              activeClassName="active"
              exact={path === "/"}
              onClick={closeBurgerMenu}
            >
              {displayName}
            </StyledNavItems>
          </li>
        ))}
      </LinksList>
    </StyledMenu>
  )
}

export default HamburgerMenu
