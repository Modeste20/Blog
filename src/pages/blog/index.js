import { useLocation } from '@reach/router'
import { graphql, Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import Layout from "../../Components/Layout/Layout"
import './blog.css'
import BlogNavbar from '../../Components/BlogNavbar/BlogNavbar'
import ArticleCard from '../../Components/ArticleCard/ArticleCard'
import { BreadCrumb } from '../../Components/Shared/BreadCrumb/BreadCrum'
import queryString from 'query-string'
import Pagination from '../../Components/Shared/pagination/Pagination'
import { useMemo } from 'react'

let PageSize = 3;

const Blog = ({ data }) => {
  console.log('data', data)
  const location = useLocation()

  //Pagination

  const [currentPage, setCurrentPage] = useState(1);



  const [articles, setArticles] = useState(data.allMdx.edges)
  const [datas, setDatas] = useState([])

  console.log('article-length',articles.length)

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if(articles && Array.isArray(articles)){
      return articles.slice(firstPageIndex, lastPageIndex);
    } else{
      return []
    }
  }

  useEffect(() =>{
    setDatas(currentTableData)
  },[currentPage])

  useEffect(() =>{
    console.log('d',datas,currentPage)
  },[currentPage])


  const getCategory = (c) => {
    if (c === 'web') {
      return 'dev-web'
    }
    if (c === 'ui') {
      return 'ui-design'
    }
  }

  useEffect(() => {
    const search = queryString.parse(location.search)
    setArticles(data.allMdx.edges)
    if (search.categorie) {
      setArticles(c => {
        return c.filter(d => d.node && getCategory(d.node.frontmatter.category) === search.categorie)
      })
    }
    const sectionElement = document.getElementById('articles')
    if (sectionElement && search.categorie) {
      window.scrollTo(0, sectionElement.offsetTop)
    }
  }, [location.search])

  return (
    <Layout>
      <div className="banner-blog">
        <div className="banner-blog-image">

        </div>
        <div className="container-md banner-content h-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 style={{ zIndex: '2 !important', color: '#fdfbfdc2' }}>Blog</h1>
            <BreadCrumb />
          </div>
        </div>
      </div>

      <div className='row articles pt-5' id='articles'>
        <section className="col-12 col-lg-8 list-articles px-2 py-5 ml-5">
          <div className="all-articles">
            {
              datas.length ? datas.map(({ node }) => <ArticleCard className={''} title={node.frontmatter.title} category={node.frontmatter.category} key={node.frontmatter.title} date={node.frontmatter.date} description={node.frontmatter.description} />) : <h5>Aucun articles</h5>
            }
          </div>
          <Pagination
            className=" pagination-bar "
            currentPage={currentPage}
            totalCount={articles ? articles.length : 0}
            pageSize={PageSize}
            onPageChange={setCurrentPage}
          />
        </section>
        <aside className="col-12 col-lg-4 px-0">
          <BlogNavbar />
        </aside>

      </div>

    </Layout>
  )
}
export const query = graphql`
query{
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        frontmatter {
          title
          category
          description
          date(formatString: "LL", locale: "fr-FR")
        }
        body
      }
    }
  }
}
`

export default Blog
