import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Button from "../components/atoms/button/button.styled"

const StyledWrapper = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  padding: 0 100px;

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`

const StyledLetter = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    font-family: "Abril Fatface";
    font-size: 90vh;
    text-shadow: 10px 5px ${({ theme }) => theme.darkRed};
    color: ${({ theme }) => theme.lightRed};
    position: absolute;
    bottom: -50vh;
    z-index: -1;
    padding: 0;
    margin: 0;

    ::after {
      position: absolute;
      content: "";
      display: block;
      width: 120%;
      height: 54px;
      background-color: ${({ theme }) => theme.body};
      border: 1px solid ${({ theme }) => theme.boxBorder};
      box-shadow: 50px 50px 70px -10px ${({ theme }) => theme.boxShadow};
      top: 78%;
      left: 0;
    }

    @media (max-width: 1460px) {
      font-size: 80vh;
    }

    @media (max-width: 1024px) {
      font-size: 70vh;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const StyledIntro = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      align-items: center;
    }

    h1 {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
      font-size: 90px;
      text-align: right;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 78px;
      }
    }

    h3 {
      color: ${({ theme }) => theme.darkRed};
      font-weight: 300;
      font-size: 55px;
      text-align: right;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 30px;
      }
    }
  }
`

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
      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/projects"
      >
        <Button big>Projects</Button>
      </Link>
    </StyledIntro>
  </StyledWrapper>
)

export default IntroView
