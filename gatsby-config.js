const languages = require('./src/data/languages')

module.exports = {
  siteMetadata: {
    title: `Killian Boucher`,
    description: `Welcome to my personal website. I’m Killian Boucher a 3D / VFX conceptor from Paris`,
    author: `@anthony-thuillez`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Portfolio | Killian Boucher",
        short_name: "Portfolio",
        start_url: "/",
        icon: "src/images/favicon_black.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    }
  ],
}
