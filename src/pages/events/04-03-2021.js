import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';


const March2021Event = ({location}) => {
  return (
    <Layout location={location}>
      <SEO
        title="4th of March 2021 - people giving value through data"
      />
      <h1>4th of March 2021 - datavaluepeople sessions</h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfMwHZHdpr7Q4i7n76A8wwgRWT_oQISyuGxNqF4ehb54-tQ7w/viewform?embedded=true" width="100%" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Layout>
  );
};

export default March2021Event;

March2021Event.propTypes = {
  location: PropTypes.object,
};
