import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Person from '../components/person/person';
import * as styles from './people.module.scss';

const PeoplePage = ({data, location}) => {
  /*
   * To change the people
   * content/data/people.yaml
   * allPeopleYaml queries the file
   * Query is at bottom of the page
   */
  const people = data.people.edges;
  return (
    <Layout location={location}>
      <h1 className={styles.title}>People</h1>
      <div className={styles.content}>
        {people.map(({key, node}) => {
          return (
            <Person
              key={node.id}
              id={node.id}
              fullName={node.fullName}
              title={node.title}
              bio={node.bio}
              email={node.email}
              linkedIn={node.linkedIn}
              github={node.github}
              gifPlaceHolder={node.gifPlaceHolder}
              profilePictureGifUrl={
                node.profilePictureGif ? node.profilePictureGif.publicURL : ''
              }
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const Head = () => <SEO title="People"/>;

export default PeoplePage;

PeoplePage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    people: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          bio: PropTypes.string,
          title: PropTypes.string,
          fullName: PropTypes.string,
          email: PropTypes.string,
          github: PropTypes.string,
          linkedIn: PropTypes.string,
          gifPlaceHolder: PropTypes.object,
          profilePictureGif: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
};

/*
 * The fixed width must be the same as in
 * ../styles/shared/people.scss
 */
export const PeoplePageQuery = graphql`
query {
  people: allPeopleYaml {
    edges {
      node {
        id
        fullName
        title
        bio
        email
        github
        linkedIn
        gifPlaceHolder {
          childrenImageSharp {
            gatsbyImageData(
              placeholder: BLURRED,
              breakpoints: [768, 1024, 1240]
            )
          }
        }
        profilePictureGif {
          publicURL
        }
      }
    }
  }
}
`;
