import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px 80px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.lightRed};
  font-size: 46px;
  font-weight: 600;
  padding: 30px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 15px 0;
  }
`;

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: 300;
  padding-bottom: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    padding-bottom: 15px;
  }
`;

const StyledImage = styled.img`
  height: 406px;
  width: 750px;
  border-radius: 25px;
  border: 3px solid ${({ theme }) => theme.darkRed};

  @media (max-width: 1100px) {
    height: 271px;
    width: 500px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 116px;
    width: 215px;
    border-radius: 10px;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  Button {
    margin: 10px 10px;
  }
`;

const ProjectDetailsTemplate = ({ title, image, desc, github, demo }) => {
  return (
    <StyledWrapper>
      <StyledFlex>
        <StyledImage src={image} alt={title} />
      </StyledFlex>
      <StyledFlex>
        <StyledHeader>{title}</StyledHeader>
        <StyledParagraph>{desc}</StyledParagraph>
        <StyledButtons>
          <Button>
            <a
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
          <Button>
            <a
              style={{ color: 'inherit', textDecoration: 'inherit' }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
        </StyledButtons>
      </StyledFlex>
    </StyledWrapper>
  );
};

ProjectDetailsTemplate.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
};

export default ProjectDetailsTemplate;
