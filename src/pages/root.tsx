import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"
import MainTemplate from "../templates/main-template/main.template"
import Header from "../components/organisms/header/header.component"
import Footer from "../components/organisms/footer/footer.component"
import ContactPage from "./contact"
import StackPage from "./stack"
import ProjectsPage from "./projects"
import IntroPage from "./intro"
import AboutPage from "./about"
import ProjectDetailsPage from "./project-details"
import { ManagedUIContext } from "context/ui.context"

const Root = () => (
  <Provider store={store}>
    <ManagedUIContext>
      <BrowserRouter>
        <MainTemplate>
          <Header />
          <Switch>
            <Route exact path="/" component={IntroPage} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route path="/projects/:id" component={ProjectDetailsPage} />
            <Route path="/stack" component={StackPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
          <Footer />
        </MainTemplate>
      </BrowserRouter>
    </ManagedUIContext>
  </Provider>
)

export default Root
