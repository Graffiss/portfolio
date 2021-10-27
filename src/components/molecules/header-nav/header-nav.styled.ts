import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledWrapper = styled.nav`
  grid-area: nav;
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: flex-end;

  .active:after {
    display: block;
    content: "";
    border-bottom: solid 5px ${({ theme }) => theme.darkRed};
    transform: scaleX(1);
    transition: transform 250ms ease-in-out;
  }

  @media (max-width: 900px) {
    display: none;
  }
`
export const StyledLinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`
export const StyledNavItems = styled(NavLink)`
  margin-right: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  font-size: 30px;
  line-height: 30px;
  display: inline-block;
  position: relative;

  :after {
    display: block;
    content: "";
    border-bottom: solid 5px ${({ theme }) => theme.darkRed};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  :hover:after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media (max-width: 1256px) {
    font-size: 24px;
  }

  @media (max-width: 1150px) {
    margin-right: 20px;
    font-size: 26px;
  }
`
