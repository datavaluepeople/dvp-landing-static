/*
 * Module will automatically generate grey and correct size image for
 * and icon.
 * To add an icon:
 * - search for the icon on google
 * - find a png that has a transparent background and
 *   is cropped to fit the icon exactly as a square or triangle
 * - add the icon to the `/content/assets/icons/home-clients/`
 * - give the name of the file the correct numbering, they are order by name
 * - add the link to the `linkNameMap` object in this file
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

  return (
    <div className={styles.container}>
      {imagedata.homeClientIcons.edges.map(({node}) => {
        return (
          <a
            key={node.name}
            href={
              linkNameMap[node.name] ? linkNameMap[node.name] : ''
            }
            target='_blank'
            rel='noreferrer noopener'
          >
            <div className={styles.imgContainer}>
              {/* Small screens (up to large) - 60px */}
              <div className={styles.smallScreen}>
                <GatsbyImage
                  image={node.childImageSharp.graySmall}
                  loading='eager'
                />
                <GatsbyImage
                  className={styles.imgColor}
                  image={node.childImageSharp.colorSmall}
                  style={{'position': 'absolute'}}
                  loading='eager'
                />
              </div>

              {/* Large screens and above - 30px */}
              <div className={styles.largeScreen}>
                <GatsbyImage
                  image={node.childImageSharp.grayLarge}
                  loading='eager'
                />
                <GatsbyImage
                  className={styles.imgColor}
                  image={node.childImageSharp.colorLarge}
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
