import { FC, useState } from "react"
import { Redirect } from "react-router-dom"
import { Project } from "reducers/root.reducer.interface"
import Button from "../../atoms/button/button.styled"
import { StyledProject } from "./project-card.styled"

const ProjectCard: FC<Partial<Project>> = ({ id, title, image }) => {
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
