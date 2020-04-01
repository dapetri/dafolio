const config = require("./dafolio-config");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site

    ///currently not working///
    siteTitle: `dafolio - my news`,
    // Default title of the page
    siteTitleAlt: `dafolio - my news`,
    // Can be used for e.g. JSONLD
    siteHeadline: `dafolio - my news`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: config.siteUrl + pathPrefix,
    // Used for SEO
    siteDescription: `my news`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `static/banner.png`,
    // Twitter Handle
    author: `@dapetridev`
  },

  // Plugins
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: `#141821`, //config.backgroundColor
        theme_color: `#f6ad55`, //config.themeColor
        display: `standalone`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: `markdown-pages`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
