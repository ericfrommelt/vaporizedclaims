module.exports = {
    plugins: [
        {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
            "G-62LWH56VMD",
            ],
        },
          },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: "Vaporized Claims",
              short_name: "Vaporized Claims",
              start_url: "/",
              background_color: "#fff",
              theme_color: "#000",
              // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
              // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
              display: "standalone",
              icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
              // An optional attribute which provides support for CORS check.
              // If you do not provide a crossOrigin option, it will skip CORS for manifest.
              // Any invalid keyword or empty string defaults to `anonymous`
              crossOrigin: `use-credentials`,
            },
          },
    ],
}