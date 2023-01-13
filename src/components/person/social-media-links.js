/**
 * Social media links of a person.
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Theses styles are needed to make sure the
 * parent elements [a|div] are the same height
 * as the image.
 */
const generalStyles = {
  lineHeight: 0,
  display: "inline-block"
}


const PersonSocialMediaLinks = ({className, github, linkedIn}) => {
  return (
    <div className={className} style={generalStyles}>
      <a
        style={generalStyles}
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
        style={generalStyles}
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
  );
};

export default PersonSocialMediaLinks;

PersonSocialMediaLinks.propTypes = {
  className: PropTypes.string,
  github: PropTypes.string,
  linkedIn: PropTypes.string,
};
