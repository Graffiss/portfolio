import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 0 100px;
`;

const ProjectView = ({ projects }) => (
  <StyledWrapper>
    <h1>Moje projekty:</h1>
    {projects.map(({ id, image, title, desc }) => (
      <div key={id}>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{desc}</p>
        <Button>Sprawdź</Button>
      </div>
    ))}
  </StyledWrapper>
);

const mapStateToProps = (state) => {
  const { projects } = state;
  return { projects };
};

export default connect(mapStateToProps)(ProjectView);
