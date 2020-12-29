import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.js';

const Layout = ({location, children}) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  const isHome = (location.pathname === rootPath);

  return (
    <div>
      <Header isHome={isHome}/>
      <main>
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

