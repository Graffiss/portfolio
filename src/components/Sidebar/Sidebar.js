import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.aside`
  width: 153px;
  height: 100vh;
  background-color: green;
  color: white;
  position: fixed;
  padding: 25px 0;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Sidebar = () => (
  <StyledWrapper>
    <p>Logo</p>
    <div>
      <Link to="/projects">
        <button type="button">Projekty</button>
      </Link>
      <Link to="/stack">
        <button type="button">Stack</button>
      </Link>
      <Link to="/contact">
        <button type="button">Kontakt</button>
      </Link>
    </div>
    <div>
      <button type="button">LinkedIn</button>
      <button type="button">Github</button>
    </div>
  </StyledWrapper>
);

export default Sidebar;
