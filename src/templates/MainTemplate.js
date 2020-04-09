import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';

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
`;

const MainTemplate = ({ children }) => (
  <StyledMainTemplate>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </StyledMainTemplate>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
