import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>This page does not exist...</p>
    </Layout>
  );
};

export default NotFoundPage;

NotFoundPage.propTypes = {
  location: PropTypes.object,
};
