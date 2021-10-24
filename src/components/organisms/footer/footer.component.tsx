import React, { FC } from "react"
import ButtonIcon from "../../atoms/button-icon/button-icon.styled"
import githubIcon from "../../../assets/icons/simple-icons_github.svg"
import linkedinIcon from "../../../assets/icons/simple-icons_linkedin.svg"
import { StyledGrid } from "./footer.styled"

const Footer: FC = () => (
  <StyledGrid>
    <div className="footerStriped" />
    <div className="footerSocial">
      <ButtonIcon
        icon={githubIcon}
        href="https://github.com/Graffiss"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github portfolio"
      />
      <ButtonIcon
        icon={linkedinIcon}
        href="https://www.linkedin.com/in/andrzej-bogdo%C5%82/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin profile"
      />
    </div>
    <div className="footerBottom" />
  </StyledGrid>
)

export default Footer
