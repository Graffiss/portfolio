import React, { Component } from 'react';
import ButtonStack from '../../atoms/ButtonStack/ButtonStack';
import reactIcon from '../../../assets/icons/simple-icons_react.svg';
import reduxIcon from '../../../assets/icons/simple-icons_redux.svg';
import javascriptIcon from '../../../assets/icons/simple-icons_javascript.svg';
import styledIcon from '../../../assets/icons/styled-components.svg';
import gitIcon from '../../../assets/icons/git.svg';
import npmIcon from '../../../assets/icons/npm.svg';
import firebaseIcon from '../../../assets/icons/firebase.svg';
import gatsbyIcon from '../../../assets/icons/gatsby.svg';
import graphqlIcon from '../../../assets/icons/graphql.svg';
import jestIcon from '../../../assets/icons/jest.svg';

class StackList extends Component {
  state = {
    stack: [
      {
        id: 1,
        name: 'React',
        icon: reactIcon,
      },
      {
        id: 2,
        name: 'JavaScript',
        icon: javascriptIcon,
      },
      {
        id: 3,
        name: 'Redux',
        icon: reduxIcon,
      },
      {
        id: 4,
        name: 'styled .components',
        icon: styledIcon,
      },
      {
        id: 5,
        name: 'git',
        icon: gitIcon,
      },
      {
        id: 6,
        name: 'npm',
        icon: npmIcon,
      },
      /*  {
        id: 7,
        name: 'Firebase',
        icon: firebaseIcon,
      },
      {
        id: 8,
        name: 'Gatsby',
        icon: gatsbyIcon,
      },
      {
        id: 9,
        name: 'GraphQL',
        icon: graphqlIcon,
      },
      {
        id: 10,
        name: 'Jest',
        icon: jestIcon,
      }, */
    ],
  };

  render() {
    const { stack } = this.state;
    return stack.map((item) => (
      <ButtonStack key={item.id} data-content={item.name} icon={item.icon} />
    ));
  }
}

export default StackList;
