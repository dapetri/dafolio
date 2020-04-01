const tailwind = require("./tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "News from DaPetri", // Navigation and Site Title
  siteTitleAlt: "DaPetri News", // Alternative Site title for SEO
  siteTitleShort: "DaPetri News", // short_name for manifest
  siteUrl: "http://dapetri.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteDescription: "Portfolio and Blog by David Petri",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@dapetridev", // Twitter Username
  ogSiteName: "David Petri", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
