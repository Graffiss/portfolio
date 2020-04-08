import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import MainTemplate from '../templates/MainTemplate';
import ContactView from './ContactView';
import StackView from './StackView';
import ProjectsView from './ProjectsView';
import IntroView from './IntroView';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={IntroView} />
          <Route path="/projects" component={ProjectsView} />
          <Route path="/stack" component={StackView} />
          <Route path="/contact" component={ContactView} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
