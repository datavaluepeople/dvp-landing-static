import React from 'react';
import PropTypes from 'prop-types';

import styles from './track-record-section.module.scss';

const TrackRecordSection = (
    {
      iconFile,
      title,
      paragraph,
      previousClientText,
      previousClientLink,
      valueDelivered,
    },
) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img
          className={styles.icon}
          alt={`${title} icon`}
          src={`/track-record/${iconFile}`}
        />
        {title}
      </h2>
      <p>{paragraph}</p>
      <p>
        <b>Previous client:</b> {previousClientText};&nbsp;
        {previousClientLink &&
          <a href={previousClientLink}>{previousClientLink}</a>
        }
        <br/>
        <b>Value delivered:</b> {valueDelivered}
      </p>
    </div>
  );
};

export default TrackRecordSection;

TrackRecordSection.propTypes = {
  iconFile: PropTypes.string,
  title: PropTypes.string,
  paragraph: PropTypes.string,
  previousClientText: PropTypes.string,
  previousClientLink: PropTypes.string,
  valueDelivered: PropTypes.string,
};
