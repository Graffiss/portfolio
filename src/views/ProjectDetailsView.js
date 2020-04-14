import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectDetailsView = ({ children }) => (
  <StyledWrapper>
    {children}

    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/projekty">
      <Button>Powrót</Button>
    </Link>
  </StyledWrapper>
);

export default ProjectDetailsView;
