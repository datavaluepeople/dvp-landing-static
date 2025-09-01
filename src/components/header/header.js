import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import Logo from '../logo/logo';
import Burger from '../burger/burger';
import SideBar from '../side-bar/side-bar';
import * as headerStyles from './header.module.scss';
import { logoColorSrc, logoWhiteSrc } from '../logo/constants';

const Header = ({isHome, isOpen, toggleMenuOpen}) => {
  return (
    <header>
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

export const Head = () => (
  <>
    <link rel="preload" href={logoColorSrc} as="image"/>
    <link rel="preload" href={logoWhiteSrc} as="image"/>
  </>
);

export default Header;

Header.propTypes = {
  isHome: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenuOpen: PropTypes.func,
};
