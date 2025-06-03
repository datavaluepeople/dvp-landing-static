import React from 'react';
import PropTypes from 'prop-types';

import * as whoWeAreStyles from './who-we-are.module.scss';
import HomeClientIcons from '../home-client-icons/home-client-icons';


const WhoWeAre = ({HomePage}) => {
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
        We are a nimble group of artificial intelligence specialists delivering cost-effective innovation:
        <br/>
        <ul>
          <li className={whoWeAreStyles.listItem}>A close-knit team</li>
          <li className={whoWeAreStyles.listItem}>Refined working methods</li>
          <li className={whoWeAreStyles.listItem}>No layers of management or intermediaries</li>
          <li className={whoWeAreStyles.listItem}>Rapid deployment of tailored solutions through agile processes</li>
          <li className={whoWeAreStyles.listItem}>Clients work directly with top-level experts, unlike large bureaucratic firms</li>
          <li className={whoWeAreStyles.listItem}>Tightly integrate into client teams to give them continual handover and ownership</li>
        </ul>
        Trusted by:
      </p>
      <HomeClientIcons />
    </div>
  );
};

export default WhoWeAre;

WhoWeAre.propTypes = {
  HomePage: PropTypes.bool,
};
