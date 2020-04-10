import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 200px 1fr;
  align-items: center;
  padding: 0 40px;

  h3 {
    color: #9e2b35;
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
    padding-left: 60px;
  }
`;

const Header = () => (
  <StyledHeader>
    <h3>A-Bogdol</h3>
    <HeaderNav />
  </StyledHeader>
);

export default Header;
