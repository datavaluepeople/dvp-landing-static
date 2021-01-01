import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import SideBar from '../side-bar/side-bar';
import headerStyles from './header.module.scss';

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
        <Logo isHome={isHome}/>
        <div onClick={() => toggleMenuOpen()}>
          {isOpen ? 'Close' : 'Menu' }
        </div>
      </div>
      <SideBar
        isHome={isHome}
        isOpen={isOpen}
      />
    </header>
  );
};

export default Header;

Header.propTypes = {
  isHome: PropTypes.boolean,
  isOpen: PropTypes.boolean,
  toggleMenuOpen: PropTypes.function,
};
