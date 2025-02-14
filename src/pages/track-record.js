import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import * as trackRecordStyles from './track-record.module.scss';
import ClientImages from '../components/client-images/client-images.js';

const TrackRecordPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
      <div className={trackRecordStyles.content}>
        <section className={trackRecordStyles.pastClientSection}>
          <h2><mark>Past Clients</mark></h2>
          <ClientImages />
        </section>
      </div>
    </Layout>
  );
};

export default TrackRecordPage;

TrackRecordPage.propTypes = {
  location: PropTypes.object,
};
