import { FC } from "react"
import { Link } from "react-router-dom"
import { RouteComponentProps } from "react-router"
import { connect } from "react-redux"
import Button from "../components/atoms/button/button.styled"
import ProjectDetailsTemplate from "../templates/project-details.template/project-details.template"
import { StyledWrapper } from "components/pages/project-details/project-details.styled"
import { ProjectsState } from "reducers/root.reducer.interface"

type ProjectDetailsPageState = ReturnType<typeof mapStateToProps>

interface MatchParams {
  id: string
}

const ProjectDetailsPage: FC<ProjectDetailsPageState> = ({ activeItem }) => {
  const [{ title, demo, desc, github, image, stack }] = activeItem

  return (
    <StyledWrapper>
      <ProjectDetailsTemplate
        title={title}
        image={image}
        desc={desc}
        stack={stack}
        github={github}
        demo={demo}
      />

      <Link
        style={{ color: "inherit", textDecoration: "inherit" }}
        to="/projects"
        data-testid="back-button"
      >
        <Button>Back</Button>
      </Link>
    </StyledWrapper>
  )
}

const mapStateToProps = (
  { projects }: ProjectsState,
  ownProps: RouteComponentProps<MatchParams>
) => {
  return {
    activeItem: projects.filter(
      (item) => item.id === JSON.parse(ownProps.match.params.id)
    ),
  }
}

export default connect(mapStateToProps)(ProjectDetailsPage)
