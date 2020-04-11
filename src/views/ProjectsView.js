import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import Button from '../components/atoms/Button/Button';
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
    color: #ff4656;
    border-bottom: 2px solid #9e2b35;
    font-weight: 300;
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const StyledProjectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const StyledProject = styled.div`
  height: 488px;
  width: 730px;
  background-color: white;
  border: 3px solid #db3340;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 20px;

  &:hover {
    border: 3px solid #e93f4c;
    box-shadow: 10px 10px 0 #9e2b35;
    border: 3px solid #9e2b35;
    background-image: none;
  }

  img {
    height: 290px;
    width: 390px;
  }

  h1 {
    color: #4f4d57;
  }
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
      },
      {
        id: 2,
        image: realEstatePhoto,
        title: 'Home Pantry',
        desc:
          'Projekt przygotowany w ramach wyzwania organizowanego przez firmę Eduweb: React w 10 dni',
      },
    ],
    redirect: false,
  };

  handleClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { projects, redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/projekty/${projects.id}`} />;
    }

    return (
      <StyledWrapper>
        <StyledProjectWrapper>
          {projects.map(({ id, image, title }) => (
            <StyledProject key={id} id={id}>
              <h1>{title}</h1>
              <img src={image} alt={title} />
              <Button onClick={this.handleClick}>Sprawdź</Button>
            </StyledProject>
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
