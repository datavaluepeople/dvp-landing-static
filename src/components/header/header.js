import React from 'react';
import PropTypes from 'prop-types';

import headerStyles from './header.module.scss';

const Header = ({isHome}) => {
  return (
    <header
      className={
        isHome ? headerStyles.dark : headerStyles.light
      }
    >
      <h1>Logo {isHome ? 'dark' : 'light'}</h1>
      <div>Menu</div>
      <div>Sidebase</div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  isHome: PropTypes.boolean,
};
