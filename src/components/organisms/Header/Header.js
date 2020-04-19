import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import AppContext from '../../../context/context';

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 200px 1fr 52px;
  align-items: center;
  padding: 0 80px;

  h3 {
    color: ${({ theme }) => theme.darkRed};
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    grid-template-columns: 50px 150px 1fr 52px;
  }
`;

const Header = () => (
      
      <StyledHeader>
        <HamburgerButton />
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/"><h3>A-Bogdol</h3></Link>
        <HeaderNav />
        <AppContext.Consumer>
          {(context) => 
        <ToggleButton
          inactiveLabel="Dzień"
          activeLabel="Noc"
          colors={{
            active: {
              base: 'rgb(79,77,87)',
            },
            inactive: {
              base: 'rgb(158,43,53)',
            },
          }}
          value={context.nightMode}
          onToggle={context.toggleTheme}
        />}
        </AppContext.Consumer>
      </StyledHeader>
    );

export default Header;
