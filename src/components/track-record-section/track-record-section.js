import React from 'react';
import PropTypes from 'prop-types';

import styles from './track-record-section.module.scss';

const TrackRecordSection = ({trackRecord}) => {
  console.log(trackRecord);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <img
          className={styles.icon}
          alt={`${trackRecord.title} icon`}
          src={`/track-record/${trackRecord.iconFile}`}
        />
        {trackRecord.title}
      </h2>
      <p>{trackRecord.paragraph}</p>
      <p>
        <b>Previous client:</b> {trackRecord.previousClientText};&nbsp;
        {trackRecord.previousClientLink &&
          <a
            href={trackRecord.previousClientLink.text}
          >
            {trackRecord.previousClientLink.text}
          </a>
        }
        <br/>
        <b>Value delivered:</b> {trackRecord.valueDelivered}
      </p>
    </div>
  );
};

export default TrackRecordSection;

TrackRecordSection.propTypes = {
  trackRecord: PropTypes.shape({
    id: PropTypes.string,
    iconFile: PropTypes.string,
    title: PropTypes.string,
    paragraph: PropTypes.string,
    previousClientText: PropTypes.string,
    previousClientLink: PropTypes.shape({
      text: PropTypes.string,
    }),
    valueDelivered: PropTypes.string,
  }),
};
