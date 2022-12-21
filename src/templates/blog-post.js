import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import ShortBio from '../components/blog-bio/short-bio';
import Bio from '../components/blog-bio/bio';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

import * as styles from './blog-post.module.scss';

const BlogPostTemplate = ({data, location}) => {
  const post = data.markdownRemark;
  const {previous, next} = data;
  const author = post.frontmatter.author;
  const avatar = (
    author.gifPlaceHolder.childImageSharp.gatsbyImageData
  );

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className={styles.article}
        itemScope
        itemType='http://schema.org/Article'
      >
        <div className={styles.postContainer}>
          <header className={styles.header}>
            <h1 itemProp='headline'>{post.frontmatter.title}</h1>
            <p>
              <time datetime={post.frontmatter.date}>{post.frontmatter.dateReadable}</time>
              <span className={styles.dateAuthorSpace}/>
              <ShortBio fullName={author.fullName}/>
            </p>
          </header>
          <section
            className={styles.postContent}
            dangerouslySetInnerHTML={{__html: post.html}}
            itemProp='articleBody'
          />
        </div>
        <footer className={styles.footer}>
          <div className={styles.bioFooter}>
            <div className={styles.postContainer}>
              <Bio
                fullName={author.fullName}
                writtenDate={post.frontmatter.dateReadable}
                avatar={avatar}
                email={author.email}
                github={author.github}
                linkedIn={author.linkedIn}
              />
            </div>
          </div>
          <div className={styles.navFooter}>
            <div className={styles.postContainer}>
              Continue Reading..
            </div>
          </div>
        </footer>
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

BlogPostTemplate.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        dateReadable: date(formatString: "MMMM DD, YYYY")
        description
        author {
          fullName
          email
          github
          linkedIn
          gifPlaceHolder {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED,
                placeholder: BLURRED,
                width: 80,
                aspectRatio: 1
              )
            }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
