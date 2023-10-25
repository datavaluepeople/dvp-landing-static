import React from 'react';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import {GatsbyImage} from 'gatsby-plugin-image';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import PersonSocialMediaLinks from './social-media-links';
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
  const placeholderImage = gifPlaceHolder.childrenImageSharp[0].gatsbyImageData;
  const minLargeHeight = placeholderImage.height;
  let gifImage;
  if (profilePictureGifUrl) {
    gifImage = (
      <LazyLoadImage
        className={styles.imgReal}
        src={profilePictureGifUrl}
        alt={fullName}
      />
    );
  } else {
    gifImage = '';
  }
  const ratio = (
    sharedPeopleStyles.personImgMdWidth / sharedPeopleStyles.personImgXlgWidth
  );
  const minSmallHeight = placeholderImage.height * ratio;
  const personSlugId = slugify(fullName);

  return (
    <div id={personSlugId} className={styles.container}>
      {/* The Gatsby image that is used as the placeholder
        has style position absolute. This means that sometimes
        the image goes over the height of the flex box.

        We write some min height embedded CSS so that the min height
        is correct for that image.
      */}
      <style dangerouslySetInnerHTML={{__html: `
         #${personSlugId} .${styles.imgContainer} {
           min-height: ${minSmallHeight}px;
         }
         @media (min-width: 1240px) {
            #${personSlugId} .${styles.imgContainer} {
              min-height: ${minLargeHeight}px;
            }
         }
      `}}></style>
      <div className={styles.imgContainer}>
        <GatsbyImage
          className={styles.imgPlaceholder}
          image={placeholderImage}
          style={{'position': 'absolute'}}
          alt={fullName}
        />
        {gifImage}
      </div>
      <div className={styles.textContainer}>
        <h2>{fullName}</h2>
        <h3>{title}</h3>
        <p>{bio}</p>
        <p><b>{email}</b></p>
        <PersonSocialMediaLinks
          className={styles.linkContainer}
          github={github}
          linkedIn={linkedIn}
        />
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
