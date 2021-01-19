import React from 'react';
import PropTypes from 'prop-types';

import styles from './track-record-section.module.scss';

const TrackRecordSection = (trackRecordObject) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img
          className={styles.icon}
          alt={`${trackRecordObject.title} icon`}
          src={`/track-record/${trackRecordObject.iconFile}`}
        />
        {trackRecordObject.title}
      </h2>
      <p>{trackRecordObject.paragraph}</p>
      <p>
        <b>Previous client:</b> {trackRecordObject.previousClientText};&nbsp;
        {trackRecordObject.previousClientLink &&
          <a
            href={trackRecordObject.previousClientLink}
          >
            {trackRecordObject.previousClientLink}
          </a>
        }
        <br/>
        Hello
        <b>Value delivered:</b> {trackRecordObject.valueDelivered}
      </p>
    </div>
  );
};

export default TrackRecordSection;

TrackRecordSection.propTypes = {
  trackRecordObject: PropTypes.shape({
    id: PropTypes.string,
    iconFile: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    previousClientText: PropTypes.string,
    previousClientLink: PropTypes.string,
    valueDelivered: PropTypes.string,
  }),
};
