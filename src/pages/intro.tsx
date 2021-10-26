import { Link } from "react-router-dom"
import Button from "../components/atoms/button/button.styled"
import {
  StyledLetter,
  StyledIntro,
  StyledWrapper,
} from "components/pages/intro/intro.styled"

const IntroPage = () => (
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

export default IntroPage
