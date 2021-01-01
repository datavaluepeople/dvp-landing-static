import React from 'react';
import PropTypes from 'prop-types';

import sideBarStyles from './side-bar.module.scss';


const SideBar = ({isHome, isOpen}) => {
  return (
    <div className={`
        ${sideBarStyles.container}
        ${isOpen ? sideBarStyles.show : sideBarStyles.hide}
      `}>
      <span>Chat With Us</span>
      <p>
        We are a group of data-driven people.
        Through applied machine learning, building automated systems,
        advising, and education, we create value for businesses,
        organizations, and humans.
        <br/>
        Some technologies we use:
      </p>
      <div><span>Icons</span></div>
      <nav>
        <ul>
          <li>Track record</li>
          <li>Current members</li>
          <li>Our approach</li>
        </ul>
      </nav>
      <div>
        <span>2019® - design by www.mybitdesign.com</span>
      </div>
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {
  isHome: PropTypes.boolean,
  isOpen: PropTypes.boolean,
};

