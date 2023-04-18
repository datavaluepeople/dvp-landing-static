import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import HypeAnimation from '../components/hype-animation';

import * as styles from './our-approach.module.scss';

const OurApproachPage = ({location}) => {
  const approachIconHeight = '40px';
  const approachIconWidth = '40px';
  return (
    <Layout location={location}>
      <SEO title="Our Approach"/>
      <h1 className={styles.title}>Our approach</h1>
      <div className={styles.content}>
        <p className={styles.pLarge}>
          Whether your priorities are customer acquisition,
          revenue, reducing costs, or profit;
          we’re not satisfied until we can tell you exactly
          how much value we’ve generated for you.
        </p>
        <h2 id="chat-with-us"><mark>Are you our future partner?</mark></h2>
        <p className={styles.pLarge}>
          Get in touch at everyone@datavaluepeople.com
          <br/>
          <span className={styles.pGrey}>
            For more detailed information on our services,
            you can view our sales
            deck <a href='/downloads/datavaluepeople-sales-deck.pdf'>here</a>
          </span>
        </p>
        <section className={styles.wayWeWorkSection}>
          <span className={styles.hireUs}>
            Hire us to advise, analyse, and automate.
          </span>
          <h2 className={styles.wayWeWork}>The ways we work:</h2>
          <h3>
            <HypeAnimation
              name={'approach_icon_1'}
              display='inline'
              height={approachIconHeight}
              width={approachIconWidth}
              className={styles.approachIcons}
            />
            Scoping & Consulting
          </h3>
          <p>
            On-site analysis of the organisation’s current data
            leverage methods,
            and producing recommendations on likely high-impact projects.
            <br/>
            <b>Timeline:</b> Single sprint
          </p>
          <h3>
            <HypeAnimation
              name={'approach_icon_2'}
              display='inline'
              height={approachIconHeight}
              width={approachIconWidth}
              className={styles.approachIcons}
            />
            Proof of Value
          </h3>
          <p>
            Combining initial proof-of-concept machine learning modelling,
            with evidence based and data led investigation,
            we establish the expected value & ROI of the complete end system.
            <br/>
            <b>Timeline:</b> Multiple sprints over 1-2 months
          </p>
          <h3>
            <HypeAnimation
              name={'approach_icon_3'}
              display='inline'
              height={approachIconHeight}
              width={approachIconWidth}
              className={styles.approachIcons}
            />
            Automated Machine Learning Systems
          </h3>
          <p>
            Full hands-on development,
            in collaboration with internal employees, we build,
            deliver, and handover, complete end-to-end systems,
            that through machine learning and automated-decision-making
            deliver measurable and long lasting value.
            <br/>
            <b>Timeline:</b> Iterative sprints over 2+ months
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default OurApproachPage;

OurApproachPage.propTypes = {
  location: PropTypes.object,
};
