import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import ProjectCard from '../components/molecules/ProjectCard/ProjectCard';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.pink};
    border-bottom: 2px solid ${({ theme }) => theme.darkRed};
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const ProjectView = ({ projects }) => (
  <StyledWrapper>
    <StyledProjectWrapper>
      {projects.map(({ id, image, title, desc, stack }) => (
        <ProjectCard key={id} id={id} image={image} title={title} desc={desc} stack={stack} />
      ))}
    </StyledProjectWrapper>

    <p>Other projects:</p>

    <Button>
      <a
        style={{ color: 'inherit', textDecoration: 'inherit' }}
        href="https://github.com/Graffiss"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </Button>
  </StyledWrapper>
);

ProjectView.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      stack: PropTypes.array,
      github: PropTypes.string.isRequired,
      demo: PropTypes.string.isRequired,
    }),
  ),
};

ProjectView.defaultProps = {
  projects: [],
};

const mapStateToProps = ({ projects }) => ({ projects });

export default connect(mapStateToProps)(ProjectView);
