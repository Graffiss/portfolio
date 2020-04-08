import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar/Sidebar';

const SidebarTemplate = ({ children }) => (
  <>
    {children}
    <Sidebar />
  </>
);

SidebarTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SidebarTemplate;
