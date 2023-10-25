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
  /*
   * There is currently a small styling problem that is currently fixed
   * in a hacky way.
   *
   * The people gif is lazy loaded so is added to the HTML after the page
   * has loaded. Futher more there is a placeholder image that has to have
   * position absolute. This means that before the gif is loaded the hight
   * of the flex box is not correct and person containers overlap.
   *
   * To solve this we set the min-height of the placeholder image to be
   * the same as the gif for md and xlg screens.
   *
   * Since the gifs height is related to the width of the image as set in
   * src/styles/shared/people-variables.module.scss.
   *
   * We then work out the actual height computing ratio
   * that the width has been changed for each display screen
   * and multiplying the height by this.
   *
   * The width is set in:
   * src/styles/shared/people.scss
   * and these are passed as variables to the js in the file:
   * src/styles/shared/people-variables.module.scss
   *
   * IMPORTANT: for this to work the placeholder has to be the same
   * width and height as the gif.
   */
  const multiplierXLgWidth = (
    sharedPeopleStyles.personImgXlgWidth / placeholderImage.width
  );
  const minLargeHeight = placeholderImage.height * multiplierXLgWidth;
  const multiplierMdWidth = (
    sharedPeopleStyles.personImgMdWidth / placeholderImage.width
  );
  const minSmallHeight = placeholderImage.height * multiplierMdWidth;
  const personSlugId = slugify(fullName);

  return (
    <div id={personSlugId} className={styles.container}>
      {/* Here we add the styling as inline for the different screens.*/}
      <style dangerouslySetInnerHTML={{__html: `
         @media (min-width: 768px) {
            #${personSlugId} .${styles.imgContainer} {
              min-height: ${minSmallHeight}px;
            }
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
          loading="eager"
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
