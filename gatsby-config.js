module.exports = {
  siteMetadata: {
      title: `Portfolio`,
    siteUrl: `https://www.alexanderbrunhuemer.com`,
     author: `Alexander Brunhuemer`
  },
  plugins: [
    `gatsby-plugin-image`, 
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sitemap`, 
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`
  ]
};