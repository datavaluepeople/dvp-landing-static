import React from 'react';
import PropTypes from 'prop-types';

import logoStyles from './logo.module.scss';
import {logoColorSrc, logoWhiteSrc} from './constants.js';
import HypeAnimation from '../../components/hype-animation';
import {Helmet} from 'react-helmet';

const Logo = ({isHome}) => {
  const logoSrc = isHome ?
    logoWhiteSrc :
    logoColorSrc;
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
    />
  );
  return (
    <div
      className={`
      ${logoStyles.logo}
      ${isHome ? logoStyles.home : ''}
      `}
    >
      <Helmet>
        <link rel="preload" href={logoColorSrc} as="image"/>
        <link rel="preload" href={logoWhiteSrc} as="image"/>
      </Helmet>
      {logoEl}
      {isHome && logoAnimation}
    </div>

  );
};

export default Logo;

Logo.propTypes = {
  isHome: PropTypes.bool,
};
