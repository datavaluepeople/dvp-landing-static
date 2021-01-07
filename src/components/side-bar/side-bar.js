import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import sideBarStyles from './side-bar.module.scss';

import ChatWithUs from '../chat-with-us/chat-with-us.js';
import WhoWeAre from '../who-we-are/who-we-are.js';
import BuilderFooter from '../builder-footer/builder-footer.js';

const SideBar = ({isHome, isOpen}) => {
  return (
    <div className={`
        ${sideBarStyles.container}
        ${isOpen ? sideBarStyles.show : sideBarStyles.hide}
        ${isHome ? sideBarStyles.home : ''}
      `}>
      <ChatWithUs isHome={isHome}/>
      <WhoWeAre HomePage={false}/>
      <div className={sideBarStyles.footer}>
        <nav>
          <ul>
            <li>
              <Link to="/track-record/">
                <span>Track record</span>
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
            <li>
              <Link to="/people/">
                People
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
            <li>
              <Link to="/our-approach/">
                Our approach
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
          </ul>
        </nav>
        <BuilderFooter HomePage={false}/>
      </div>
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {
  isHome: PropTypes.boolean,
  isOpen: PropTypes.boolean,
};

