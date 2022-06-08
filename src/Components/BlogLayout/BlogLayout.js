import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../Layout/Layout"


const BlogLayout = ({ data }) => {
    console.log(data.mdx)
    return (
      <section className="article" style={{marginTop:100}}>
        <h2>{data && data.mdx.frontmatter.title}</h2>
        <MDXProvider>
          <Layout pageTitle={'Blog'}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Layout>
        </MDXProvider>
      </section>
  
    )
  }
  
  export const query = graphql`
    query ($id: String) {
      mdx(id: {eq: $id}) {
        body
        frontmatter {
          title
        }
      }
    }
  `



  export default BlogLayout