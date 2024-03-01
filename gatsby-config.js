

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title:'Mon portfolio  - blog',
        ok:'down'
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      //Favicon
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          icon: 'src/images/favicon.png',
        },
      },
      "gatsby-plugin-anchor-links",
        // to use StaticImage for static image
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        //For using GatsbyImage for dynamic image
        "gatsby-transformer-sharp",
        //Find our mdx file
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blogs`,
                path: `${__dirname}/src/blogs`,
            }
        },
        //Find our images files
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-mdx",
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-breadcrumb`,
            options: {
              defaultCrumb: {
                // location: required and must include the pathname property
                location: {
                  pathname: "/",
                },
                // crumbLabel: required label for the default crumb
                crumbLabel: "Accueil",
              },
            },
          }
    ]
}