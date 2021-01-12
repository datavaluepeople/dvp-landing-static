import React from 'react';
import PropTypes from 'prop-types';

import chatWithUsStyles from './chat-with-us.module.scss';

const ChatWithUs = ({isHome}) => {
  return (
    <div className={chatWithUsStyles.lineContainer}>
      <div className={`
        ${chatWithUsStyles.container}
        ${isHome ? chatWithUsStyles.home : ''}
        `}
      >
        <b>Chat With Us</b>
        <img
          alt='Chat With Us'
          src='/img/chat-icon/chat-icon.png'
        />
      </div>
    </div>
  );
};

export default ChatWithUs;

ChatWithUs.propTypes = {
  isHome: PropTypes.bool,
};
