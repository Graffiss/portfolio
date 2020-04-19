import React from 'react';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';

const StyledMenu = styled.div`
    height: 100vh;
    transform: translateX(-100%);
`;

const HamburgerMenu = () => (
    <StyledMenu>
        <HeaderNav/>
    </StyledMenu>

)

export default HamburgerMenu;