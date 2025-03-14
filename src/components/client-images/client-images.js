/**
 * Module will automatically generate client icons.
 * To add an icon:
 * - search for the icon on google
 * - find a png or jpeg that is cropped to fit the icon exactly
 *   as a square or rectangle. White or transparent background needed.
 * - add the icon to the `/content/assets/icons/clients/`
 * - give the name of the file the correct numbering, they are order by name
 * - add the link to the `linkNameMap` object in this file
 * - if you need the image to be smaller you can add a class to
 *    ./client-images.module.scss. See file for more information.
 */
import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';

import * as styles from './client-images.module.scss';

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
    '14_buildup': 'https://howtobuildup.org',
    '15_aisentr': 'https://www.aisentr.com/',
  };
  const data = useStaticQuery(graphql`
    query ClientImages {
      clientImages: allFile(
          filter: {absolutePath: {regex: "/icons/clients/"}},
          sort: {name: ASC}
        ) {
        edges {
          node {
            name
            childImageSharp {
              gray: gatsbyImageData(
                transformOptions: {grayscale: true},
                height: 80,
              )
            }
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      {data.clientImages.edges.map(({key, node}) => {
        return (
          <div
            key={node.name}
            className={`
              ${styles.imgContainer}
              img_${node.name}
            `}
          >
            <a
              href={
                linkNameMap[node.name] ? linkNameMap[node.name] : ''
              }
              target='_blank'
              rel='noreferrer noopener'
            >
              <GatsbyImage
                style={{
                  maxHeight: node.childImageSharp.gray.height + 'px',
                  flexBasis: node.childImageSharp.gray.width + 'px',
                }}
                image={node.childImageSharp.gray}
                objectFit="contain"
              />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ClientImages;
