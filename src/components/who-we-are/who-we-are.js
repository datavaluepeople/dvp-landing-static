import React from 'react';
import PropTypes from 'prop-types';

import * as whoWeAreStyles from './who-we-are.module.scss';
import TechonolgyIcons from '../technology-icons/technology-icons';


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
        We are a group of data-driven people.
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

export default WhoWeAre;

WhoWeAre.propTypes = {
  HomePage: PropTypes.bool,
};
