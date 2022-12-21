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
        className='blog-post'
        itemScope
        itemType='http://schema.org/Article'
      >
        <header>
          <h1 itemProp='headline'>{post.frontmatter.title}</h1>
          <p>
            {post.frontmatter.date}
            <span className={styles.dateAuthorSpace}/>
            <ShortBio fullName={author.fullName}/>
          </p>
        </header>
        <section
          dangerouslySetInnerHTML={{__html: post.html}}
          itemProp='articleBody'
        />
        <hr />
        <footer>
          <Bio
            fullName={author.fullName}
            bio={author.bio}
            avatar={avatar}
            email={author.email}
          />
        </footer>
      </article>
      <nav className='blog-post-nav'>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel='prev'>
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel='next'>
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
        date(formatString: "MMMM DD, YYYY")
        description
        author {
          fullName
          bio
          email
          gifPlaceHolder {
            childImageSharp {
              gatsbyImageData(
                layout: FIXED,
                placeholder: BLURRED,
                width: 60,
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
