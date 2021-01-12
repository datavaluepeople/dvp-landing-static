import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import ImageFadeIn from 'react-image-fade-in';

import styles from './person.module.scss';
import sharedPeopleStyles from '../../styles/shared/people.scss';

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
  const maxWidth = sharedPeopleStyles.personImgXlgMax;
  const minWidth = sharedPeopleStyles.personImgXlgMin;
  const profilePictureSources = [
    {
      ...profilePicture.md[0].fixed,
      media: `(max-width: ${maxWidth})`,
    },
    {
      ...profilePicture.xlg[0].fixed,
      media: `(min-width: ${minWidth})`,
    },
  ];
  return (
    <div id={id} className={styles.container}>
      <div className={styles.imgContainer}>
        <Img
          className={styles.imgPlaceholder}
          fixed={profilePictureSources}
          alt='profile picture'
          style={{'position': 'absolute'}}
        />
        <ImageFadeIn
          className={styles.imgReal}
          src={profilePictureGifUrl}
        />
      </div>
      <div>
        <h2>{fullName}</h2>
      </div>
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
