import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const ProjectDetailsTemplate = ({ children }) => (
  <>
    {children}
    <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/projekty">
      <Button>Powrót</Button>
    </Link>
  </>
);

export default ProjectDetailsTemplate;
