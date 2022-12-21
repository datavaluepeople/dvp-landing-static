/**
 * Social media links of a person.
 */
import React from 'react';
import PropTypes from 'prop-types';

const PersonSocialMediaLinks = ({className, github, linkedIn}) => {
  return (
    <div className={className}>
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
  );
};

export default PersonSocialMediaLinks;

PersonSocialMediaLinks.propTypes = {
  className: PropTypes.String,
  github: PropTypes.String,
  linkedIn: PropTypes.String,
};
