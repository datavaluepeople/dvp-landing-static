/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import {GatsbyImage} from 'gatsby-plugin-image';

const Bio = ({fullName, bio, avatar, email}) => {
  return (
    <div>
      <GatsbyImage
        alt={fullName || 'Author Picture'}
        image={avatar}
      />
      <p>Written by {fullName}.</p>
      {bio && <p>{bio}</p>}
      {email && <p>email: {email}</p>}
    </div>
  );
};

export default Bio;

Bio.propTypes = {
  fullName: PropTypes.String,
  bio: PropTypes.string,
  avatar: PropTypes.object,
  email: PropTypes.string,
};
