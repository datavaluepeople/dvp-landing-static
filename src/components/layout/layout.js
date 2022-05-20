import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.js';
import * as layoutStyles from './layout.module.scss';

import useMenuOpen from '../../hooks/use-menu-open.js';

import firebase from 'gatsby-plugin-firebase';
import {useStaticQuery, graphql} from 'gatsby';

const Layout = ({location, children}) => {
  const {isOpen, toggleMenuOpen} = useMenuOpen();
  const rootPath = `${__PATH_PREFIX__}/`;
  const {site} = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            hasFirebaseApp
          }
        }
      }
    `,
  );
  let backgroundFixPanal;

  const isHome = (location.pathname === rootPath);
  const hasFirebaseApp = site.siteMetadata.hasFirebaseApp;

  if (isHome) {
    // Panel needed if the content of main is smaller then
    // height of the screen
    backgroundFixPanal = <div className={layoutStyles.backgroundFixPanal}/>;
  }

  React.useEffect(() => {
    if (hasFirebaseApp) {
      firebase.analytics();
    }
  }, []);

  return (
    <div className={`
      ${layoutStyles.container}
      ${isHome? layoutStyles.containerHome : '' }
      ${isHome? layoutStyles.dark : '' }
      ${isOpen? layoutStyles.openSideBar : '' }
      `}
    >
      <Header
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

