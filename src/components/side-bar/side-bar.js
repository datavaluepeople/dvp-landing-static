import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import sideBarStyles from './side-bar.module.scss';

import ChatWithUs from '../chat-with-us/chat-with-us.js';
import WhoWeAre from '../who-we-are/who-we-are.js';
import BuilderFooter from '../builder-footer/builder-footer.js';

const SideBar = ({isHome, isOpen, toggleMenuOpen}) => {
  return (
    <div className={`
        ${sideBarStyles.container}
        ${isOpen ? sideBarStyles.show : sideBarStyles.hide}
        ${isHome ? sideBarStyles.home : ''}
      `}>
      <Link
        className={sideBarStyles.chatLink}
        onClick={() => {
          toggleMenuOpen(false);
        }}
        to='/our-approach#chat-with-us'
      >
        <ChatWithUs
          isHome={isHome}
        />
      </Link>
      {isHome && <WhoWeAre HomePage={false}/>}
      <div className={sideBarStyles.footer}>
        <nav className={sideBarStyles.nav}>
          <ul className={sideBarStyles.navList}>
            <li className={sideBarStyles.navListItem}>
              <Link to="/track-record/" className={sideBarStyles.navListLink}>
                <span>Track record</span>
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
            <li className={sideBarStyles.navListItem}>
              <Link to="/people/" className={sideBarStyles.navListLink}>
                People
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
            <li className={sideBarStyles.navListItem}>
              <Link to="/our-approach/" className={sideBarStyles.navListLink}>
                Our approach
                <span className={sideBarStyles.arrow}>‣</span>
              </Link>
            </li>
          </ul>
        </nav>
        <BuilderFooter SideBarAndIsHome={isHome } HomePage={false}/>
      </div>
    </div>
  );
};

export default SideBar;

SideBar.propTypes = {
  isHome: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenuOpen: PropTypes.function,
};

