import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';


const May2021Event = ({location}) => {
  return (
    <Layout location={location}>
      <SEO
        title="20th of May 2021 - people giving value through data"
      />
      <h1>20th of May 2021</h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc6e41SgP4q0E1M9lxJTXrXFfyhgNqCeZPoOjAWbJe7054eMA/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Layout>
  );
};

export default May2021Event;

May2021Event.propTypes = {
  location: PropTypes.object,
};
