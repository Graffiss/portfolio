import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledWrapper = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: flex-end;
  .active {
    border-bottom: 5px solid ${({ theme }) => theme.darkRed};
  }

  @media (max-width: 768px) {
  }
`
export const StyledLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 1100px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-end;
  }
`
export const StyledNavItems = styled(NavLink)`
  margin-right: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-size: 30px;
  padding-left: 10px;

  @media (max-width: 1256px) {
    font-size: 24px;
  }

  @media (max-width: 1150px) {
    display: initial;
  }

  @media (max-width: 1100px) {
    margin: 0;
    font-size: 36px;
  }
`
