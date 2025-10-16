/**
 * SEO component that derives the current pathname from the router.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';
import {useLocation} from '@reach/router';

const SEO = ({
  description,
  meta,
  title,
  ogImage,
  ogImageWidth,
  ogImageHeight,
}) => {
  const location = useLocation() || {};

  const {site} = useStaticQuery(graphql`
    query SeoSiteMeta {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title: siteTitle,
    description: siteDescription,
    siteUrl,
  } = site.siteMetadata;

  const metaDescription = description || siteDescription;

  const absoluteOgImage =
    ogImage && ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const pageUrl = `${siteUrl}${location.pathname || ''}`;

  return (
    <>
      <title>{title} | {siteTitle}</title>
      <link rel="canonical" href={pageUrl} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      {absoluteOgImage ? <meta property="og:image" content={absoluteOgImage} /> : null}
      {ogImageWidth ? <meta property="og:image:width" content={ogImageWidth} /> : null}
      {ogImageHeight ? <meta property="og:image:height" content={ogImageHeight} /> : null}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {meta.map(({name, content, property}, i) => (
        <meta key={i} name={name} property={property} content={content} />
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
};

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  ogImageWidth: PropTypes.string,
  ogImageHeight: PropTypes.string,
};

export default SEO;
