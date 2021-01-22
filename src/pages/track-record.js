import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import
TrackRecordSection
  from '../components/track-record-section/track-record-section';

import trackRecordStyles from './track-record.module.scss';
import ClientImages from '../components/client-images/client-images.js';

const TrackRecordPage = ({data, location}) => {
  /*
   * To change the track record sections text change
   * content/data/track-record-sections.yaml
   * allTrackRecordSectionsYaml queries the file
   * Query is at bottom of the page
   */
  const sections = data.allTrackRecordSectionsYaml.edges;
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
      <div className={trackRecordStyles.content}>
        {sections.map(({key, node}) => {
          return (
            <TrackRecordSection
              key={node.id}
              trackRecord={node}
            />
          );
        })}
        <section className={trackRecordStyles.pastClientSection}>
          <h2><mark>Past Clients</mark></h2>
          <ClientImages />
        </section>
      </div>
    </Layout>
  );
};

export default TrackRecordPage;

TrackRecordPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    allTrackRecordSectionsYaml: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.string,
          iconFile: PropTypes.string,
          title: PropTypes.string,
          paragraph: PropTypes.string,
          previousClientText: PropTypes.string,
          previousClientLink: PropTypes.shape({
            text: PropTypes.string,
            href: PropTypes.string,
          }),
          valueDelivered: PropTypes.string,
        }),
      })),
    }),
  }),
};

export const query = graphql`
query {
  allTrackRecordSectionsYaml {
    edges {
      node {
        id
        iconFile
        paragraph
        previousClientLink {
          text
          href
        }
        previousClientText
        title
        valueDelivered
      }
    }
  }
}
`;
