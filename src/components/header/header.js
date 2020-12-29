import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../logo/logo';
import headerStyles from './header.module.scss';

const Header = ({isHome}) => {
  return (
    <header
      className={
        isHome ? headerStyles.dark : headerStyles.light
      }
    >
      <Logo isHome={isHome}/>
      <div>Menu</div>
      <div>Sidebase</div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isHome: PropTypes.boolean,
};
