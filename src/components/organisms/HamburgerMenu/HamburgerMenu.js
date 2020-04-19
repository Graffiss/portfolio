import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';
import Button from '../../atoms/Button/Button';
import AppContext from '../../../context/context';

const StyledMenu = styled.div`
    width: 80vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
    background-color: ${({ theme }) => theme.body};
    box-shadow: 0px 4px 10px rgb(0,0,0, 0.5);
    z-index: 99;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HamburgerMenu = () => (
    <StyledMenu>
        <HeaderNav/>
        <AppContext.Consumer>
          {(context) => 
        <Button onClick={context.toggleBurgerMenu}>Zamknij</Button>}
        </AppContext.Consumer>
    </StyledMenu>
    );

export default HamburgerMenu;