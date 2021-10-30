import { connect } from "react-redux"
import Button from "../components/atoms/button/button.styled"
import ProjectCard from "../components/molecules/project-card/project-card.component"
import {
  StyledProjectWrapper,
  StyledWrapper,
} from "components/pages/projects/projects.styled"
import { ProjectsState } from "reducers/root.reducer.interface"

const ProjectPage = ({ projects }: ProjectsState) => (
  <StyledWrapper>
    <StyledProjectWrapper>
      {projects.map(({ id, title, image }) => (
        <ProjectCard key={id} id={id} title={title} image={image} />
      ))}
    </StyledProjectWrapper>
    <p>Other projects:</p>
    <Button>
      <a
        style={{ color: "inherit", textDecoration: "inherit" }}
        href="https://github.com/Graffiss"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </Button>
  </StyledWrapper>
)

const mapStateToProps = ({ projects }: ProjectsState) => ({ projects })

export default connect(mapStateToProps)(ProjectPage)
