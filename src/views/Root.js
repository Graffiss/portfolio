import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import ContactView from './ContactView';
import StackView from './StackView';
import ProjectsView from './ProjectsView';
import IntroView from './IntroView';
import AboutView from './AboutView';
import ProjectDetailsView from './ProjectDetailsView';

const Root = () => (
  <Provider store={store}>
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
  </Provider>
);

export default Root;
