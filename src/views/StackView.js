import React from 'react';
import styled from 'styled-components';
import ButtonStack from '../components/atoms/ButtonStack/ButtonStack';
import reactIcon from '../assets/icons/simple-icons_react.svg';
import reduxIcon from '../assets/icons/simple-icons_redux.svg';

const StyledWrapper = styled.div`
  grid-area: content;
  padding: 0 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 85px;

  @media (max-width: 1500px) {
    grid-gap: 45px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StackView = () => (
  <StyledWrapper>
    <StyledGrid>
      <ButtonStack icon={reactIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
      <ButtonStack icon={reduxIcon} />
    </StyledGrid>
  </StyledWrapper>
);

export default StackView;
