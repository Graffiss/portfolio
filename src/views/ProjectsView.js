import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';
import ProjectCard from '../components/molecules/ProjectCard/ProjectCard';
import organicMarketPhoto from '../assets/images/projects/organic-market-project-mockup_v2.png';
import realEstatePhoto from '../assets/images/projects/realEstateProject.png';

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

class ProjectView extends Component {
  state = {
    projects: [
      {
        id: 1,
        image: organicMarketPhoto,
        title: 'Organic Food Market',
        desc:
          'Sklep ecommerce z produktami organicznymi. Dodatkowo posiada blog oparty o Gatsby oraz autoryzację inwentarza dzięki Firebase',
        stack: ['react', 'redux', 'gatsby', 'graphql'],
      },
      {
        id: 2,
        image: realEstatePhoto,
        title: 'Home Pantry',
        desc:
          'Projekt przygotowany w ramach wyzwania organizowanego przez firmę Eduweb: React w 10 dni',
        stack: ['react', 'redux', 'firebase', 'styled.components'],
      },
    ],
  };

  render() {
    const { projects } = this.state;
    return (
      <StyledWrapper>
        <StyledProjectWrapper>
          {projects.map(({ id, image, title, desc, stack }) => (
            <ProjectCard key={id} id={id} image={image} title={title} desc={desc} stack={stack} />
          ))}
        </StyledProjectWrapper>

        <p>Pozostałe projekty:</p>

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
  }
}

export default ProjectView;
