import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import * as styles from './person.module.scss';
import * as sharedPeopleStyles from
  '../../styles/shared/people-variables.module.scss';


const Person = (
    {
      id,
      bio,
      title,
      fullName,
      email,
      github,
      linkedIn,
      gifPlaceHolder,
      profilePictureGifUrl,
    },
) => {
  const maxWidth = sharedPeopleStyles.personImgXlgMax;
  const minWidth = sharedPeopleStyles.personImgXlgMin;
  let gifPlaceHolderSources = '';
  if (gifPlaceHolder) {
    gifPlaceHolderSources = [
      {
        ...gifPlaceHolder.md[0].fixed,
        media: `(max-width: ${maxWidth})`,
      },
      {
        ...gifPlaceHolder.xlg[0].fixed,
        media: `(min-width: ${minWidth})`,
      },
    ];
  }
  return (
    <div id={id} className={styles.container}>
      <div className={styles.imgContainer}>
        <Img
          className={styles.imgPlaceholder}
          fixed={gifPlaceHolderSources}
          alt='profile picture'
          style={{'position': 'absolute'}}
        />
        <LazyLoadImage
          className={styles.imgReal}
          src={profilePictureGifUrl ? profilePictureGifUrl : ''}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{fullName}</h2>
        <h3>{title}</h3>
        <p>{bio}</p>
        <p><b>{email}</b></p>
        <div className={styles.linkContainer}>
          <a
            href={`https://www.linkedin.com/in/${linkedIn}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt='linkedIn icon'
              src='/img/icons/linkedin.svg'
            />
          </a>
          <a
            href={`https://github.com/${github}/`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              alt='github icon'
              src='/img/icons/github.svg'
            />
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
  gifPlaceHolder: PropTypes.object,
  profilePictureGifUrl: PropTypes.string,
};
