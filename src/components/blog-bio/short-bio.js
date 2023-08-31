/**
 * ShortBio component
 */
import slugify from 'slugify';
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';

import * as styles from './blog-bio.module.scss';

const ShortBio = ({fullName}) => {
  const personSlugId = slugify(fullName);
  const link = `/people#${personSlugId}`;
  return (
    <span className={styles.shortBio}>
      Written by&nbsp;
      <Link className={styles.shortBioLink} to={link}>
        {fullName}
      </Link>
    </span>
  );
};

export default ShortBio;

ShortBio.propTypes = {
  fullName: PropTypes.string,
};
