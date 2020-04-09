import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 250px 1fr;
  align-items: center;
  padding: 0 40px;

  h3 {
    color: #9e2b35;
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
  }
`;

const Header = () => (
  <StyledHeader>
    <h3>A-Bogdol</h3>
    <HeaderNav />
  </StyledHeader>
);

export default Header;
