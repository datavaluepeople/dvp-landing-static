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
      <img alt={`${title} icon`} src={`/track-record/${iconFile}`}/>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <span>Previous client: {previousClientText}; {previousClientLink}</span>
      <span>Value delivered: {valueDelivered}</span>
    </div>
  );
};

export default TrackRecordSection;

TrackRecordSection.propTypes = {
  iconFile: PropTypes.String,
  title: PropTypes.String,
  paragraph: PropTypes.String,
  previousClientText: PropTypes.String,
  previousClientLink: PropTypes.String,
  valueDelivered: PropTypes.String,
};
