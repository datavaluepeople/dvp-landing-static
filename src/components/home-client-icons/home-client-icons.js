/*
 * Module will automatically generate grey and correct size image for
 * and icon.
 * To add an icon:
 * - search for the icon on google
 * - find a png that has a transparent background and
 *   is cropped to fit the icon exactly as a square or triangle
 * - add the icon to the `/content/assets/icons/home-clients/`
 * - for each logo, create two versions:
 *   - `{number}_{name}_small.png` for 60px (small screens)
 *   - `{number}_{name}_large.png` for 30px (large screens)
 *   - example: `1_swiss_small.png` and `1_swiss_large.png`
 * - add the link to the `linkNameMap` object in this file using the base name
 */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import * as styles from './home-client-icons.module.scss';

const HomeClientIcons = ({}) => {
  const linkNameMap = {
    '1_swiss': 'https://www.admin.ch/gov/en/start/departments/department-foreign-affairs-fdfa.html',
    '2_adidas': 'https://www.adidas.com/',
    '3_pantone': 'https://www.pantone.com/',
    '4_nhs': 'https://www.nhs.uk/',
    '5_alan_turing_institute': 'https://www.turing.ac.uk/',
  };

  const imagedata = useStaticQuery(graphql`
    query HomeClientIcons {
      homeClientIcons: allFile(
          filter: {absolutePath: {regex: "/icons/homeclients/"}},
          sort: {name: ASC}
        ) {
        edges {
          node {
            name
            childImageSharp {
              graySmall: gatsbyImageData(
                layout: FIXED,
                transformOptions: {grayscale: true},
                width: 60,
                placeholder: BLURRED,
              ),
              grayLarge: gatsbyImageData(
                layout: FIXED,
                transformOptions: {grayscale: true},
                width: 30,
                placeholder: BLURRED,
              ),
              colorSmall: gatsbyImageData(
                layout: FIXED,
                width: 60,
                placeholder: NONE
              ),
              colorLarge: gatsbyImageData(
                layout: FIXED,
                width: 30,
                placeholder: NONE
              ),
            }
          }
        }
      }
    }
  `);

  // Group images by base name (without _small/_large suffix)
  const groupedImages = imagedata.homeClientIcons.edges.reduce((acc, {node}) => {
    const baseName = node.name.replace(/_small|_large$/, '');
    const size = node.name.includes('_small') ? 'small' : 'large';

    if (!acc[baseName]) {
      acc[baseName] = {};
    }
    acc[baseName][size] = node;
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      {Object.entries(groupedImages).map(([baseName, images]) => {
        // Only render if we have both small and large versions
        if (!images.small || !images.large) {
          console.warn(`Missing size variant for ${baseName}. Need both _small and _large versions.`);
          return null;
        }

        return (
          <a
            key={baseName}
            href={linkNameMap[baseName] || ''}
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className={styles.imgContainer}>
              {/* Small screens (up to large) - 60px */}
              <div className={styles.smallScreen}>
                <GatsbyImage
                  image={images.small.childImageSharp.graySmall}
                  loading='eager'
                />
                <GatsbyImage
                  className={styles.imgColor}
                  image={images.small.childImageSharp.colorSmall}
                  style={{'position': 'absolute'}}
                  loading='eager'
                />
              </div>

              {/* Large screens and above - 30px */}
              <div className={styles.largeScreen}>
                <GatsbyImage
                  image={images.large.childImageSharp.grayLarge}
                  loading='eager'
                />
                <GatsbyImage
                  className={styles.imgColor}
                  image={images.large.childImageSharp.colorLarge}
                  style={{'position': 'absolute'}}
                  loading='eager'
                />
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default HomeClientIcons;
