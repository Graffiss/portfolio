export enum Technology {
  React = "react",
  Redux = "redux",
  TypeScript = "typescript",
  ContextAPI = "contextAPI",
  StyledComponents = "styled.components",
  Hooks = "hooks",
  Formik = "formik",
  LocalStorage = "localStorage",
  RestAPI = "rest API",
}

export interface Project {
  id?: number
  image: string
  title: string
  desc: string
  stack: Technology[]
  github: string
  demo: string
}

export interface ProjectsState {
  projects: Project[]
}
