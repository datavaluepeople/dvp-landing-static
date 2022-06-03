import React from 'react';
import PropTypes from 'prop-types';
import {Link, graphql} from 'gatsby';

import Bio from '../components/blog-bio';
import Layout from '../components/layout/layout';
import Seo from '../components/seo';

import * as styles from './people.module.scss';


const BlogIndex = ({data, location}) => {
  const posts = data.allMarkdownRemark.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location}>
        <Seo title='All posts' />
        <p>
          No blog posts found.
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location}>
      <Seo title='All posts' />
      <h1 className={styles.title}>Posts</h1>
      <div className={styles.content}>
        <ol style={{listStyle: `none`}}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            const author = post.frontmatter.author;
            const avatar = (
              author.gifPlaceHolder.childImageSharp.gatsbyImageData
            );

            return (
              <li key={post.fields.slug}>
                <article
                  className='post-list-item'
                  itemScope
                  itemType='http://schema.org/Article'
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp='url'>
                        <span itemProp='headline'>{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp='description'
                    />
                  </section>
                  <address>
                    <Bio
                      fullName={author.fullName}
                      avatar={avatar}
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

export default BlogIndex;

BlogIndex.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};


export const BlogIndexPageQuery = graphql`query
{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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

