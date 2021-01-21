/**
 * Module will automatically generate client icons.
 * To add an icon:
 * - search for the icon on google
 * - find a png that has a transparent background and
 *   is cropped to fit the icon exactly as a square or rectangle
 * - add the icon to the `/content/assets/icons/clients/`
 * - give the name of the file the correct numbering, they are order by name
 * - add the link to the `linkNameMap` object in this file
 */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import styles from './client-images.module.scss';

const ClientImages = ({}) => {
  const linkNameMap = {
    '01_oor': 'https://www.orr.gov.uk/',
    '02_nhs': 'https://www.nhs.uk',
    '03_octopus': 'https://octopus.energy/',
    '04_santafe': 'https://www.santafe.edu/',
    '05_loveholidays': 'https://www.loveholidays.com',
    '06_cartrawler': 'https://www.cartrawler.com/ct/?',
    '07_borninbradford': 'https://borninbradford.nhs.uk',
    '08_abiggercircle': 'https://www.abiggercircle.com',
    '09_plugify': 'https://www.plugify.nl',
    '10_equidam': 'https://www.equidam.com',
    '11_cabdyn': 'https://www.cabdyn.ox.ac.uk/complexity_home.asp',
    '12_oxfordmartin': 'https://www.oxfordmartin.ox.ac.uk',
    '13_ineteconomics': 'https://www.ineteconomics.org',
  };
  const data = useStaticQuery(graphql`
    query ClientImages {
      clientImages: allFile(
          filter: {absolutePath: {regex: "/icons/clients/"}},
          sort: {fields: name}
        ) {
        edges {
          node {
            name
            childImageSharp {
              gray: fixed(height: 60, grayscale: true){
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      {data.clientImages.edges.map(({key, node}) => {
        console.log(node);
        return (
          <div
            key={node.name}
            className={styles.imgContainer}
          >
            <a
              href={
                linkNameMap[node.name] ? linkNameMap[node.name] : ''
              }
              target='_blank'
              rel='noreferrer noopener'
            >
              <Img
                className={`
                  ${styles.imgGray}
                  ${node.name}
                `}
                fixed={node.childImageSharp.gray}
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ClientImages;
