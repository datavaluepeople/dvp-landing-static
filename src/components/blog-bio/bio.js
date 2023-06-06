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
      <div>
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
        <p style={{marginBottom: 0}}>
          datavaluepeople is a group of artificial intelligence experts.
          Through applied machine learning, building automated systems,
          advising, and education, we create value for
          businesses, organizations, and humans.
          <b>Drop us an email to speak to us about how we could
          work with your organisation, or if you are interested
          in joining our team.</b>
        </p>
      </div>
    </div>
  );
};

export default Bio;

Bio.propTypes = {
  fullName: PropTypes.string,
  writtenDate: PropTypes.string,
  avatar: PropTypes.object,
  email: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
};
