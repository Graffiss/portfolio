import React from 'react';
import ToggleButton from 'react-toggle-button';
import styled from 'styled-components';
import HeaderNav from '../../molecules/HeaderNav/HeaderNav';

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
`;

class Header extends React.Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <StyledHeader>
        <h3>A-Bogdol</h3>
        <HeaderNav />
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
          value={theme}
          onToggle={toggleTheme}
        />
      </StyledHeader>
    );
  }
}

export default Header;
