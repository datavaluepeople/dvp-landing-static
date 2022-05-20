const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `datavaluepeople`,
    author: {
      name: `datavaluepeople`,
      summary: `datavaluepeople`,
    },
    description: `datavaluepeople | We build bespoke data-driven systems.`,
    siteUrl: process.env.SITE_URL,
    social: {
      twitter: `datavaluepeople`,
    },
    hasFirebaseApp: process.env.HAS_FIREBASE_APP == 'true' ? true : false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway:400,500,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 0,
        duration: 100,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/data`,
        name: `track-record`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        env: {
          production: {
            policy: [{userAgent: '*', allow: '/'}],
          },
          staging: {
            policy: [{userAgent: '*', disallow: ['/']}],
          },
          staging2: {
            policy: [{userAgent: '*', disallow: ['/']}],
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `datavaluepeople`,
        short_name: `dvp`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#131f21`,
        display: `minimal-ui`,
        icon: `content/assets/datavaluepeople.png`,
        icons: [
          {
            src: `/favicon/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-firebase`,
      options: {
        credentials: {
          apiKey: process.env.FIREBASE_API_KEY,
          authDomain: process.env.FIREBASE_AUTH_DOMIAN,
          databaseURL: process.env.FIREBASE_DB_URL,
          projectId: process.env.FIREBASE_PROJECT_ID,
          storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
          messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
          appId: process.env.FIREBASE_APP_ID,
          measurementId: process.env.FIREBASE_MESUREMENT_ID,
        },
      },
    },
  ],
};
