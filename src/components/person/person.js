import React from 'react';
import PropTypes from 'prop-types';

import styles from './person.module.scss';

const Person = (
    {
      id,
      bio,
      title,
      fullName,
      github,
      linkedIn,
      profilePicture,
      profilePictureGifUrl,
    },
) => {
  return (
    <div className={styles.container}>
      <h2>{fullName}</h2>
    </div>
  );
};

export default Person;

Person.propTypes = {
  id: PropTypes.string,
  bio: PropTypes.string,
  title: PropTypes.string,
  fullName: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
  profilePicture: PropTypes.object,
  profilePictureGifUrl: PropTypes.string,
};
