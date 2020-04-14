import React from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

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

class ProjectCard extends React.Component {
  state = {
    redirect: false,
  };

  handleClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;
    const { id, title, image } = this.props;

    if (redirect) {
      return <Redirect to={`/projekty/${id}`} />;
    }
    return (
      <StyledProject>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <Button onClick={this.handleClick}>Sprawdź</Button>
      </StyledProject>
    );
  }
}

export default ProjectCard;
