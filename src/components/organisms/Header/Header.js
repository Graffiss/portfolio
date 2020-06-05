import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';
import HamburgerButton from '../../atoms/HamburgerButton/HamburgerButton';
import AppContext from '../../../context/context';

const StyledHeader = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 150px 1fr 52px;
  grid-template-areas: 'logo nav toggle';
  align-items: center;
  padding: 0 80px;

  h3 {
    grid-area: logo;
    color: ${({ theme }) => theme.darkRed};
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
  }

  @media (max-width: 1100px) {
    padding: 0 20px;
    grid-template-columns: 50px 1fr 52px;
    grid-template-areas: 'burger logo toggle';
  }
`;

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1100px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return (
    <StyledHeader>
      <HamburgerButton onClick={toggleNav} />
      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
        <h3>A-Bogdol</h3>
      </Link>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <HeaderNav />
      </CSSTransition>
      <AppContext.Consumer>
        {(context) => (
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
            inactiveLabelStyle={{ color: 'white' }}
            value={context.nightMode}
            onToggle={context.toggleTheme}
          />
        )}
      </AppContext.Consumer>
    </StyledHeader>
  );
};

export default Header;
