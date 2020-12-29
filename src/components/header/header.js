import React from 'react';
import PropTypes from 'prop-types';

const Header = ({isHome}) => {
  return (
    <header
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
