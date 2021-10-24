import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"
import MainTemplate from "../templates/main-template/main.template"
import Header from "../components/organisms/header/header.component"
import Footer from "../components/organisms/footer/footer.component"
import ContactView from "./ContactView"
import StackView from "./StackView"
import ProjectsView from "./ProjectsView"
import IntroView from "./IntroView"
import AboutView from "./AboutView"
import ProjectDetailsView from "./ProjectDetailsView"
import { ManagedUIContext } from "context/ui.context"

const Root = () => (
  <Provider store={store}>
    <ManagedUIContext>
      <BrowserRouter>
        <MainTemplate>
          <Header />
          <Switch>
            <Route exact path="/" component={IntroView} />
            <Route exact path="/projects" component={ProjectsView} />
            <Route path="/projects/:id" component={ProjectDetailsView} />
            <Route path="/stack" component={StackView} />
            <Route path="/about" component={AboutView} />
            <Route path="/contact" component={ContactView} />
          </Switch>
          <Footer />
        </MainTemplate>
      </BrowserRouter>
    </ManagedUIContext>
  </Provider>
)

export default Root
