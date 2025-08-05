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
    '15_swiss': 'https://www.python.org/',
    '16_adidas': 'https://pytorch.org/',
    '17_pantone': 'https://www.docker.com/',
    '18_nhs': 'https://airflow.apache.org/',
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
              gray: gatsbyImageData(
                layout: FIXED,
                transformOptions: {grayscale: true},
                width: 60,
                placeholder: BLURRED,
              ),
              color: gatsbyImageData(
                layout: FIXED,
                width: 60,
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
      {imagedata.homeClientIcons.edges.map(({key, node}) => {
        return (
          <a
            key={node.name}
            href={
              linkNameMap[node.name] ? linkNameMap[node.name] : ''
            }
            target='_blank'
            rel='noreferrer noopener'
          >
            <div
              className={styles.imgContainer}
            >
              <GatsbyImage
                image={node.childImageSharp.gray}
                loading='eager'
              />
              <GatsbyImage
                className={styles.imgColor}
                image={node.childImageSharp.color}
                style={{'position': 'absolute'}}
                loading='eager'
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default HomeClientIcons;
