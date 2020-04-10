import React from 'react';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const StyledWrapper = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  padding: 0 100px;
`;

const StyledLetter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    font-family: 'Abril Fatface';
    font-size: 90vh;
    text-shadow: 10px 5px #9e2b35;
    color: #db3340;
    position: absolute;
    bottom: -450px;
    z-index: -1;
    padding: 0;
    margin: 0;

    ::after {
      position: absolute;
      content: '';
      display: block;
      width: 120%;
      height: 54px;
      background-color: white;
      border: 1px solid #f5f5f5;
      box-shadow: 50px 50px 70px -10px rgba(79, 77, 87, 1);
      top: 78%;
      left: 0;
    }
  }
`;

const StyledIntro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 40px;

    h1 {
      color: #4f4d57;
      font-weight: 600;
      font-size: 90px;
      text-align: right;
    }

    h3 {
      color: #9e2b35;
      font-weight: 300;
      font-size: 55px;
      text-align: right;
    }
  }
`;

const IntroView = () => (
  <StyledWrapper>
    <StyledLetter>
      <p>A</p>
    </StyledLetter>
    <StyledIntro>
      <div>
        <h1>Andrzej Bogdoł</h1>
        <h3>React Developer</h3>
      </div>
      <Button big>Projekty</Button>
    </StyledIntro>
  </StyledWrapper>
);

export default IntroView;
