import React from 'react';
import PropTypes from 'prop-types';

import * as whoWeAreStyles from './who-we-are-collective.module.scss';
import TechonolgyIcons from '../technology-icons/technology-icons';


const WhoWeAreCollective = ({HomePage}) => {
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
        We are a group of artificial intelligence experts.
        Through applied machine learning, building automated systems,
        advising, and education, we create value for businesses,
        organizations, and humans.
        <br/>
        Some technologies we use:
      </p>
      <TechonolgyIcons />
    </div>
  );
};

export default WhoWeAreCollective;

WhoWeAreCollective.propTypes = {
  HomePage: PropTypes.bool,
};
