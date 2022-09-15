import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import delve from 'dlv'
import CardArticle from '../CardArticle/CardArticle'
import "./RecentPost.css"
import slugify from 'slugify'

const RecentPost = () => {

    const articles = useStaticQuery(graphql`
    query ooo {
        allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 4) {
          edges {
            node {
              frontmatter {
                title
                category
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

    if (data && data.length) {
        return (
            <section className="recent-posts my-5">
                <h5>Les articles récents</h5>
                <div className="hr"></div>
                <div className="list-recent-post mt-5 pt-5">
                    {
                        data.map(({node:{frontmatter:{title,category,date,image_hero,image_hero_alt}}}) =>(
                            <CardArticle 
                                url={slugify(title,{lower:true})}
                                blog 
                                image_data={image_hero}
                                image_alt={image_hero_alt}
                                title={title}
                                date={date}
                                category={category}
                             />
                        ))
                    }
                </div>
            </section>
        )
    } else{
        return null;
    }


}

export default RecentPost