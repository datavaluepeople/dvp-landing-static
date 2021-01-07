import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import trackRecordStyles from './track-record.module.scss';

const TrackRecordPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
    </Layout>
  );
};

export default TrackRecordPage;

TrackRecordPage.propTypes = {
  location: PropTypes.object,
};
