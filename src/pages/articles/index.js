import { graphql } from 'gatsby'
import React from 'react'
import Layout from './../../Components/Layout/Layout'

const Articles = ({data}) => {
    console.log('data',data)
    return (
        <Layout>
            <h2>Articles</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit dolore reiciendis illo, assumenda culpa est atque quibusdam rerum consequuntur accusantium laudantium blanditiis dolores soluta non id excepturi. Asperiores, et?
            </p>
            <ul>
            {data.allFile.nodes.map(c => <li key={c.id}>{c.name}</li>)}
            </ul>
        </Layout>
    )
}

export const query = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "articles"}}) {
    nodes {
        id,
        name
    }
  }
}
`

export default Articles