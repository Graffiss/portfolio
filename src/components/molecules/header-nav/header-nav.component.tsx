import { NavLink } from "react-router-dom"
import {
  StyledWrapper,
  StyledLinksList,
  StyledNavItems,
} from "./header-nav.styled"
import { navigation } from "constants/navigation"

const HeaderNav = () => (
  <StyledWrapper>
    <StyledLinksList>
      {navigation.map(({ path, displayName }, index) => (
        <li key={index}>
          <StyledNavItems
            as={NavLink}
            to={path}
            activeClassName="active"
            exact={path === "/"}
          >
            {displayName}
          </StyledNavItems>
        </li>
      ))}
    </StyledLinksList>
  </StyledWrapper>
)

export default HeaderNav
