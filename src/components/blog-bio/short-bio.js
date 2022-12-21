/**
 * ShortBio component
 */
import React from 'react';
import PropTypes from 'prop-types';

import * as styles from './blog-bio.module.scss';

const ShortBio = ({fullName}) => {
  return (
    <span className={styles.shortBio}>Written by {fullName}</span>
  );
};

export default ShortBio;

ShortBio.propTypes = {
  fullName: PropTypes.String,
  bio: PropTypes.string,
  avatar: PropTypes.object,
  email: PropTypes.string,
};
