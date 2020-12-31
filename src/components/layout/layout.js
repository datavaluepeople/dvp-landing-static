import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.js';
import layoutStyles from './layout.module.scss';

const Layout = ({location, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let backgroundFixPanal;

  const isHome = (location.pathname === rootPath);

  if (isHome) {
    // Panel needed if the content of main is smaller then
    // height of the screen
    backgroundFixPanal = <div className={layoutStyles.backgroundFixPanal}/>;
  }

  return (
    <div className={layoutStyles.container}>
      <Header isHome={isHome}/>
      {backgroundFixPanal}
      <main
        className={
          isHome ? layoutStyles.dark : layoutStyles.light
        }
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;


Layout.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
};

