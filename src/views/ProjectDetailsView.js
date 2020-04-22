import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import ProjectDetailsTemplate from '../templates/ProjectDetailsTemplate';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectDetailsView = ({ activeItem }) => {
  const [item] = activeItem;

  return (
    <StyledWrapper>
      <ProjectDetailsTemplate
        title={item.title}
        image={item.image}
        desc={item.desc}
        stack={item.stack}
        github={item.github}
        demo={item.demo}
      />

      <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/projekty">
        <Button>Powrót</Button>
      </Link>
    </StyledWrapper>
  );
};

ProjectDetailsView.propTypes = {
  activeItem: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = ({ projects }, ownProps) => {
  return {
    activeItem: projects.filter((item) => item.id === JSON.parse(ownProps.match.params.id)),
  };
};

export default connect(mapStateToProps)(ProjectDetailsView);
