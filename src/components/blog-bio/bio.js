/**
 * Blog Bio component
 */
import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage} from 'gatsby-plugin-image';


import ShortBio from './short-bio';

const Bio = ({fullName, writtenDate, avatar, email}) => {
  return (
    <div>
      <GatsbyImage
        alt={fullName || 'Author Picture'}
        image={avatar}
      />
      <p>Written by {fullName}.</p>
      <p>{writtenDate}</p>
      <p>datavaluepeople is a group of data-driven people. Through applied machine learning, building automated systems, advising, and education, we create value for businesses, organizations, and humans. Contact us to find out more about how we can help your organisation or if you are interested in the team.</p>
      <p>{email}</p>
    </div>
  );
};

export default Bio;

Bio.propTypes = {
  fullName: PropTypes.String,
  bio: PropTypes.string,
  avatar: PropTypes.object,
  email: PropTypes.string,
};
