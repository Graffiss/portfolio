import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import AppContext from '../context/context';
import GlobalStyle from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/theme';
import StyledGridTemplate from './StyledGridTemplate';

const StyledMainTemplate = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 100px;
  grid-gap: 10px;
  height: 100vh;
  position: relative;
`;

const MainTemplate = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const toggleTheme = () => {
    if (nightMode === false) {
      setNightMode(true);
    } else {
      setNightMode(false);
    }
  };

  const contextElements = {
    nightMode,
    toggleTheme
  }

  return (
    <AppContext.Provider value={contextElements}>
    <StyledMainTemplate>
      <ThemeProvider theme={nightMode === false ? lightTheme : darkTheme}>
        {children}
        <GlobalStyle />
        <StyledGridTemplate />
      </ThemeProvider>
    </StyledMainTemplate>
    </AppContext.Provider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
