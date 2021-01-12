import React from 'react';

import chatWithUsStyles from './chat-with-us.module.scss';

const ChatWithUs = () => {
  return (
    <div className={chatWithUsStyles.lineContainer}>
      <div className={chatWithUsStyles.container}>
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

