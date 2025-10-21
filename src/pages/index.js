import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BuilderFooter from '../components/builder-footer/builder-footer.js';
import WhoWeAreUsp from '../components/who-we-are-usp/who-we-are-usp.js';
import Wave from '../components/wave/wave';

import * as indexStyles from './index.module.scss';

const LandingPageIndex = ({location}) => {
  return (
    <Layout location={location}>
      <div className={indexStyles.container}>
        <div className={indexStyles.textContainer}>
          <h1 className={indexStyles.title}>
            We build bespoke state-of-the-art artificial intelligence
            systems that deliver value you can measure.
          </h1>
          <WhoWeAreUsp HomePage={true}/>
        </div>
      </div>
      <Wave />
      <BuilderFooter SideBarAndIsHome={false} HomePage={true}/>
    </Layout>
  );
};

export const Head = () => <SEO title="We build bespoke state-of-the-art artificial intelligence systems"/>;

export default LandingPageIndex;

LandingPageIndex.propTypes = {
  location: PropTypes.object,
};
