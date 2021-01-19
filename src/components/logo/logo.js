import React from 'react';
import PropTypes from 'prop-types';

import logoStyles from './logo.module.scss';
import HypeAnimation from '../../components/hype-animation';

const Logo = ({isHome}) => {
  const logoSrc = isHome ?
    '/img/logo-full-header-white/datavaluepeople.svg' :
    '/img/logo-full-header-color/datavaluepeople.svg';
  const logoEl = (
    <img
      className={logoStyles.img}
      alt='datavaluepeople logo'
      src={logoSrc}
    />
  );

  const logoAnimation = (
    <HypeAnimation
      name={'header_logo'}
      display='none'
      className={logoStyles.animationHeader}
      classNameTransition={logoStyles.animationHeaderOnload}
    />
  );
  return (
    <div
      className={`
      ${logoStyles.logo}
      ${isHome ? logoStyles.home : ''}
      `}
    >
      {logoEl}
      {isHome && logoAnimation}
    </div>

  );
};

export default Logo;

Logo.propTypes = {
  isHome: PropTypes.bool,
};
