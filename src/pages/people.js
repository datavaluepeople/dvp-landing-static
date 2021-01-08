import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import Person from '../components/person/person';
import styles from './people.module.scss';

const PeoplePage = ({data, location}) => {
  const people = data.people.edges;
  return (
    <Layout location={location}>
      <SEO title="People"/>
      <h1 className={styles.title}>People</h1>
      <div className={styles.content}>
        {people.map(({key, node}) => {
          return (
            <Person
              key={node.id}
              fullName={node.fullName}
            />
          );
        })}
      </div>
    </Layout>
  );
};

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
          github: PropTypes.string,
          linkedIn: PropTypes.string,
          profilePicture: PropTypes.object,
          profilePictureGif: PropTypes.shape({
            publicURL: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
};

export const PeoplePageQuery = graphql`
query {
  people: allPeopleYaml {
    edges {
      node {
        bio
        email
        fullName
        github
        id
        linkedIn
        profilePicture {
          childrenImageSharp {
            fluid {
              src
            }
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
