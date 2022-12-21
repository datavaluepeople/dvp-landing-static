/**
 * Blog Bio component
 */
import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage} from 'gatsby-plugin-image';

import ShortBio from './short-bio';
import PersonSocialMediaLinks from '../person/social-media-links';

const Bio = ({fullName, writtenDate, avatar, email, github, linkedIn}) => {
  return (
    <div>
      <GatsbyImage
        alt={fullName || 'Author Picture'}
        image={avatar}
      />
      <ShortBio fullName={fullName}/>
      <p>{writtenDate}</p>
      <p>datavaluepeople is a group of data-driven people. Through applied machine learning, building automated systems, advising, and education, we create value for businesses, organizations, and humans. Contact us to find out more about how we can help your organisation or if you are interested in the team.</p>
      <PersonSocialMediaLinks
        github={github}
        linkedIn={linkedIn}
      />
      <p>{email}</p>
    </div>
  );
};

export default Bio;

Bio.propTypes = {
  fullName: PropTypes.String,
  writtenDate: PropTypes.String,
  avatar: PropTypes.object,
  email: PropTypes.String,
  github: PropTypes.String,
  linkedIn: PropTypes.String,
};
