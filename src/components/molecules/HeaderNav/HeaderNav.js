import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  grid-area: header;
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledLinksList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-left: 80px;
`;

const StyledNavItems = styled(NavLink)`
  display: inline-block;
  margin-right: 50px;
  text-decoration: none;
  color: #4f4d57;
  font-weight: 300;
  font-size: 30px;
  padding-left: 10px;

  .active {
    border-bottom: 5px solid #9e2b35;
  }
`;

const HeaderNav = () => (
  <StyledWrapper>
    <StyledLinksList>
      <NavLink exact to="/" activeClassName="active">
        <li>Home</li>
      </NavLink>

      <li>
        <StyledNavItems as={NavLink} to="/projekty" activeClass="active">
          Projekty
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/stack">
          Stack
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/o-mnie">
          O mnie
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/kontakt">
          Kontakt
        </StyledNavItems>
      </li>
    </StyledLinksList>
  </StyledWrapper>
);

export default HeaderNav;
