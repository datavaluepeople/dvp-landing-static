import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import * as trackRecordStyles from './track-record.module.scss';
import * as sectionStyles from './track-record-section.module.scss';
import ClientImages from '../components/client-images/client-images.js';

const TrackRecordPage = ({location}) => {
  return (
    <Layout location={location}>
      <SEO title="Track Record"/>
      <h1 className={trackRecordStyles.title}>Track record</h1>
      <div className={trackRecordStyles.content}>
        <div className={sectionStyles.container}>
          <h2 className={sectionStyles.title}>
            <img
              className={sectionStyles.icon}
              alt={`Generative AI Solutions icon`}
              src={`/track-record/icon1.svg`}
            />
            Generative AI Solutions
          </h2>
          <p>
            Using LLMs and state-of-the-art techniques
            such as multi-agent systems and advanced prompt
            engineering to create generative AI solutions.
          </p>
          <b>Previous projects:</b>
          <ul className={sectionStyles.projectList}>
            <li>
              <b><a
                href="https://www.aisentr.com/"
                target="_blank"
                rel="noreferrer"
              >AiSentr:</a></b> delivered prototypes using Azure GPTs, RAG and a
              multi-agent framework, to help close an important partnership for
              the business.
            </li>
            <li>
              <b>Automatic Classifiers for Peace:</b> delivered an
              LLM-powered classifier to aid peacebuilders in finding insights
              from social media data. Open source repository and community <a
                href="https://gitlab.com/automatic-classifiers-for-peace/acfp"
                target="_blank"
                rel="noreferrer"
              >here</a>.
            </li>
          </ul>
        </div>
        <div className={sectionStyles.container}>
          <h2 className={sectionStyles.title}>
            <img
              className={sectionStyles.icon}
              alt={`End-to-End AI Platforms icon`}
              src={`/track-record/icon2.svg`}
            />
            End-to-End AI Platforms
          </h2>
          <p>
            Building and delivering complete AI platforms that cover the
            full spectrum from data collection and processing, to data
            visualization, derivation of insights, and automated
            decision-making.
          </p>
          <b>Previous projects:</b>
          <ul className={sectionStyles.projectList}>
            <li>
              <b>
                <a
                  href="https://howtobuildup.org/phoenix/"
                  target="_blank"
                  rel="noreferrer"
                >Phoenix:</a>
              </b> a collaboration between <a
                href="https://howtobuildup.org/"
                target="_blank"
                rel="noreferrer"
              >Build Up</a> and datavaluepeople, has helped 100+ peacebuilding
              organisations to do large scale data driven evidence based
              initiative development through social media analysis.
            </li>
            <li>
              <b><a
                href="https://www.loveholidays.com"
                target="_blank"
                rel="noreferrer"
              >LoveHolidays:</a></b> a data science platform using a core mono
              repo solution that gives structure and value to their data
              science team.
            </li>
          </ul>
        </div>
        <div className={sectionStyles.container}>
          <h2 className={sectionStyles.title}>
            <img
              className={sectionStyles.icon}
              alt={`Advanced ML Modeling icon`}
              src={`/track-record/icon3.svg`}
            />
            Advanced ML Modeling
          </h2>
          <p>
            Building state-of-the-art models that help to make novel and
            strategically important decisions.
          </p>
          <b>Previous projects:</b>
          <ul className={sectionStyles.projectList}>
            <li>
              For <b>a top 10 worldwide pharma company</b>, we developed a
              batch manufacturing optimisation model, able to predict
              end-product quality of the batch production process, enabling
              reactive corrections and optimisations during.
            </li>
            <li>
              <b><a
                href="https://www.loveholidays.com"
                target="_blank"
                rel="noreferrer"
              >LoveHolidays:</a></b> developed a pricing and ad-auction bidding
              model making millions of decisions daily, leveraging
              hierarchical bayesian modelling to get accurate predictions in a
              massively high dimensional, thus highly sparse, prediction space.
            </li>
          </ul>
        </div>
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
};
