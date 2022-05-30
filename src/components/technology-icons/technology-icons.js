/*
 * Module will automatically generate grey and correct size image for
 * and icon.
 * To add an icon:
 * - search for the icon on google
 * - find a png that has a transparent background and
 *   is cropped to fit the icon exactly as a square or triangle
 * - add the icon to the `/content/assets/icons/technologies/`
 * - give the name of the file the correct numbering, they are order by name
 * - add the link to the `linkNameMap` object in this file
 */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import * as styles from './technology-icons.module.scss';

const TechonolgyIcons = ({}) => {
  const linkNameMap = {
    '1_python': 'https://www.python.org/',
    '2_pytorch': 'https://pytorch.org/',
    '3_docker': 'https://www.docker.com/',
    '4_airflow': 'https://airflow.apache.org/',
    '5_kubernetes': 'https://kubernetes.io/',
    '6_googlecloudplatform': 'https://cloud.google.com/',
    '7_reactjs': 'https://reactjs.org/',
    '8_postgresql': 'https://www.postgresql.org/',
    '9_terraform': 'https://terraform.io/',
  };
  const data = useStaticQuery(graphql`
    query TechIcons {
      techIcons: allFile(
          filter: {absolutePath: {regex: "/icons/technologies/"}},
          sort: {fields: name}
        ) {
        edges {
          node {
            name
            childImageSharp {
              gray: gatsbyImageData(
                layout: FIXED,
                transformOptions: {grayscale: true},
                width: 30
              ),
              color: gatsbyImageData(layout: FIXED, width: 30),
            }
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      {data.techIcons.edges.map(({key, node}) => {
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
              />
              <GatsbyImage
                className={styles.imgColor}
                image={node.childImageSharp.color}
                style={{'position': 'absolute'}}
              />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default TechonolgyIcons;
