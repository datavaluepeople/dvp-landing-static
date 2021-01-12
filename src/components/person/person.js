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
      email,
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
      <div className={styles.textContainer}>
        <h2>{fullName}</h2>
        <h3>{title}</h3>
        <p>{bio}</p>
        <p>{email}</p>
        <div>
          <a
            href={`https://www.linkedin.com/in/${linkedIn}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            href={`https://github.com/${github}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>

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
  email: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
  profilePicture: PropTypes.object,
  profilePictureGifUrl: PropTypes.string,
};
