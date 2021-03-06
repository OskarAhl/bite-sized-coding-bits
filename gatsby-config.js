module.exports = {
  siteMetadata: {
    title: `Bite coding bits`,
    author: {
      name: `Oskar`,
      summary: `Hi 👋I'm Oskar Ahlroth and I'm a self-taught software developer based in Kuala Lumpur, Malaysia where I work for a fintech company.`,
    },
    description: `Learn programming concepts from interactive blog posts`,
    siteUrl: `https://www.bitecodingbits.com/`,
    social: {
      twitter: "AhlrothOskar",
    },
    image: "/coding-bits.png",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bite coding bits`,
        short_name: `Bite code snippets`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff0083`,
        display: `minimal-ui`,
        icon: `content/assets/coding-bits.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://gmail.us3.list-manage.com/subscribe/post?u=a068812268780cf1909942723&amp;id=63562c0667", // add your MC list endpoint here; see instructions below
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/, // See below to configure properly
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
