import { useLocation } from '@reach/router'
import { graphql, Link } from 'gatsby'
import React, { useEffect, useMemo, useState } from 'react'
import Layout from "../../Components/Layout/Layout"
import './blog.css'
import BlogNavbar from '../../Components/BlogNavbar/BlogNavbar'
import { BreadCrumb } from '../../Components/Shared/BreadCrumb/BreadCrum'
import queryString from 'query-string'
import Pagination from '../../Components/Shared/pagination/Pagination'
import CardArticle from '../../Components/CardArticle/CardArticle'
import slugify from 'slugify'
import moment from 'moment'
import 'moment/locale/fr'
import Banner from '../../Components/Shared/Banner/Banner'
import { Helmet } from 'react-helmet'


let PageSize = 3;

const Blog = ({ data }) => {
  console.log('data', data)
  const location = useLocation()

  //Pagination

  const [currentPage, setCurrentPage] = useState(1);



  const [articles, setArticles] = useState(data.allMdx.edges)
  const [datas, setDatas] = useState([])

  const search = queryString.parse(location.search)

  console.log('article-length', datas)

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    const blog_articles = data.allMdx.edges;

    if (blog_articles && Array.isArray(blog_articles)) {
      if (search.categorie) {

        const sectionElement = document.getElementById('articles')
        if (sectionElement) {
          window.scrollTo(0, sectionElement.offsetTop)
        }
        const dat = blog_articles.filter(({node}) => getCategory(node.frontmatter.category) === search.categorie);
        console.log('dat',dat)
        setArticles(dat)
        return dat.slice(firstPageIndex, lastPageIndex)
      } else{
        setArticles(blog_articles)
        return blog_articles.slice(firstPageIndex, lastPageIndex);
      }
    } else {
      return []
    }
  }

  useEffect(() => {
    console.log('search',search.categorie)
    setDatas(currentTableData)
  }, [location.search,currentPage])

    console.log('d', datas)


  const getCategory = (c) => {
    if (c === 'web') {
      return 'dev-web'
    }
    if (c === 'ui') {
      return 'ui-design'
    }
  }

  return (
    <Layout>

      <Helmet>
        <title>Blog | Landry</title>
      </Helmet>

      {/* BANNIERE */}

      <div className="banner banner-blog">
        <div className="banner-blog-image">

        </div>

        <div className="container-md banner-content h-100 d-flex justify-content-center align-items-center">
          <div>
            <h1 style={{ zIndex: '2 !important', color: '#fdfbfdc2' }}>Blog</h1>
            <BreadCrumb />
          </div>
        </div>
      </div>

      {/* ARTICLES */}

      <div className='row articles pt-5' id='articles'>
        <section className="col-12 col-lg-8 list-articles px-2 py-5 ml-5 order-1 order-lg-0">
          <div className="all-articles">
            {/*
              datas.length ? datas.map(({ node }) => <ArticleCard className={''} title={node.frontmatter.title} category={node.frontmatter.category} key={node.frontmatter.title} date={node.frontmatter.date} description={node.frontmatter.description} />) : <h5>Aucun articles</h5>
            */}

            <div className='container-md'>

            {
              datas.length ? datas.map(({ node: { frontmatter: { title, image_hero, image_hero_alt, category, date, description } } }) => (
                <CardArticle
                  blog
                  url={slugify(title,{lower:true})}
                  image_data={image_hero}
                  image_alt={image_hero_alt}
                  category={category}
                  date={moment(date.toString().split('T')[0]).format('LL')}
                  dateTime={date}
                  title={title}
                  description={description}
                  key={title}
                />)) : <h5>Aucun articles</h5>
            }
            </div>
          </div>
          <Pagination
            className=" pagination-bar "
            currentPage={currentPage}
            totalCount={articles ? articles.length : 0}
            pageSize={PageSize}
            onPageChange={setCurrentPage}
            datas={datas}
          />
        </section>
        <aside className="col-12 col-lg-4 order-0 order-lg-1 px-0">
          <BlogNavbar category={search.categorie} />
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
          date
          image_hero_alt
          image_hero {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        body
      }
    }
  }
}
`

export default Blog
