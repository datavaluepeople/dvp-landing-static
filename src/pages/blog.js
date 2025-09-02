import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import ShortBio from '../components/blog-bio/short-bio';
import Layout from '../components/layout/layout';

import * as styles from './blog.module.scss';
import SEO from '../components/seo';


const BlogIndex = ({data, location}) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <p>
          No blog posts found.
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <h1>Blog</h1>
      <div className={styles.content}>
        <ol style={{listStyle: `none`}}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const author = post.frontmatter.author;
            return (
              <li className={styles.postItem} key={post.fields.slug}>
                <article
                  itemScope
                  itemType='http://schema.org/Article'
                >
                  <header className={styles.postHeader}>
                    <h2 className={styles.postTitle}>
                      <Link to={post.fields.slug} itemProp='url'>
                        <span itemProp='headline'>{title}</span>
                      </Link>
                    </h2>
                    <small className={styles.postDate}>
                      {post.frontmatter.date}
                    </small>
                  </header>
                  <section className={styles.postSection}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp='description'
                    />
                  </section>
                  <address className={styles.postAddress}>
                    <ShortBio
                      fullName={author.fullName}
                    />
                  </address>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
};


export const Head = () => <SEO title="All posts" />;

export default BlogIndex;

BlogIndex.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};


export const BlogIndexPageQuery = graphql`query
{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      excerpt
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author {
          fullName
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
  }
}
`;

