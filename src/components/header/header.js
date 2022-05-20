import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import Logo from '../logo/logo';
import Burger from '../burger/burger';
import SideBar from '../side-bar/side-bar';
import * as headerStyles from './header.module.scss';

const Header = ({isHome, isOpen, toggleMenuOpen}) => {
  let headerContainerClass;
  if (isOpen) {
    headerContainerClass = headerStyles.containerMenuOpen;
  } else {
    headerContainerClass = headerStyles.containerMenuClosed;
  }
  return (
    <header
      className={headerContainerClass}
    >
      <div
        className={
          isHome ? headerStyles.dark : headerStyles.light
        }
      >
        <Link to="/">
          <Logo isHome={isHome}/>
        </Link>
        <Burger
          isHome={isHome}
          isOpen={isOpen}
          toggleMenuOpen={toggleMenuOpen}
        ></Burger>
      </div>
      <SideBar
        isHome={isHome}
        isOpen={isOpen}
        toggleMenuOpen={toggleMenuOpen}
      />
    </header>
  );
};

export default Header;

Header.propTypes = {
  isHome: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenuOpen: PropTypes.func,
};
