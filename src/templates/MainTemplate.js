import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { useNightMode } from '../hook/useNightMode';
import AppContext from '../context/context';
import GlobalStyle from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/theme';
import StyledGridTemplate from './StyledGridTemplate';
import HamburgerMenu from '../components/organisms/HamburgerMenu/HamburgerMenu';

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-gap: 10px;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    grid-template-rows: 70px 1fr 70px;
    grid-gap: 0;
  }
`;

const MainTemplate = ({ children }) => {
  const [nightMode, toggleTheme] = useNightMode();
  const themeMode = nightMode === false ? lightTheme : darkTheme;
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => setBurgerMenuOpen(!burgerMenuOpen);

  const contextElements = {
    nightMode,
    toggleTheme,
    toggleBurgerMenu,
  };

  return (
    <AppContext.Provider value={contextElements}>
      <StyledMainTemplate>
        <ThemeProvider theme={themeMode}>
          {children}
          {burgerMenuOpen && <HamburgerMenu />}
          <GlobalStyle />
          <StyledGridTemplate />
        </ThemeProvider>
      </StyledMainTemplate>
    </AppContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
