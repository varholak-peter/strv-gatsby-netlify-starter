module.exports = {
  siteMetadata: {
    siteUrl: 'https://build-4ab46045-1b4c-4e01-b649-74d1a7656a80.gtsb.io/',
    title: 'STRV Gatsby & Netlify Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'STRV - GatsbyJS Starter',
        short_name: 'STRV - GatsbyJS',
        start_url: '/',
        background_color: '#111517',
        theme_color: '#EF0D33',
        display: 'standalone',
        icon: `${__dirname}/static/img/icon.png`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
  ],
}
