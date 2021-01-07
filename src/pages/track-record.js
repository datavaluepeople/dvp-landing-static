import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import TrackRecordSection from '../components/track-record-section/track-record-section';

import trackRecordStyles from './track-record.module.scss';

const TrackRecordPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
      <div className={trackRecordStyles.content}>
        <TrackRecordSection
          iconFile='icon1.svg'
          title={'Autonomous Optimisation'}
          paragraph={'Using state-of-the-art reinforcement learning, we make autonomous optimised pricing decisions at scale in near real-time. Our algorithms balance exploiting well performing strategies vs exploring new ones.'}
          previousClientText={'B2C car rental resale company'}
          previousClientLink={'www.cartrawler.com'}
          valueDelivered={'double-figure uplift (%) in revenue, sales, & profit on large sections of business traffic.'}
        />
      </div>
    </Layout>
  );
};

export default TrackRecordPage;

TrackRecordPage.propTypes = {
  location: PropTypes.object,
};
