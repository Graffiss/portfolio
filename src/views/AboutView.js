import React from 'react';
import styled from 'styled-components';
import aboutPicture from '../assets/images/about/andrzej-bogdol-black-white.jpg';

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 80px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 20px 20px;
  }
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
    border: 15px solid ${({ theme }) => theme.lightRed};

    @media (max-width: 768px) {
      height: 200px;
      width: 200px;
      border: 8px solid ${({ theme }) => theme.lightRed};
    }
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
    color: ${({ theme }) => theme.darkRed};
    font-size: 60px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 28px;
      text-align: center;
    }
  }

  p {
    color: ${({ theme }) => theme.text};
    font-size: 30px;
    font-weight: 300;
    padding-top: 30px;

    @media (max-width: 768px) {
      font-size: 16px;
      padding-top: 15px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    padding-left: 0;
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
        I gathered my first experience with reading JavaScript code while working as{' '}
        <b>Web Analyst</b> in various marketing departments (from small marketing agencies, through
        start-ups, up to big corporations).
      </p>
      <p>
        Over the years I became more interested in the code itself, rather than in marketing, so I
        decided to make a career switch and dive deep into front-end technologies, where{' '}
        <b>React</b> became my main working tool.
      </p>
    </StyledText>
  </StyledWrapper>
);

export default AboutView;
