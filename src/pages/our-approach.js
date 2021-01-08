import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import styles from './our-approach.module.scss';

const OurApproachPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Our Approach"/>
      <h1 className={styles.title}>Our approach</h1>
      <div className={styles.content}>
      </div>
    </Layout>
  );
};

export default OurApproachPage;

OurApproachPage.propTypes = {
  location: PropTypes.object,
};
