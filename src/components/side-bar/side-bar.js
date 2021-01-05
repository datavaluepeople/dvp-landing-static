import React from 'react';
import PropTypes from 'prop-types';

import sideBarStyles from './side-bar.module.scss';

import ChatWithUs from '../chat-with-us/chat-with-us.js';
import WhoWeAre from '../who-we-are/who-we-are.js';

const SideBar = ({isHome, isOpen}) => {
  return (
    <div className={`
        ${sideBarStyles.container}
        ${isOpen ? sideBarStyles.show : sideBarStyles.hide}
      `}>
      <ChatWithUs />
      <WhoWeAre HomePage={false}/>
      <div className={sideBarStyles.footer}>
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
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {
  isHome: PropTypes.boolean,
  isOpen: PropTypes.boolean,
};

