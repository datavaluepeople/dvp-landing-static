import React from 'react';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StylesPage = ({data, location}) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Style guide pages" />
      <h1>Styles Guide Page</h1>
      <p>Testing text for the styling guide. abcdefghigklenop.</p>
    </Layout>
  );
};

export default StylesPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;


StylesPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
  location: PropTypes.string,
};
