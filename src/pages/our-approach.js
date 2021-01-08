import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import styles from './our-approach.module.scss';

const OurApproachPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Our Approach"/>
      <h1 className={styles.title}>Our approach</h1>
      <div className={styles.content}>
        <p>
          Whether your priorities are customer acquisition,
          revenue, reducing costs, or profit;
          we’re not satisfied until we can tell you exactly
          how much value we’ve generated for you.
        </p>
        <h2><mark>Are you our future partner?</mark></h2>
        <p>Get in touch at <a>everyone@datavaluepeople.com</a></p>
        <span>
          For more detailed information on our services,
          you can view our sales deck here
        </span>

        <p>Hire us to advise, analyse, and automate.</p>
        <h2>The ways we work:</h2>
        <h3>Scoping & Consulting</h3>
        <p>
          On-site analysis of the organisation’s current data leverage methods,
          and producing recommendations on likely high-impact projects.
          <br/>
          Timeline:Single sprint
        </p>
        <h3>Proof of Value</h3>
        <p>
          Combining initial proof-of-concept machine learning modelling,
          with evidence based and data led investigation,
          we establish the expected value & ROI of the complete end system.
          <br/>
          Timeline: Multiple sprints over 1-2 months
        </p>
        <h3>Automated Data-driven Systems</h3>
        <p>
          Full hands-on development,
          in collaboration with internal employees, we build,
          deliver, and handover, complete end-to-end systems,
          that through machine learning and automated-decision-making
          deliver measurable and long lasting value.
          <br/>
          Timeline: Iterative sprints over 2+ months
        </p>
      </div>
    </Layout>
  );
};

export default OurApproachPage;

OurApproachPage.propTypes = {
  location: PropTypes.object,
};
