module.exports = {
  siteMetadata: {
    title:`Andres Saumet | Full-Stack Developer`,
    description: `Andres Saumet web developer, with experience in programming languages such as javascript and python. I also use languages such as HTML5, CSS3, SCRUM methodology for teamwork and I speak two languages English and Spanish.`,
    author: `Andres Saumet`,
    image: 'https://www.andressaumet.com/static/6b0a6b8c91766268e15a50aa67f2ae81/3cd29/PhotoMe-background-2.webp',
    siteUrl: `https://www.andressaumet.com`,
    twitterUsername: '@SaumetAndres',
    keywords:["Web Developer", "Andres Saumet", "Developer", "Angular FrameWork", "React Js Framework", "HTML5", "CSS3", "JavaScript", "Phyton", "Bootstrap Framework", "Web Design", "Tailwind Framwork"],
    robots: `index, follow`
  },
  flags: {
  THE_FLAG: false
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/andres-saumet-web-developer.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
   {
    resolve: `gatsby-source-strapi`,
    options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1500, // Defaults to 100
        collectionTypes: [`Projects`, `Skills`,`Experiences`,`Testimonials`, `Articles`, `Terms`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-J7N5KM5X7E", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`
  ]
}
