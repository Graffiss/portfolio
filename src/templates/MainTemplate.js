import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';
import { lightTheme } from '../theme/theme';
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

const MainTemplate = ({ children }) => (
  <StyledMainTemplate>
    <GlobalStyle />
    <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    <StyledGridTemplate />
  </StyledMainTemplate>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
