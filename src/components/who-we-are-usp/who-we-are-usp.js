import React from 'react';
import PropTypes from 'prop-types';

import * as whoWeAreStyles from './who-we-are-usp.module.scss';
import HomeClientIcons from '../home-client-icons/home-client-icons.js';


const WhoWeAreUsp = ({HomePage}) => {
  const pageClass = HomePage ?
    whoWeAreStyles.homePageElement :
    whoWeAreStyles.sideBarElement;

  return (
    <div
      className={`
        ${pageClass}
      `}
    >
      <p>
        <ul className={whoWeAreStyles.list}>
          <li>We’re a trusted team of senior AI and data specialists.</li>
          <li>We move fast, ship production systems, and embed directly with client teams.</li>
          <li>No layers of management - work directly with us in tight weekly development cycles.</li>
          <li>Lean, high-ROI, collaborative problem-solving with measurable results.</li>
        </ul>
        Trusted by:
      </p>
      <HomeClientIcons />
    </div>
  );
};

export default WhoWeAreUsp;

WhoWeAreUsp.propTypes = {
  HomePage: PropTypes.bool,
};
