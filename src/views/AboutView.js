import React from 'react';
import styled from 'styled-components';
import aboutPicture from '../assets/images/about/andrzej-bogdol-black-white.jpg';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 80px;
`;

const StyledPicture = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;

  img {
    height: 400px;
    width: 400px;
    border-radius: 100%;
    border: 15px solid #db3340;
  }
`;

const StyledText = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 30px;

  h2 {
    color: #9e2b35;
    font-size: 60px;
    font-weight: 600;
  }

  p {
    color: #4f4d57;
    font-size: 30px;
    font-weight: 300;
    padding-top: 30px;
  }
`;

const AboutView = () => (
  <StyledWrapper>
    <StyledPicture>
      <img src={aboutPicture} alt="Andrzej Bogdoł" />
    </StyledPicture>
    <StyledText>
      <h2>Andrzej Bogdoł</h2>
      <p>
        Pierwsze doświadczenia w czytaniu kodu JavaScript zbierałem pracując jako Web Analityk w
        różnych działach marketingu.
      </p>
      <p>
        Na przestrzeni lat bardziej zainteresowała mnie część dotycząca kodu, niż analizy danych.
        Zagłębiając się w technologie front-endowe najbardziej wciągnął mnie React{' '}
      </p>
    </StyledText>
  </StyledWrapper>
);

export default AboutView;
