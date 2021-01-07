import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import
TrackRecordSection
  from '../components/track-record-section/track-record-section';

import trackRecordStyles from './track-record.module.scss';

const TrackRecordPage = ({data, location}) => {
  /*
   * To change the track record sections text change
   * content/json-config/track-record-sections.json
   * allTrackRecordSectionsJson queries the file
   * Query is at bottom of the page
   */
  const sections = data.allTrackRecordSectionsJson.edges;
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
      <div className={trackRecordStyles.content}>
        {sections.map(({key, node}) => {
          return (
            <TrackRecordSection
              key={node.id}
              iconFile={node.iconFile}
              title={node.title}
              paragraph={node.paragraph}
              previousClientText={node.previousClientText}
              previousClientLink={node.previousClientLink}
              valueDelivered={node.valueDelivered}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default TrackRecordPage;

TrackRecordPage.propTypes = {
  location: PropTypes.object,
  data: PropTypes.shape({
    allTrackRecordSectionsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          id: PropTypes.String,
          iconFile: PropTypes.String,
          title: PropTypes.String,
          paragraph: PropTypes.String,
          previousClientText: PropTypes.String,
          previousClientLink: PropTypes.String,
          valueDelivered: PropTypes.String,
        }),
      })),
    }),
  }),
};

export const query = graphql`
query {
  allTrackRecordSectionsJson {
    edges {
      node {
        id
        iconFile
        paragraph
        previousClientLink
        previousClientText
        title
        valueDelivered
      }
    }
  }
}
`;
