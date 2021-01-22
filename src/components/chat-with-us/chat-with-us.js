import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import chatWithUsStyles from './chat-with-us.module.scss';

const ChatWithUs = ({isHome}) => {
  const data = useStaticQuery(graphql`
    query ChatIcon {
      chatIcon: file(
          absolutePath: {regex: "/icons/chat-icon/"},
        ) {
        name
        childImageSharp {
          icon: fixed(width: 30){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={chatWithUsStyles.lineContainer}>
      <div className={`
        ${chatWithUsStyles.container}
        ${isHome ? chatWithUsStyles.home : ''}
        `}
      >
        <b>Chat With Us</b>
        <Img
          alt='Chat With Us'
          fixed={data.chatIcon.childImageSharp.icon}
          className={chatWithUsStyles.imgContainer}
        />
      </div>
    </div>
  );
};

export default ChatWithUs;

ChatWithUs.propTypes = {
  isHome: PropTypes.bool,
};
