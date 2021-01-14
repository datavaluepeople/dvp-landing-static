import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.js';
import layoutStyles from './layout.module.scss';

import useMenuOpen from '../../hooks/use-menu-open.js';

const Layout = ({location, children}) => {
  const {isOpen, toggleMenuOpen} = useMenuOpen();
  const rootPath = `${__PATH_PREFIX__}/`;
  let backgroundFixPanal;

  const isHome = (location.pathname === rootPath);

  if (isHome) {
    // Panel needed if the content of main is smaller then
    // height of the screen
    backgroundFixPanal = <div className={layoutStyles.backgroundFixPanal}/>;
  }

  return (
    <div className={`
      ${layoutStyles.container}
      ${isHome? layoutStyles.containerHome : '' }
      ${isHome? layoutStyles.dark : '' }
      ${isOpen? layoutStyles.openSideBar : '' }
      `}
    >
      <Header
        className={layoutStyles.header}
        isHome={isHome}
        isOpen={isOpen}
        toggleMenuOpen={toggleMenuOpen}
      />
      {backgroundFixPanal}
      <main
        className={`
          ${isHome ? layoutStyles.mainHome : layoutStyles.main}
          ${isHome ? layoutStyles.dark : layoutStyles.light}
        `}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;


Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  location: PropTypes.object,
};

