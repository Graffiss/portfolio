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
    color: #9e2b35;
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
  }
`;

class Header extends React.Component {
  state = {
    nightMode: false,
  };

  render() {
    const { nightMode } = this.state;

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
          value={nightMode || false}
          onToggle={(value) => {
            this.setState({
              nightMode: !value,
            });
          }}
        />
      </StyledHeader>
    );
  }
}

export default Header;
