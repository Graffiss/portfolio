import React, { FC, useState } from "react"
import { Redirect } from "react-router-dom"
import Button from "../../atoms/button/button.styled"
import { StyledProject } from "./project-card.styled"

const ProjectCard: FC = ({ id, title, image }) => {
  const [redirect, setRedirect] = useState(false)

  const handleClick = () => {
    setRedirect(true)
  }

  if (redirect) {
    return <Redirect to={`/projects/${id}`} />
  }
  return (
    <StyledProject>
      <h1>{title}</h1>
      <img src={image} alt={title} />
      <Button onClick={handleClick}>Check it out</Button>
    </StyledProject>
  )
}

export default ProjectCard
