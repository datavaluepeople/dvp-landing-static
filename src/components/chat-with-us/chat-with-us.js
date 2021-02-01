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
        <span className={chatWithUsStyles.text}>Chat With Us</span>
        <img
          alt='Chat With Us'
          src='/img/chat_icon.svg'
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
