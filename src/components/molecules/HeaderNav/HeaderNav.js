import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  .active {
    border-bottom: 5px solid #9e2b35;
  }
`;

const StyledLinksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledNavItems = styled(NavLink)`
  margin-right: 50px;
  text-decoration: none;
  color: #4f4d57;
  font-weight: 300;
  font-size: 30px;
  padding-left: 10px;
`;

const HeaderNav = () => (
  <StyledWrapper>
    <StyledLinksList>
      <li>
        <StyledNavItems as={NavLink} exact to="/" activeClassName="active">
          Home
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/projekty" activeClassName="active">
          Projekty
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/stack" activeClassName="active">
          Stack
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/o-mnie" activeClassName="active">
          O mnie
        </StyledNavItems>
      </li>
      <li>
        <StyledNavItems as={NavLink} to="/kontakt" activeClassName="active">
          Kontakt
        </StyledNavItems>
      </li>
    </StyledLinksList>
  </StyledWrapper>
);

export default HeaderNav;
