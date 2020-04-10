import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 20px 80px;
`;

class ProjectView extends Component {
  state = {
    projects: [
      {
        id: 1,
        image: 'some image',
        title: 'Organic Food Market',
        desc:
          'Sklep ecommerce z produktami organicznymi. Dodatkowo posiada blog oparty o Gatsby oraz autoryzację inwentarza dzięki Firebase',
      },
    ],
  };

  render() {
    const { projects } = this.state;

    return (
      <StyledWrapper>
        {projects.map(({ id, image, title, desc }) => (
          <div key={id}>
            <h1>{title}</h1>
            <img src={image} alt={title} />
            <p>{desc}</p>
            <Button>Sprawdź</Button>
          </div>
        ))}
        <p>Pozostałe projekty:</p>
        <Button>Github</Button>
      </StyledWrapper>
    );
  }
}

export default ProjectView;
