import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';


const March2021Event = ({location}) => {
  return (
    <Layout location={location}>
      <SEO
        title="4th of March 2021 - people giving value through data"
      />
      <h1>4th of March 2021 - datavaluepeople sessions</h1>
      <h2 style={{marginBottom: '3rem'}}>people giving value through data</h2>
      <p style={{marginBottom: '6rem'}}>
        Join the talks from members of datavaluepeople!
        <br/>
        <br/>
        Google meet link <a
          href="https://meet.google.com/irb-noqf-vti"
          rel="noreferrer noopener"
          target="_blank"
          dangerouslySetInnerHTML={{__html: `https://meet.google.com/irb-noqf-vti`}}
        ></a>
      </p>
      <h3>Session outline (CET):</h3>
      <p>
        09:00 - 09:10 - intro + datavaluepeople who are we and what we do
        <br/>
        <br/>
        09:10 - 09:30 - An introduction to platforms: the components, the challenges and where to start
        <br/>
          09:30 - 09:40 - Questions/break
        <br/>
        <br/>
        09:40 - 10:00 - Data platforms; monolith or microservices?
        <br/>
          10:00 - 10:10 - Questions/break
        <br/>
        10:10 - 10:20 - Longer Break
        <br/>
        <br/>
        10:20 - 10:40 - Recommender systems from ideation to production
        <br/>
          10:40 - 10:50 - Questions/break
        <br/>
        <br/>
        10:50 - 11:10 - Case study: Anomaly Detection System
        <br/>
          11:10 - 11:20 - Questions/break
        <br/>
        <br/>
        11:20 - 11:25 - Finish up
        <br/>
        11:25 - 12:00 - Breakouts for each member
        <br/>
        <br/>
      </p>
      <h3 style={{marginTop: '2rem'}}>
        Feel free to drop in for the sessions that interest you most.
      </h3>
      <p>
        datavaluepeople are a select team of highly technical data professionals, who build bespoke end-to-end machine learning systems. We're running a morning of sessions for Strategy Insight attendees covering some practical methods and strategies for delivering successful data science projects.
      </p>
    </Layout>
  );
};

export default March2021Event;

March2021Event.propTypes = {
  location: PropTypes.object,
};
