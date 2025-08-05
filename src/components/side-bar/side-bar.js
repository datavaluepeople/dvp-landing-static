import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import * as sideBarStyles from './side-bar.module.scss';

import ChatWithUs from '../chat-with-us/chat-with-us.js';
import WhoWeAreUsp from '../who-we-are-usp/who-we-are-usp.js';
import BuilderFooter from '../builder-footer/builder-footer.js';

const SideBar = ({isHome, isOpen, toggleMenuOpen}) => {
  return (
    <div className={`
        ${sideBarStyles.container}
        ${isOpen ? sideBarStyles.show : sideBarStyles.hide}
        ${isHome ? sideBarStyles.home : ''}
      `}>
      <div className={sideBarStyles.linkContainerHome}>
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
        <div className={sideBarStyles.linkContainerDivider}></div>
        {isHome && <WhoWeAreUsp HomePage={false}/>}
      </div>
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
            <li className={sideBarStyles.navListItem}>
              <Link to="/blog/" className={sideBarStyles.navListLink}>
                Blog
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
  toggleMenuOpen: PropTypes.func,
};

