import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({isHome}) => {
  return (
    <div>
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
};

