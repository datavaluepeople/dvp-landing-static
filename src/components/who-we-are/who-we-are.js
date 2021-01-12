import React from 'react';
import PropTypes from 'prop-types';

import whoWeAreStyles from './who-we-are.module.scss';

const WhoWeAre = ({HomePage}) => {
  const pageClass = HomePage ?
    whoWeAreStyles.homePageElement :
    whoWeAreStyles.sideBarElement;
  return (
    <div
      className={`
        ${whoWeAreStyles.container}
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
      <div><span>Icons</span></div>
    </div>
  );
};

export default WhoWeAre;

WhoWeAre.propTypes = {
  HomePage: PropTypes.boolean,
};
