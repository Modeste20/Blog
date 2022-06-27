import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import delve from 'dlv'
import CardArticle from '../CardArticle/CardArticle'

const BlogEntries = () => {

    const articles = useStaticQuery(graphql`
    query MyQuery {
        allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
          edges {
            node {
              frontmatter {
                title
                category
                description
                date(formatString: "LL", locale: "fr-FR")
                image_hero_alt
                image_hero {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
      
    `)


    const data = delve(articles, 'allMdx.edges')

    console.log('articles', data)

    if (data && data.length) {
        return (
            <section className="blog-entries pt-5 pb-3" id="blog-entries">
                <div className="container-md">
                    <h2 className="section-title">
                        Articles populaires
                    </h2>
                    <div className="articles px-0 pt-2 pb-5">
                        <div className="row">
                            {
                                data.map(({ node: { frontmatter: { title, category, description, date, image_hero_alt, image_hero } } }) => {
                                    return (
                                        <CardArticle url={'/'} image_data={image_hero} category={category} image_alt={image_hero_alt} title={title} description={description} date={date} />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>
            </section>
        )
    } else {
        return null
    }
}

export default BlogEntries