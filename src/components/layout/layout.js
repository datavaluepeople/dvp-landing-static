import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.js';
import layoutStyles from './layout.module.scss';

const Layout = ({location, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  const isHome = (location.pathname === rootPath);

  return (
    <div>
      <Header isHome={isHome}/>
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

