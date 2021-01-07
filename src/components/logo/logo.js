import React from 'react';
import PropTypes from 'prop-types';

import logoStyles from './logo.module.scss';

const Logo = ({isHome}) => {
  let logo;
  if (isHome) {
    logo = '/img/logo-full-header-white/datavaluepeople.svg';
  } else {
    logo = '/img/logo-full-header-color/datavaluepeople.svg';
  }

  return (
    <div
      className={`
      ${logoStyles.logo}
      ${isHome ? logoStyles.home : ''}
      `}
    >
      <img
        className={logoStyles.img}
        alt="datavaluepeople logo"
        src={logo}
      />
    </div>

  );
};

export default Logo;

Logo.propTypes = {
  isHome: PropTypes.bool,
};
