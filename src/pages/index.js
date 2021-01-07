import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BuilderFooter from '../components/builder-footer/builder-footer.js';
import WhoWeAre from '../components/who-we-are/who-we-are.js';

import indexStyles from './index.module.scss';

const LandingPageIndex = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="We build bespoke state-of-the-art data-driven systems"/>

      <div className={indexStyles.container}>
        <div className={indexStyles.waveImgContainer}>
          <img alt='Wave Background' src='/img/wave-white/wave.png'/>
        </div>
        <div className={indexStyles.textContainer}>
          <h1 className={indexStyles.title}>
            Are you getting returns from your data &amp; analytics?
            <br/>
            We build data-driven systems with <i>measurable</i> value delivered.
          </h1>
          <WhoWeAre HomePage={true}/>
        </div>
      </div>
      <BuilderFooter SideBarAndIsHome={false} HomePage={true}/>
    </Layout>
  );
};

export default LandingPageIndex;

LandingPageIndex.propTypes = {
  location: PropTypes.object,
};
