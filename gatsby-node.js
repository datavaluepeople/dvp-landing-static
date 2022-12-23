const {createFilePath} = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }`,
  );

  if (result.errors) {
    reporter.panicOnBuild(
        `There was an error loading your blog posts`,
        result.errors,
    );
    return;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.nodes;

  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

    createPage({
      path: post.fields.slug,
      component: blogPost,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    });
  });
};

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode});
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

const express = require('express');
exports.onCreateDevServer=({app})=>{
  app.use(express.static('public'));
};

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions;

  // Explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      author: PeopleYaml @link(by: "yamlId")
      linkedin_link: String
      hackernews_link: String
    }
    type Fields {
      slug: String
    }
    type PeopleYaml implements Node {
      posts: [MarkdownRemark] @link(by: "frontmatter.author.id", from: "yamlId")
    }
  `);
};
