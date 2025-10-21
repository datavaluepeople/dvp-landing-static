import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = ({location}) => {
  return (
    <Layout location={location}>
      <h1>Not Found</h1>
      <p>This page does not exist...</p>
    </Layout>
  );
};

export const Head = () => <SEO title="404: Not Found" />;

export default NotFoundPage;

NotFoundPage.propTypes = {
  location: PropTypes.object,
};
