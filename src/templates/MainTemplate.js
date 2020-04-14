import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
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
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <StyledMainTemplate>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
        <GlobalStyle />
        <StyledGridTemplate />
      </ThemeProvider>
    </StyledMainTemplate>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
