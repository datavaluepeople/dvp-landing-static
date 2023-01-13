/**
 * Discussion Link
 */
import React from 'react';
import PropTypes from 'prop-types';

const DiscussionLink = ({linkType, link}) => {
  if (link && link != "") {
    return (
      <a
        target="_blank"
        rel="noreferrer noopener"
        href={link}
        style={{"text-decoration": "underline"}}
      >
        <p>Discuss on {linkType}</p>
      </a>
    );
  } else {
    return null;
  }
};

export default DiscussionLink;

DiscussionLink.defaultProps = {
   link: ""
}

DiscussionLink.propTypes = {
  linkType: PropTypes.String,
  link: PropTypes.String,
};
