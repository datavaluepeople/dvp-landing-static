import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BuilderFooter from '../components/builder-footer/builder-footer.js';
import WhoWeAre from '../components/who-we-are/who-we-are.js';
import Wave from '../components/wave/wave';

import * as indexStyles from './index.module.scss';

const LandingPageIndex = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="We build bespoke state-of-the-art data-driven systems"/>
      <div className={indexStyles.container}>
        <div className={indexStyles.textContainer}>
          <h1 className={indexStyles.title}>
            We build bespoke state-of-the-art machine
            learning systems that deliver value you can measure.
          </h1>
          <WhoWeAre HomePage={true}/>
        </div>
      </div>
      <Wave />
      <BuilderFooter SideBarAndIsHome={false} HomePage={true}/>
    </Layout>
  );
};

export default LandingPageIndex;

LandingPageIndex.propTypes = {
  location: PropTypes.object,
};
