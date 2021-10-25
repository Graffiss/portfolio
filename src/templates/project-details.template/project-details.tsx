import React, { FC } from "react"
import { Project } from "reducers/reducer.interface"
import Button from "../../components/atoms/button/button.styled"
import {
  StyledButtons,
  StyledFlex,
  StyledHeader,
  StyledImage,
  StyledParagraph,
  StyledWrapper,
} from "./project-details.styled"

const ProjectDetailsTemplate: FC<Project> = ({
  title,
  image,
  desc,
  github,
  demo,
}) => {
  return (
    <StyledWrapper>
      <StyledFlex>
        <StyledImage src={image} alt={title} />
      </StyledFlex>
      <StyledFlex>
        <StyledHeader>{title}</StyledHeader>
        <StyledParagraph>{desc}</StyledParagraph>
        <StyledButtons>
          <Button>
            <a
              style={{ color: "inherit", textDecoration: "inherit" }}
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Button>
          <Button>
            <a
              style={{ color: "inherit", textDecoration: "inherit" }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </Button>
        </StyledButtons>
      </StyledFlex>
    </StyledWrapper>
  )
}

export default ProjectDetailsTemplate
