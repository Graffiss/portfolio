import { useNightMode } from "hook/useNightMode.hook"
import React, { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ToggleButton from "react-toggle-button"
import { CSSTransition } from "react-transition-group"
import HamburgerButton from "../../atoms/hamburger-button/hamburger-button.component"
import HeaderNav from "../../molecules/header-nav/header-nav.component"
import { StyledHeader } from "./header.styled"

const Header: FC = () => {
  const [nightMode, toggleTheme] = useNightMode()
  const [isNavVisible, setNavVisibility] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1100px)")
    mediaQuery.addListener(handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [])

  const toggleNav = () => {
    setNavVisibility(!isNavVisible)
  }
  return (
    <StyledHeader>
      <HamburgerButton onClick={toggleNav} />
      <Link style={{ color: "inherit", textDecoration: "inherit" }} to="/">
        <h3>A-Bogdol</h3>
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <HeaderNav />
      </CSSTransition>
      <label style={{ display: "none" }} htmlFor="toggle">
        Toggle button for day/night mode
      </label>
      <ToggleButton
        id="toggle"
        inactiveLabel="Day"
        activeLabel="Night"
        colors={{
          active: {
            base: "rgb(79,77,87)",
          },
          inactive: {
            base: "rgb(158,43,53)",
          },
        }}
        inactiveLabelStyle={{ color: "white" }}
        value={nightMode}
        onToggle={toggleTheme}
      />
    </StyledHeader>
  )
}

export default Header