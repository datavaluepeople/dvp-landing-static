/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = (
    {description, meta, title, ogImage, ogImageWidth, ogImageHeight, pathname},
) => {
  const {site} = useStaticQuery(
      graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `,
  );

  const {title: siteTitle, description: siteDescription, siteUrl} = site.siteMetadata;
  const metaDescription = description || siteDescription;
  const absoluteOgImage = ogImage?.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  const pageUrl = pathname ? `${siteUrl}${pathname}` : siteUrl;

  return (
    <>
      <title>{title} | {siteTitle}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map(({name, content, property}, i) => (
        <meta
          key={i}
          name={name}
          property={property}
          content={content}
        />
      ))}
    </>
  );
};

SEO.defaultProps = {
  meta: [],
  description: ``,
  ogImage: `/img/datavaluepeople-og-image.png`,
  ogImageWidth: `1200`,
  ogImageHeight: `630`,
  pathname: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.string,
  ogImageHeight: PropTypes.string,
  pathname: PropTypes.string,
};

export default SEO;
