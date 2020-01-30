/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Fastest Follow Up",
    titleTemplate: "%s · Fastest Follow Up",
    description:
      "Beat your competitors to Home Advisor Leads With Auto Texts",
    url: "https://www.fastestfollowup.com", // No trailing slash allowed!
    image: "/src/media/iphone.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@fastestfollowup",
  },
  plugins: [`gatsby-plugin-sass`],
}

