import React from 'react';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const StyledProject = styled.div`
  height: 488px;
  width: 730px;
  background-color: ${({ theme }) => theme.body};
  border: 3px solid ${({ theme }) => theme.lightRed};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 20px;

  &:hover {
    border: 3px solid ${({ theme }) => theme.darkRed};
    box-shadow: 10px 10px 0 ${({ theme }) => theme.darkRed};
    border: 3px solid ${({ theme }) => theme.darkRed};
    background-image: none;
  }

  img {
    height: 290px;
    width: 390px;

    @media (max-width: 768px) {
  height: 145px;
  width: 195px;
  }
  }

  h1 {
    color: ${({ theme }) => theme.text};
    
    @media (max-width: 768px) {
      font-size: 24px;
  }
  }

  @media (max-width: 768px) {
height: 300px;
width: 320px;

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
