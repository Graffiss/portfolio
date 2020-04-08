import React from 'react';
import { connect } from 'react-redux';
import SidebarTemplate from '../templates/SidebarTemplate';
import Button from '../components/atoms/Button/Button';

const ProjectView = ({ projects }) => (
  <SidebarTemplate>
    <h1>Moje projekty:</h1>
    {projects.map(({ id, image, title, desc }) => (
      <div key={id}>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{desc}</p>
        <Button>Sprawdź</Button>
      </div>
    ))}
  </SidebarTemplate>
);

const mapStateToProps = (state) => {
  const { projects } = state;
  return { projects };
};

export default connect(mapStateToProps)(ProjectView);
