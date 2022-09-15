import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../Layout/Layout"
import delve from 'dlv'
import "./BlogLayout.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MdxProvider from './../MdxProvider/MdxProvider'


const BlogLayout = ({ data }) => {
    console.log(data.mdx)
    const image = getImage(delve(data,'mdx.frontmatter.image_hero_large'))
    return (
      <Layout pageTitle={'Blog'}>
      <section className="blog-article">
        <h1>{delve(data,'mdx.frontmatter.title')}</h1>
        <div className="article-information">
          Publié le <strong>{delve(data,'mdx.frontmatter.date')}</strong> par <strong>{delve(data,'mdx.frontmatter.author') || "Landry Modeste"}</strong>
        </div>
        <div className="article-banner">
          <GatsbyImage image={image} alt={delve(data,'mdx.frontmatter.image_hero_alt')}  />
        </div>
        <MdxProvider>
            <MDXRenderer>
              {delve(data,'mdx.body')}
            </MDXRenderer>
        </MdxProvider>
      </section>
      </Layout>
  
    )
  }
  
  export const query = graphql`
    query ($id: String) {
      mdx(id: {eq: $id}) {
        body
        frontmatter {
          title
          date(formatString: "LL", locale: "fr-FR")
          image_hero_alt
          image_hero {
            childImageSharp {
              gatsbyImageData
            }
          }
          image_hero_large {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `



  export default BlogLayout