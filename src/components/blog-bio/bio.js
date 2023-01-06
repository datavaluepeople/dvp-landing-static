/**
 * Blog Bio component
 */
import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage} from 'gatsby-plugin-image';

import ShortBio from './short-bio';
import * as styles from './blog-bio.module.scss';
import PersonSocialMediaLinks from '../person/social-media-links';

const Bio = ({fullName, writtenDate, avatar, email, github, linkedIn}) => {
  return (
    <div className={styles.bioContainer}>
      <div className={styles.avatarColumn}>
        <GatsbyImage
          className={styles.avatarImg}
          alt={fullName || 'Author Picture'}
          image={avatar}
        />
      </div>
      <div className={styles.textColumn}>
        <p>
          <ShortBio fullName={fullName}/>
        </p>
        <p className={styles.writtenDate}>{writtenDate}</p>
        <div className={styles.signpostContainer}>
          <PersonSocialMediaLinks
            github={github}
            linkedIn={linkedIn}
          />
          <span className={styles.email}>{email}</span>
        </div>
        <p style={{ "margin-bottom": 0 }}>datavaluepeople is a group of data-driven people. Through applied machine learning, building automated systems, advising, and education, we create value for businesses, organizations, and humans. Contact us to find out more about how we can help your organisation or if you are interested in the team.</p>
      </div>
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
