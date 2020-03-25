const config = require("./dafolio-config");
const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    // Used for the title template on pages other than the index site
    siteTitle: `DaPetri`,
    // Default title of the page
    siteTitleAlt: `DaPetri - my life`,
    // Can be used for e.g. JSONLD
    siteHeadline: `DaPetri - my life`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://dapetri.com`,
    // Used for SEO
    siteDescription: `A snapshot of me`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.png`,
    // Twitter Handle
    author: `@dapetridev`
  },
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
        display: `standalone`
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
