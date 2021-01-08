import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import styles from './people.module.scss';

const PeoplePage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="People"/>
      <h1 className={styles.title}>People</h1>
      <div className={styles.content}>
      </div>
    </Layout>
  );
};

export default PeoplePage;

PeoplePage.propTypes = {
  location: PropTypes.object,
};
