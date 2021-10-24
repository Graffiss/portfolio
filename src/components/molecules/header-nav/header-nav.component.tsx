import React from "react"
import { NavLink } from "react-router-dom"
import {
  StyledWrapper,
  StyledLinksList,
  StyledNavItems,
} from "./header-nav.styled"

const HeaderNav = () => (
  <StyledWrapper>
    <StyledLinksList>
      <li>
        <StyledNavItems as={NavLink} exact to="/" activeClassName="active">
          Home
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/projects" activeClassName="active">
          Projects
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/stack" activeClassName="active">
          Stack
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/about" activeClassName="active">
          About
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/contact" activeClassName="active">
          Contact
        </StyledNavItems>
      </li>
    </StyledLinksList>
  </StyledWrapper>
)

export default HeaderNav
