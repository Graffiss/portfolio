import React from "react"
import {
  StyledPicture,
  StyledWrapper,
  StyledText,
} from "components/pages/about/about.styled"
import aboutPicture from "../assets/images/about/andrzej-bogdol-black-white.jpg"

const AboutPage = () => (
  <StyledWrapper>
    <StyledPicture>
      <img src={aboutPicture} alt="Andrzej Bogdoł" />
    </StyledPicture>
    <StyledText>
      <h2>Andrzej Bogdoł</h2>
      <p>
        I gathered my first experience with reading JavaScript code while
        working as <b>Web Analyst</b> in various marketing departments (from
        small marketing agencies, through start-ups, up to big corporations).
      </p>
      <p>
        Over the years I became more interested in the code itself, rather than
        in marketing, so I decided to make a career switch and dive deep into
        front-end technologies, where <b>React</b> became my main working tool.
      </p>
    </StyledText>
  </StyledWrapper>
)

export default AboutPage
